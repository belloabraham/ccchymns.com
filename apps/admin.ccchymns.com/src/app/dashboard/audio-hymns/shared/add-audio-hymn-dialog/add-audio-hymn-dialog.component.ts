import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-audio-hymn-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-audio-hymn-dialog.component.html',
  styleUrl: './add-audio-hymn-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddAudioHymnDialogComponent {

}
