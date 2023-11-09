import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-bible-references',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './bible-references.component.html',
  styleUrls: ['./bible-references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesComponent {}
