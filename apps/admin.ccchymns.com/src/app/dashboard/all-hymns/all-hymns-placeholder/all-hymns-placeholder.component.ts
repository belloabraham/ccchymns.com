import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-hymns-placeholder',
  standalone: true,
  imports: [],
  templateUrl: './all-hymns-placeholder.component.html',
  styleUrl: './all-hymns-placeholder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsPlaceholderComponent {
  @Input({ required: true }) columnNames: string[] = [];
}
