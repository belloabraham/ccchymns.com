import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tonic-solfa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tonic-solfa.component.html',
  styleUrls: ['./tonic-solfa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaComponent {}
