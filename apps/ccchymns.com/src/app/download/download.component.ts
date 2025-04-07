import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewChild,
} from '@angular/core';
import { environment } from '../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Device, Route } from '../../core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-download',
  standalone: true,
  imports: [],
  template: `<a #link [href]="url()" hidden></a>`,
})
export class DownloadComponent implements OnInit, AfterViewInit {
  private route = inject(ActivatedRoute);
  url = signal('');
  @ViewChild('link') link!: ElementRef<HTMLAnchorElement>;
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const contentId = this.route.snapshot.paramMap.get(
        Route.PARAMS.CONTENT_ID
      );
      this.setAppDownloadLink(contentId);
    }
  }

  setAppDownloadLink(contentId: string | null) {
    const androidAppId = environment.androidAppId;
    const iOSAppId = environment.iOSAppId;
    const deviceType = Device.type();
    this.url.set(`${environment.scheme}${environment.domain}`);

    if (deviceType === 'Android') {
      this.url.set(
        `intent://details?id=${androidAppId}#Intent;scheme=market;package=com.android.vending;end;`
      );
      if (contentId) {
        this.url.set(
          `intent://details?id=${androidAppId}&referrer=${contentId}#Intent;scheme=market;package=com.android.vending;end;`
        );
      }
    }

    if (deviceType === 'iOS') {
      this.url.set(`https://apps.apple.com/app/id${iOSAppId}`);
    }
  }

  ngAfterViewInit(): void {
    this.link.nativeElement.click();
  }
}
