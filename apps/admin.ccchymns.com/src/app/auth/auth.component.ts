import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { SubSink } from 'subsink';
import { AUTH_TOKEN, IAuth } from '../../core/auth';
import { Router } from '@angular/router';
import { Route } from '../../core/data/route';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnDestroy {
  private subscriptions = new SubSink();
  private authState$ = this.auth.getAuthSate$();

  constructor(@Inject(AUTH_TOKEN) private auth: IAuth, private router: Router) {
    this.subscriptions.sink = this.auth.getAuthSate$().subscribe((user) => {
      if (user) {
        this.router.navigate([Route.ROOT, Route.DASHBOARD])
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
