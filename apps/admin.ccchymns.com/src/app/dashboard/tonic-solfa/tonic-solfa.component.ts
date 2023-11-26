import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-tonic-solfa',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './tonic-solfa.component.html',
  styleUrls: ['./tonic-solfa.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TonicSolfaComponent {}
