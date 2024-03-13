import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAudioSpaceForm } from '../form';
import {
  Config,
  CustomValidator,
  DisplayService,
  IEditorsAudioSpace,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { FormError, SharedModule } from '../../../shared';
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
import { StorageErrorCode } from '@angular/fire/storage';

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
    Validators.max(Config.MAX_HYMN_NUMBER),
    CustomValidator.noDecimalNumber(),
  ]);
  fileNameFC = new FormControl<string | null>(null, [Validators.required]);
  formSubmitted = false;
  file?: File;
  private subscriptions = new SubSink();

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<number>,
    private audioSpaceDataService: AudioSpaceDataService,
    private storageService: StorageService,
    private displayService: DisplayService
  ) {}

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  uploadSizeExceeded() {
    return (
      this.formSubmitted &&
      this.fileNameFC.errors &&
      this.fileNameFC.errors[FormError.maxFileSizeExceeded.name]
    );
  }

  audioSpaceIsInvalid() {
    return (
      this.formSubmitted &&
      this.fileNameFC.errors &&
      this.fileNameFC.errors['required']
    );
  }

  ngOnInit(): void {
    this.createAudioSpaceForm();
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.size > Config.MAX_AUDIO_UPLOAD_FILE_SIZE_IN_MB) {
        this.fileNameFC.setErrors(FormError.maxFileSizeExceeded());
      } else {
        this.file = file;
      }
    }
  }

  private createAudioSpaceForm() {
    this.audioSpaceForm = new FormGroup<IAudioSpaceForm>({
      no: this.hymnNoFC,
      fileName: this.fileNameFC,
    });
  }

  async onSubmit() {
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

      try {
        const result = await this.uploadEditorsAudioSpace(
          storagePath,
          audioFile
        );

        const fileDownloadUrl = await this.storageService.getDownloadUrl(
          result.ref
        );

        this.subscriptions.sink = from(
          this.updateEditorsUploadedAudioSpaceRecord(no, fileDownloadUrl)
        ).subscribe({
          next: () => {
            new NotificationBuilder()
              .build()
              .success('Audio space uploaded successfully');
            this.context.$implicit.complete();
          },
          error: (error) => {
            this.storageService.deleteFileFrom(storagePath);
            this.showUploadFailedNotification(error);
          },
        });
      } catch (error) {
        this.showUploadFailedNotification(error);
      } finally {
        Shield.remove();
      }
    }
  }

  private uploadEditorsAudioSpace(storagePath: string[], audioFile: File) {
    return this.storageService.uploadFile(storagePath, audioFile);
  }

  private updateEditorsUploadedAudioSpaceRecord(
    no: number,
    downloadUrl: string
  ) {
    const data: IEditorsAudioSpace = {
      no: no,
      english: downloadUrl,
    };
    return from(this.audioSpaceDataService.updateEnglishAudioSpaces(data)).pipe(
      retryWhen(
        genericRetryStrategy({
          excludedStatusCodes: [
            StorageErrorCode.UNAUTHORIZED,
            StorageErrorCode.UNAUTHENTICATED,
          ],
        })
      )
    );
  }

  showUploadFailedNotification(error: any) {
    LoggerUtil.error(this, this.onSubmit.name, error);
    new NotificationBuilder().build()
      .error(`Unable to upload audio space at the moment, try again later.
      Error: ${error}
    `);
  }
}
