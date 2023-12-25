import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAudioHymnForm } from '../form';

@Component({
  selector: 'app-add-audio-hymn-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-audio-hymn-dialog.component.html',
  styleUrls: ['./add-audio-hymn-dialog.component.scss', '../../../dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAudioHymnDialogComponent implements OnInit {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  audioHymnForm!: FormGroup<IAudioHymnForm>;
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
    this.audioHymnForm = new FormGroup<IAudioHymnForm>({
      no: this.hymnNoFC,
      audio: this.audioFC,
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if(this.audioHymnForm.valid){
      //TODO
    }
  }
}
