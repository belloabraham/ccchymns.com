import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILyricsForm } from '../form';
import { LanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-edit-lyrics-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './edit-lyrics-dialog.component.html',
  styleUrl: './edit-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLyricsDialogComponent implements OnInit {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  lyricsForm!: FormGroup<ILyricsForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  lyricsFC = new FormControl<string | null>(null, [Validators.required]);
  formSubmitted = false;
  languageResourceKey = LanguageResourceKey;

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
}
