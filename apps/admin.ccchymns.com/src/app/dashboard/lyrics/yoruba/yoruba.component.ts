import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { NgMatTooltipModule, NgMaterialButtonModule } from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { DisplayService, Size } from '@ccchymns.com/common';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [
    SharedModule,
    CCCIconDirective,
    NgMaterialButtonModule,
    NgMatTooltipModule,
  ],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent implements OnDestroy {
  loopArray = new Array(70);
  private subscriptions = new SubSink();
  isDesktop = false;

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
