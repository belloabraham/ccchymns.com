import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import {
  SharedModule,
} from '@ccchymns.com/angular';
import { Title } from '@angular/platform-browser';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [
    SharedModule,
    NavigationComponent,
    HeaderComponent,
  ],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TermsComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('CCC Hymns - Terms of use');
  }
}
