import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bible-references',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bible-references.component.html',
  styleUrls: ['./bible-references.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleReferencesComponent {}
