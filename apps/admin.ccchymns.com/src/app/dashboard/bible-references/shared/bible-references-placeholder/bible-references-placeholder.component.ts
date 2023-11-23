import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bible-references-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bible-references-placeholder.component.html',
  styleUrl: './bible-references-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BibleReferencesPlaceholderComponent {

}
