import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-add-audio-hymn-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './add-audio-hymn-dialog.component.html',
  styleUrl: './add-audio-hymn-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAudioHymnDialogComponent {
  rootLanguageResourceKey = RootLanguageResourceKey;
  languageResourceKey = LanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
}
