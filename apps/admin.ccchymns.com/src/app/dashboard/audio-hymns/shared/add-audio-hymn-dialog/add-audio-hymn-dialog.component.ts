import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  DisplayService,
  IEditorsAudioHymn,
  RootLanguageResourceKey,
  Route,
} from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAudioHymnForm } from '../form';
import { TuiDialogContext } from '@taiga-ui/core';
import { AudioHymnsDataService } from '../../audio-hymns.data.service';
import { Router } from '@angular/router';
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
import { StorageService } from '../../../storage.service';
import { from, retryWhen } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-add-audio-hymn-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-audio-hymn-dialog.component.html',
  styleUrls: ['./add-audio-hymn-dialog.component.scss', '../../../dialog.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAudioHymnDialogComponent implements OnInit, OnDestroy {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  audioHymnForm!: FormGroup<IAudioHymnForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
  ]);
  fileNameFC = new FormControl<string | null>(null, [Validators.required]);
  file?: File;
  formSubmitted = false;
  private subscriptions = new SubSink();

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string>,
    private audioHymnsDataService: AudioHymnsDataService,
    private storageService: StorageService,
    private router: Router,
    private displayService: DisplayService
  ) {}

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  audioHymnIsInvalid() {
    return this.formSubmitted && this.fileNameFC.invalid;
  }

  ngOnInit(): void {
    this.createAudioHymnForm();
  }

  private createAudioHymnForm() {
    this.audioHymnForm = new FormGroup<IAudioHymnForm>({
      no: this.hymnNoFC,
      fileName: this.fileNameFC,
    });
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.audioHymnForm.valid) {
      const no = this.hymnNoFC.value!;
      const file = this.file!;
      const fileNameWithExt = no + '.' + FileUtil.getFileExtension(file.name);
      const audioFile = FileUtil.rename(file, fileNameWithExt);
      const responsiveSvgSize = this.displayService.percentage * 60;
      const responsiveFontSize = this.displayService.percentage * 16;
      Shield.pulse(
        responsiveFontSize,
        responsiveSvgSize,
        `Uploading audio hymn please wait`
      );
      const storagePath = [
        StoragePath.AUDIO,
        this.getAudioLanguagePath(),
        fileNameWithExt,
      ];
      this.uploadEditorsAudioHymn(no, storagePath, audioFile);
    }
  }

  private uploadEditorsAudioHymn(
    no: number,
    storagePath: string[],
    audioFile: File
  ) {
    this.storageService.uploadFile(storagePath, audioFile, {
      onComplete: (fileDownloadUrl) => {
        this.subscriptions.sink = from(
          this.updateEditorsUploadedAudioHymnRecord(no, fileDownloadUrl)
        )
          .pipe(retryWhen(genericRetryStrategy()))
          .subscribe({
            next: () => {
              new NotificationBuilder()
                .build()
                .success('Audio hymn uploaded successfully');
              this.context.$implicit.complete();
              Shield.remove();
            },
            error: (error) => {
              this.storageService.deleteFile(storagePath);
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

  private updateEditorsUploadedAudioHymnRecord(
    no: number,
    downloadUrl: string
  ) {
    const data: IEditorsAudioHymn = {
      no: no,
    };
    const basePath = `/${Route.LYRICS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      data.yoruba = downloadUrl;
      return this.audioHymnsDataService.updateYorubaAudioHymn(data);
    }

    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      data.english = downloadUrl;
      return this.audioHymnsDataService.updateEnglishAudioHymn(data);
    }

    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      data.french = downloadUrl;
      return this.audioHymnsDataService.updateFrenchAudioHymn(data);
    }

    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      data.egun = downloadUrl;
    }

    return this.audioHymnsDataService.updateEgunAudioHymn(data);
  }

  showUploadFailedNotification(error: any) {
    new NotificationBuilder().build()
      .error(`Unable to upload audio hymn at the moment, try again later.
      Error: ${error}
    `);
  }

  private getAudioLanguagePath(): string {
    const basePath = `/${Route.AUDIO_HYMNS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      return StoragePath.YORUBA;
    }

    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      return StoragePath.ENGLISH;
    }

    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      return StoragePath.EGUN;
    }

    return StoragePath.FRENCH;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
