import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';
import { NavigationComponent } from '../navigation/navigation.component';
import { HeaderComponent } from '../header/header.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-refund',
  standalone: true,
  imports: [SharedModule, NavigationComponent, HeaderComponent],
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RefundComponent {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('CCC Hymns - Refund Policy');
  }
}
