import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CCCHymnsPageNotFoundComponent } from '@ccchymns.com/common';

@Component({
  selector: 'ccchymns-page-not-found',
  standalone: true,
  imports: [CommonModule, CCCHymnsPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent {}
