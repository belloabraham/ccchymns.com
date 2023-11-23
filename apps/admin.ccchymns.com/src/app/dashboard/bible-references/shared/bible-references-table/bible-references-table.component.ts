import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bible-references-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bible-references-table.component.html',
  styleUrl: './bible-references-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BibleReferencesTableComponent {

}
