import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
@Component({
  selector: 'app-edit-lyrics-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './edit-lyrics-dialog.component.html',
  styleUrl: './edit-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLyricsDialogComponent {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<string, string>
  ) {}
}
