import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormError } from '../../shared';
import {
  Config,
  CustomValidator,
  DisplayService,
  IEditorsTonicSolfa,
  RootLanguageResourceKey,
} from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITonicSolfaForm } from '../form';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { StorageService } from '../../storage.service';
import { TonicSolfaDataService } from '../tonic-solfa.data.service';
import {
  FileUtil,
  LoggerUtil,
  NotificationBuilder,
  Shield,
} from '@ccchymns.com/core';
import {
  StoragePath,
  genericRetryStrategy,
} from '../../../../core';
import { SubSink } from 'subsink';
import { from, retryWhen } from 'rxjs';
import { StorageErrorCode } from '@angular/fire/storage';
import { DialogModule } from '../../shared/dialog.module';

@Component({
  selector: 'app-tonic-solfa-dialog',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './add-tonic-solfa-dialog.component.html',
  styleUrls: ['./add-tonic-solfa-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTonicSolfaDialogComponent implements OnInit {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  tonicSolfaForm!: FormGroup<ITonicSolfaForm>;
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
    readonly context: TuiDialogContext<void>,
    private tonicSolfaDataService: TonicSolfaDataService,
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

  tonicSolfaIsInvalid() {
    return (
      this.formSubmitted &&
      this.fileNameFC.errors &&
      this.fileNameFC.errors['required']
    );
  }

  ngOnInit(): void {
    this.createTonicSolfaForm();
  }

  private createTonicSolfaForm() {
    this.tonicSolfaForm = new FormGroup<ITonicSolfaForm>({
      no: this.hymnNoFC,
      fileName: this.fileNameFC,
    });
  }

  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file = fileList[0];
      if (file.size > Config.MAX_DOCUMENT_UPLOAD_FILE_SIZE_IN_MB) {
        this.fileNameFC.setErrors(FormError.maxFileSizeExceeded());
      } else {
        this.file = file;
      }
    }
  }

  async onSubmit() {
    this.formSubmitted = true;
    if (this.tonicSolfaForm.valid) {
      const no = this.hymnNoFC.value!;
      const file = this.file!;
      const fileNameWithExt = no + '.' + FileUtil.EXTENSION.PDF;
      const pdfFile = FileUtil.rename(file, fileNameWithExt);
      const responsiveSvgSize = this.displayService.percentage * 60;
      const responsiveFontSize = this.displayService.percentage * 16;
      Shield.pulse(
        responsiveFontSize,
        responsiveSvgSize,
        `Uploading Tonic Solfa please wait`
      );
      const storagePath = [StoragePath.TONIC_SOILFA, fileNameWithExt];
      try {
        const result = await this.uploadEditorsTonicSolfa(storagePath, pdfFile);

        const fileDownloadUrl = await this.storageService.getDownloadUrl(
          result.ref
        );

        this.subscriptions.sink = from(
          this.updateEditorsUploadedTonicSolfaRecord(no, fileDownloadUrl)
        ).subscribe({
          next: () => {
            new NotificationBuilder()
              .build()
              .success('Tonic solfa uploaded successfully');
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

  private uploadEditorsTonicSolfa(storagePath: string[], pdfFile: File) {
    return this.storageService.uploadFile(storagePath, pdfFile);
  }

  private updateEditorsUploadedTonicSolfaRecord(
    no: number,
    downloadUrl: string
  ) {
    const data: IEditorsTonicSolfa = {
      no: no,
      url: downloadUrl,
    };

    return from(this.tonicSolfaDataService.updateTonicSolfa(data)).pipe(
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

  private showUploadFailedNotification(error: any) {
    LoggerUtil.error(this, this.uploadEditorsTonicSolfa.name, error);
    new NotificationBuilder().build()
      .error(`Unable to upload tonic solfa at the moment, try again later.
      Error: ${error.message}
    `);
  }
}
