import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILyricsForm } from '../form';

@Component({
  selector: 'app-add-lyrics-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './add-lyrics-dialog.component.html',
  styleUrl: './add-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLyricsDialogComponent implements OnInit {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  lyricsForm!: FormGroup<ILyricsForm>;
  hymnNoFC = new FormControl<number | null>(null, [Validators.required]);
  lyricsFC = new FormControl<string | null>(null, [Validators.required]);

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, string>
  ) {}

  ngOnInit(): void {
    this.createLyricsForm();
  }

  private createLyricsForm() {
    this.lyricsForm = new FormGroup<ILyricsForm>({
      no: this.hymnNoFC,
      lyrics: this.lyricsFC,
    });
  }

  submit(): void {
    // if (this.value !== null) {
    this.context.completeWith('');
    //  }
  }

  showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }
}
