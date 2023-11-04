import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-hymns',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-hymns.component.html',
  styleUrls: ['./all-hymns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHymnsComponent {}
