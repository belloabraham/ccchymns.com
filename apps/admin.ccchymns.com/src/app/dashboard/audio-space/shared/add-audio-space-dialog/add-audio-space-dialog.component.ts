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
  fileNameFC = new FormControl<string | null>(null, [Validators.required]);
  formSubmitted = false;
  file?: File;

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  audioSpaceIsInvalid() {
    return this.formSubmitted && this.fileNameFC.invalid;
  }

  ngOnInit(): void {
    this.createAudioSpaceForm();
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  private createAudioSpaceForm() {
    this.audioSpaceForm = new FormGroup<IAudioSpaceForm>({
      no: this.hymnNoFC,
      fileName: this.fileNameFC,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.audioSpaceForm.valid) {
      //TODO
    }
  }
}
