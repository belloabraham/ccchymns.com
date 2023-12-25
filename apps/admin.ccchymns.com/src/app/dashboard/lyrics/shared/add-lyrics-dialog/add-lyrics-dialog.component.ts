import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILyricsForm } from '../form';
import { LanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-add-lyrics-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './add-lyrics-dialog.component.html',
  styleUrls: ['./add-lyrics-dialog.component.scss', '../../../dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLyricsDialogComponent implements OnInit {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;

  lyricsForm!: FormGroup<ILyricsForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  lyricsFC = new FormControl<string | null>(null, [Validators.required]);
  formSubmitted = false;

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  lyricsIsInvalid() {
    return this.formSubmitted && this.lyricsFC.invalid;
  }

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, string>
  ) {}

  ngOnInit(): void {
    this.createLyricsForm();
  }

  private createLyricsForm() {
    this.lyricsForm = new FormGroup<ILyricsForm>({
      no: this.hymnNoFC,
      lyrics: this.lyricsFC,
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.lyricsForm.valid) {
      //TODO
    }
  }

  showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }
}
