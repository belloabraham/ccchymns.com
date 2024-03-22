import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  SharedModule,
} from '@ccchymns.com/angular';
import { Route } from '../../core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    RouterLink,
    NgOptimizedImage,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  route = Route;
  root = Route.ROOT;
  @Input() colorClass = 'text-light';
  download() {
    console.log();
  }
}
