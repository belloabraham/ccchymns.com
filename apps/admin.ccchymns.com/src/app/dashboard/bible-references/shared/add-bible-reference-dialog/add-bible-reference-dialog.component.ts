import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  CustomValidator,
  DisplayService,
  IBibleReference,
  RootLanguageResourceKey,
  Route,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBibleReferenceForm } from '../form';
import {
  JSON,
  LoggerUtil,
  NotificationBuilder,
  Regex,
  Shield,
  StringUtil,
} from '@ccchymns.com/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { Router } from '@angular/router';
import { BibleReferencesDataService } from '../../bible-references.data.service';
@Component({
  selector: 'app-add-bible-reference-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './add-bible-reference-dialog.component.html',
  styleUrl: './add-bible-reference-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBibleReferenceDialogComponent implements OnInit {
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  bibleReferenceForm!: FormGroup<IBibleReferenceForm>;
  referenceFC = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern(Regex.BIBLE_REFERENCE),
  ]);
  versesFC = new FormControl<string | null>(null, [
    Validators.required,
    CustomValidator.noWhitespace,
  ]);
  formSubmitted = false;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string>,
    private router: Router,
    private displayService: DisplayService,
    private bibleReferencesDataService: BibleReferencesDataService
  ) {}

  referenceIsInvalid() {
    return this.formSubmitted && this.referenceFC.invalid;
  }

  versesIsInvalid() {
    return this.formSubmitted && this.versesFC.invalid;
  }

  ngOnInit(): void {
    this.createBibleReferenceForm();
  }

  private createBibleReferenceForm() {
    this.bibleReferenceForm = new FormGroup<IBibleReferenceForm>({
      reference: this.referenceFC,
      verses: this.versesFC,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.bibleReferenceForm.valid) {
      const reference = JSON.escapeSpecialCharacters(
        StringUtil.capitalizeBibleReference(this.referenceFC.value!)
      ).trim();
      const verses = JSON.escapeSpecialCharacters(this.versesFC.value!).trim();
      const responsiveSvgSize = this.displayService.percentage * 60;
      const responsiveFontSize = this.displayService.percentage * 16;
      Shield.pulse(
        responsiveFontSize,
        responsiveSvgSize,
        `Adding bible reference please wait`
      );
      this.updateBibleReference(reference, verses)
        .then(() => {
          new NotificationBuilder()
            .build()
            .success('Bible references updated successfully');
        })
        .catch((error) => {
          new NotificationBuilder().build().error(
            `Oops unable to update bible reference at the moment, try again later
                Error: ${error.message}
              `
          );
          LoggerUtil.error(this, this.onSubmit.name, error);
        })
        .finally(() => {
          this.context.$implicit.complete();
          Shield.remove();
        });
    }
  }

  private updateBibleReference(reference: string, verses: string) {
    const data: IBibleReference = {
      reference: reference,
    };
    const basePath = `/${Route.BIBLE_REFERENCES}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      data.yoruba = verses;
      return this.bibleReferencesDataService.updateYorubaBibleReference(data);
    }

    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      data.english = verses;
      return this.bibleReferencesDataService.updateEnglishBibleReference(data);
    }

    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      data.french = verses;
      return this.bibleReferencesDataService.updateFrenchBibleReference(data);
    }

    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      data.egun = verses;
    }
    return this.bibleReferencesDataService.updateEgunBibleReference(data);
  }
}
