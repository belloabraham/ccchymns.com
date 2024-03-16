import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import {
  Config,
  CustomValidator,
  DisplayService,
  IEditorsHymnUpdate,
  IHymnLyricsUIState,
  RootLanguageResourceKey,
  Route,
} from '@ccchymns.com/common';
import { TextFieldModule } from '@angular/cdk/text-field';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DashboardLanguageResourceKey } from '../../../i18n/language-resource-key';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ILyricsForm } from '../form';
import { LanguageResourceKey } from '../../i18n/language-resource-key';
import {
  JSON,
  LoggerUtil,
  NotificationBuilder,
  Shield,
} from '@ccchymns.com/core';
import { Router } from '@angular/router';
import { LyricsDataService } from '../../lyrics.data.service';

@Component({
  selector: 'app-edit-lyrics-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule, TextFieldModule],
  templateUrl: './edit-lyrics-dialog.component.html',
  styleUrl: './edit-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditLyricsDialogComponent implements OnInit {
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  lyricsForm!: FormGroup<ILyricsForm>;
  hymnNoFC = new FormControl<number | null>(null, [
    Validators.required,
    Validators.min(1),
    Validators.max(Config.MAX_HYMN_NUMBER),
    CustomValidator.noDecimalNumber(),
  ]);
  lyricsFC = new FormControl<string | null>(null, [
    Validators.required,
    CustomValidator.noWhitespace(),
  ]);
  formSubmitted = false;
  languageResourceKey = LanguageResourceKey;

  lyricsIsInvalid() {
    return this.formSubmitted && this.lyricsFC.invalid;
  }

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<
      IHymnLyricsUIState,
      IHymnLyricsUIState
    >,
    private displayService: DisplayService,
    private router: Router,
    private lyricsDataService: LyricsDataService
  ) {}

  ngOnInit(): void {
    this.createLyricsForm();
  }

  private createLyricsForm() {
    this.lyricsForm = new FormGroup<ILyricsForm>({
      no: this.hymnNoFC,
      lyrics: this.lyricsFC,
    });
    this.lyricsForm.setValue({
      ...this.context.data,
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.lyricsForm.valid) {
      const lyrics = JSON.escapeSpecialCharacters(this.lyricsFC.value!);
      const no = this.hymnNoFC.value!;
      const responsiveSvgSize = this.displayService.percentage * 60;
      const responsiveFontSize = this.displayService.percentage * 16;

      Shield.pulse(
        responsiveFontSize,
        responsiveSvgSize,
        `Updating hymn ${no} please wait`
      );
      this.updateHymn(no, lyrics)
        .then(() => {
          new NotificationBuilder()
            .build()
            .success('Hymn Lyrics updated successfully');
        })
        .catch((error) => {
          new NotificationBuilder().build().error(
            `Oops unable to update hymn lyrics at the moment, try again later
                Error: ${error.message}
              `
          );
          LoggerUtil.error(this, this.onSubmit.name, error);
        })
        .finally(() => {
          this.context.$implicit.complete();
          Shield.remove();
        });
    }
  }

  private updateHymn(no: number, lyrics: string) {
    const data: IEditorsHymnUpdate = {
      no: no,
      published: false,
    };
    const basePath = `/${Route.LYRICS}`;
    if (this.router.isActive(`${basePath}/${Route.YORUBA}`, true)) {
      data.yoruba = lyrics;
      return this.lyricsDataService.updateYorubaHymnLyrics(data);
    }

    if (this.router.isActive(`${basePath}/${Route.ENGLISH}`, true)) {
      data.english = lyrics;
      return this.lyricsDataService.updateEnglishHymnLyrics(data);
    }

    if (this.router.isActive(`${basePath}/${Route.FRENCH}`, true)) {
      data.french = lyrics;
      return this.lyricsDataService.updateFrenchHymnLyrics(data);
    }

    if (this.router.isActive(`${basePath}/${Route.EGUN}`, true)) {
      data.egun = lyrics;
    }

    return this.lyricsDataService.updateEgunHymnLyrics(data);
  }
}
