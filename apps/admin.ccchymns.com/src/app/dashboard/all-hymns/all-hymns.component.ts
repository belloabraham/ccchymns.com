import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-all-hymns',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './all-hymns.component.html',
  styleUrls: ['./all-hymns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsComponent {}
