import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AudioComponent {}
