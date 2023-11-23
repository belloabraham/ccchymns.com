import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-bible-reference-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-bible-reference-dialog.component.html',
  styleUrl: './add-bible-reference-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBibleReferenceDialogComponent {

}
