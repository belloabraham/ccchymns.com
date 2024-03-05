import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { SharedModule } from '../../shared';
import {
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
import { Router } from '@angular/router';
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
} from 'apps/admin.ccchymns.com/src/core';
import { SubSink } from 'subsink';
import { from, retryWhen } from 'rxjs';

@Component({
  selector: 'app-tonic-solfa-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-tonic-solfa-dialog.component.html',
  styleUrls: ['./add-tonic-solfa-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaDialogComponent implements OnInit {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;

  tonicSolfaForm!: FormGroup<ITonicSolfaForm>;
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
    readonly context: TuiDialogContext<void>,
    private tonicSolfaDataService: TonicSolfaDataService,
    private storageService: StorageService,
    private displayService: DisplayService
  ) {}

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  tonicSolfaIsInvalid() {
    return this.formSubmitted && this.fileNameFC.invalid;
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
      this.file = fileList[0];
    }
  }

  onSubmit() {
    this.formSubmitted = true;
    this.context.$implicit.complete();
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
      this.uploadEditorsTonicSolfa(no, storagePath, pdfFile);
    }
  }

  private uploadEditorsTonicSolfa(
    no: number,
    storagePath: string[],
    pdfFile: File
  ) {
    this.storageService.uploadFile(storagePath, pdfFile, {
      onComplete: (fileDownloadUrl) => {
        this.subscriptions.sink = from(
          this.updateEditorsUploadedTonicSolfaRecord(no, fileDownloadUrl)
        )
          .pipe(retryWhen(genericRetryStrategy()))
          .subscribe({
            next: () => {
              new NotificationBuilder()
                .build()
                .success('Tonic solfa uploaded successfully');
              this.context.$implicit.complete();
              Shield.remove();
            },
            error: (error) => {
              this.storageService.deleteFileFrom(storagePath);
              this.showUploadFailedNotification(error);
              Shield.remove();
              LoggerUtil.error(this, this.uploadEditorsTonicSolfa.name, error);
            },
          });
      },
      onError: (error) => {
        this.showUploadFailedNotification(error);
        LoggerUtil.error(this, this.uploadEditorsTonicSolfa.name, error);
        Shield.remove();
      },
    });
  }

  private updateEditorsUploadedTonicSolfaRecord(
    no: number,
    downloadUrl: string
  ) {
    const data: IEditorsTonicSolfa = {
      no: no,
      url: downloadUrl,
    };

    return this.tonicSolfaDataService.updateTonicSolfa(data);
  }

  private showUploadFailedNotification(error: any) {
    new NotificationBuilder().build()
      .error(`Unable to upload tonic solfa at the moment, try again later.
      Error: ${error}
    `);
  }
}
