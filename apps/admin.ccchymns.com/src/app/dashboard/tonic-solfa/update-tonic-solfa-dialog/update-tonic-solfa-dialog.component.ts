import {
  ChangeDetectionStrategy,
  Component,
  Inject,
} from '@angular/core';
import { AddTonicSolfaDialogComponent } from '../add-tonic-solfa-dialog/add-tonic-solfa-dialog.component';
import { StorageService } from '../../storage.service';
import { DisplayService } from '@ccchymns.com/common';
import { TonicSolfaDataService } from '../tonic-solfa.data.service';
import { TuiDialogContext } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { DialogModule } from '../../shared/dialog.module';

@Component({
  selector: 'app-update-tonic-solfa-dialog',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './update-tonic-solfa-dialog.component.html',
  styleUrl: './update-tonic-solfa-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateTonicSolfaDialogComponent extends AddTonicSolfaDialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    protected readonly _context: TuiDialogContext<void>,
    tonicSolfaDataService: TonicSolfaDataService,
    storageService: StorageService,
    displayService: DisplayService,
  ) {
    super(
      _context,
      tonicSolfaDataService,
      storageService,
      displayService,
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.hymnNoFC.patchValue(this._context.data!);
  }
}
