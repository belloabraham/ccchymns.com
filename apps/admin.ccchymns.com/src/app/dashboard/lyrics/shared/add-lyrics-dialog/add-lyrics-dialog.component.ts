import {
  Component,
  ChangeDetectionStrategy,
  Inject,
  TemplateRef,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';

@Component({
  selector: 'app-add-lyrics-dialog',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    TextFieldModule,
  ],
  templateUrl: './add-lyrics-dialog.component.html',
  styleUrl: './add-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLyricsDialogComponent {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, string>
  ) {}

  submit(): void {
    // if (this.value !== null) {
    this.context.completeWith('');
    //  }
  }

  showDialog(content: TemplateRef<TuiDialogContext>): void {
    this.dialogs.open(content, { dismissible: true }).subscribe();
  }
}
