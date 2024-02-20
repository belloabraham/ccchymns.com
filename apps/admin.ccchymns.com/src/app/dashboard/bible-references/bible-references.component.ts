import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '@ccchymns.com/angular';
import { BibleReferencesDataService } from './bible-references.data.service';

@Component({
  selector: 'app-bible-references',
  standalone: true,
  imports: [SharedModule, RouterOutlet],
  templateUrl: './bible-references.component.html',
  styleUrls: ['./bible-references.component.scss'],
  providers:[BibleReferencesDataService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesComponent {}
