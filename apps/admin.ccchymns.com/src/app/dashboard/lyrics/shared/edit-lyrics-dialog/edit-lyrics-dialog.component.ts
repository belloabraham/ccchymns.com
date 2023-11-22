import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-lyrics-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-lyrics-dialog.component.html',
  styleUrl: './edit-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditLyricsDialogComponent {

}
