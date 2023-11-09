import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-tonic-solfa',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './tonic-solfa.component.html',
  styleUrls: ['./tonic-solfa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaComponent {}
