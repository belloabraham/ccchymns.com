import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CustomValidator,
  IBibleReferenceUIState,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBibleReferenceForm } from '../form';
import { JSON, Regex } from '@ccchymns.com/core';
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
      const bibleReference: IBibleReferenceUIState = {
        reference: JSON.escapeSpecialCharacters(this.referenceFC.value!),
        verses: JSON.escapeSpecialCharacters(this.versesFC.value!),
      };
      //TODO make sure reference is trimed for a white space
    }
  }
}
