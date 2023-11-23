import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../../shared';

@Component({
  selector: 'app-edit-lyrics-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './edit-lyrics-dialog.component.html',
  styleUrl: './edit-lyrics-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditLyricsDialogComponent {

}
