import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { NgMatTooltipModule, NgMaterialButtonModule } from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { DisplayService, Size } from '@ccchymns.com/common';
import { COLUMN_NAMES, LyricsTableComponent } from '../shared/lyrics-table/lyrics-table.component';
import { LyricsPlaceholderComponent } from '../shared/lyrics-placeholder/lyrics-placeholder.component';

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

  constructor(private displayService: DisplayService) {
    this.getIsDeviceDisplayDesktopAsync();
  }

  getIsDeviceDisplayDesktopAsync() {
    this.subscriptions.sink = this.displayService.size$.subscribe(
      (displaySize) => {
        this.isDesktop = displaySize === Size.Large;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
