import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAudioSpaceForm } from '../form';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-add-audio-space-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-audio-space-dialog.component.html',
  styleUrls: [
    './add-audio-space-dialog.component.scss',
    '../../../dialog.scss',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAudioSpaceDialogComponent implements OnInit {
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;

  audioSpaceForm!: FormGroup<IAudioSpaceForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  audioFC = new FormControl<FileList | null>(null, [Validators.required]);
  formSubmitted = false;

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  audioSpaceIsInvalid() {
    return this.formSubmitted && this.audioFC.invalid;
  }

  ngOnInit(): void {
    this.createAudioSpaceForm();
  }

  private createAudioSpaceForm() {
    this.audioSpaceForm = new FormGroup<IAudioSpaceForm>({
      no: this.hymnNoFC,
      audio: this.audioFC,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if(this.audioSpaceForm.valid){
      //TODO
    }
  }
}
