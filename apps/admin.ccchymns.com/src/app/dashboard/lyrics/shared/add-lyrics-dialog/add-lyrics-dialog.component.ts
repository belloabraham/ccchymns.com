import { CommonModule } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-add-lyrics-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-lyrics-dialog.component.html',
  styleUrl: './add-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLyricsDialogComponent {

}
