import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAudioSpaceForm } from '../form';
import {
  DisplayService,
  IEditorsAudioSpace,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { StorageService } from '../../../storage.service';
import { AudioSpaceDataService } from '../../audio-space.data.service';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {
  FileUtil,
  LoggerUtil,
  NotificationBuilder,
  Shield,
} from '@ccchymns.com/core';
import {
  StoragePath,
  genericRetryStrategy,
} from 'apps/admin.ccchymns.com/src/core';
import { SubSink } from 'subsink';
import { from, retryWhen } from 'rxjs';

@Component({
  selector: 'app-add-audio-space-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-audio-space-dialog.component.html',
  styleUrls: ['./add-audio-space-dialog.component.scss'],
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
  private subscriptions = new SubSink();

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string>,
    private audioSpaceDataService: AudioSpaceDataService,
    private storageService: StorageService,
    private displayService: DisplayService
  ) {}

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
      const no = this.hymnNoFC.value!;
      const file = this.file!;
      const fileNameWithExt = no + '.' + FileUtil.getFileExtension(file.name);
      const audioFile = FileUtil.rename(file, fileNameWithExt);
      const responsiveSvgSize = this.displayService.percentage * 60;
      const responsiveFontSize = this.displayService.percentage * 16;
      Shield.pulse(
        responsiveFontSize,
        responsiveSvgSize,
        `Uploading audio space please wait`
      );
      const storagePath = [
        StoragePath.AUDIO,
        StoragePath.ENGLISH,
        fileNameWithExt,
      ];
      this.uploadEditorsAudioSpace(no, storagePath, audioFile);
    }
  }

  private uploadEditorsAudioSpace(
    no: number,
    storagePath: string[],
    audioFile: File
  ) {
    this.storageService.uploadFile(storagePath, audioFile, {
      onComplete: (fileDownloadUrl) => {
        this.subscriptions.sink = from(
          this.updateEditorsUploadedAudioSpaceRecord(no, fileDownloadUrl)
        )
          .pipe(retryWhen(genericRetryStrategy()))
          .subscribe({
            next: () => {
              new NotificationBuilder()
                .build()
                .success('Audio space uploaded successfully');
              this.context.$implicit.complete();
              Shield.remove();
            },
            error: (error) => {
              this.storageService.deleteFileFrom(storagePath);
              this.showUploadFailedNotification(error);
              Shield.remove();
              LoggerUtil.error(this, this.onSubmit.name, error);
            },
          });
      },
      onError: (error) => {
        this.showUploadFailedNotification(error);
        Shield.remove();
      },
    });
  }

  private updateEditorsUploadedAudioSpaceRecord(
    no: number,
    downloadUrl: string
  ) {
    const data: IEditorsAudioSpace = {
      no: no,
      english: downloadUrl,
    };
    return this.audioSpaceDataService.updateEnglishAudioSpaces(data);
  }

  showUploadFailedNotification(error: any) {
    new NotificationBuilder().build()
      .error(`Unable to upload audio space at the moment, try again later.
      Error: ${error}
    `);
  }
}
