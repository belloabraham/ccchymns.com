import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-audio-space-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-audio-space-dialog.component.html',
  styleUrl: './add-audio-space-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAudioSpaceDialogComponent {

}
