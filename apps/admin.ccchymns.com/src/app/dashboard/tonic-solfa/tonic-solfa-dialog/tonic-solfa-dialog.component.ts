import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { SharedModule } from '../../shared';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITonicSolfaForm } from '../form';
import { LanguageResourceKey } from '../i18n/language-resource-key';

@Component({
  selector: 'app-tonic-solfa-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './tonic-solfa-dialog.component.html',
  styleUrl: './tonic-solfa-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaDialogComponent implements OnInit {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  audioHymnForm!: FormGroup<ITonicSolfaForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  audioFC = new FormControl<FileList | null>(null, [Validators.required]);
  formSubmitted = false;

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  audioHymnIsInvalid() {
    return this.formSubmitted && this.audioFC.invalid;
  }

  ngOnInit(): void {
    this.createAudioSpaceForm();
  }

  private createAudioSpaceForm() {
    this.audioHymnForm = new FormGroup<ITonicSolfaForm>({
      no: this.hymnNoFC,
      tonic: this.audioFC,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.audioHymnForm.valid) {
      //TODO
    }
  }
}
