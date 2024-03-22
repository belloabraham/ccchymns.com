import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  CCCPageNotFoundComponent,
} from '@ccchymns.com/common';
import {
  SharedModule,
} from '@ccchymns.com/angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [SharedModule, CCCPageNotFoundComponent],
  templateUrl: './page-not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Error 404 - Page Not Found');
  }
}
