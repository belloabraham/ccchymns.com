import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';
@Component({
  selector: 'app-add-bible-reference-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './add-bible-reference-dialog.component.html',
  styleUrl: './add-bible-reference-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBibleReferenceDialogComponent {
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
}
