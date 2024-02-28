import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { SharedModule } from '../../shared';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ITonicSolfaForm } from '../form';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-tonic-solfa-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './tonic-solfa-dialog.component.html',
  styleUrls: ['./tonic-solfa-dialog.component.scss', '../../dialog.scss'],
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
  tonicFC = new FormControl<FileList | null>(null, [Validators.required]);
  formSubmitted = false;

  hymnNoIsInvalid() {
    return this.formSubmitted && this.hymnNoFC.invalid;
  }

  tonicSolfaIsInvalid() {
    return this.formSubmitted && this.tonicFC.invalid;
  }

  ngOnInit(): void {
    this.createTonicSolfaForm();
  }

  private createTonicSolfaForm() {
    this.tonicSolfaForm = new FormGroup<ITonicSolfaForm>({
      no: this.hymnNoFC,
      tonic: this.tonicFC,
    });
  }

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: TuiDialogContext<void>
  ) {}

  onSubmit() {
    this.formSubmitted = true;
    this.context.$implicit.complete();
    if (this.tonicSolfaForm.valid) {
      //TODO
    }
  }
}
