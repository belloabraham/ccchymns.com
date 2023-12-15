import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RootLanguageResourceKey } from '@ccchymns.com/common';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBibleReferenceForm } from '../form';
@Component({
  selector: 'app-add-bible-reference-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './add-bible-reference-dialog.component.html',
  styleUrl: './add-bible-reference-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddBibleReferenceDialogComponent implements OnInit {
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;

  bibleReferenceForm!: FormGroup<IBibleReferenceForm>;
  referenceFC = new FormControl<string | null>(null, [Validators.required]);
  versesFC = new FormControl<string | null>(null, [Validators.required]);

  ngOnInit(): void {
    this.createBibleReferenceForm();
  }

  private createBibleReferenceForm() {
    this.bibleReferenceForm = new FormGroup<IBibleReferenceForm>({
      reference: this.referenceFC,
      verses: this.versesFC,
    });
  }
}
