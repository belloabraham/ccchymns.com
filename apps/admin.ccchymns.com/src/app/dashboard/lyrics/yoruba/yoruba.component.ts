import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
} from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CCCIconDirective } from '@ccchymns.com/ui';
import {
  NgMatTooltipModule,
  NgMaterialButtonModule,
} from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { DisplayService, RootLanguageResourceKey, Size } from '@ccchymns.com/common';
import {
  COLUMN_NAMES,
  LyricsTableComponent,
} from '../shared/lyrics-table/lyrics-table.component';
import { LyricsPlaceholderComponent } from '../shared/lyrics-placeholder/lyrics-placeholder.component';
import { LYRICS } from '../shared/mock/lyrics';
import { LanguageResourceKey } from '../i18n/language-resource-key';
import { DashboardLanguageResourceKey } from '../../i18n/language-resource-key';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
    LyricsTableComponent,
    LyricsPlaceholderComponent,
  ],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent implements OnDestroy {
  private subscriptions = new SubSink();
  isDesktop = false;
  columnNames = COLUMN_NAMES;
  data = LYRICS;
  languageResourceKey = LanguageResourceKey;
  rootLanguageResourceKey = RootLanguageResourceKey;
  dashboardLanguageResourceKey = DashboardLanguageResourceKey;
  filterBy?: string;

  constructor(
    private displayService: DisplayService,
  ) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  getIsDeviceDisplayDesktopAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.isDesktop = displaySize === Size.Large;
      }
    );
  }

  onFilterTextChanged(event: any) {
    this.filterBy = event.target.value;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
