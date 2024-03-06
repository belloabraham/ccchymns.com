import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AddAudioSpaceDialogComponent } from '../add-audio-space-dialog/add-audio-space-dialog.component';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { AudioSpaceDataService } from '../../audio-space.data.service';
import { StorageService } from '../../../storage.service';
import { DisplayService } from '@ccchymns.com/common';
import { TuiDialogContext } from '@taiga-ui/core';

@Component({
  selector: 'app-update-audio-space-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './update-audio-space-dialog.component.html',
  styleUrl: './update-audio-space-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateAudioSpaceDialogComponent extends AddAudioSpaceDialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    protected readonly _context: TuiDialogContext<number>,
    audioSpaceDataService: AudioSpaceDataService,
    storageService: StorageService,
    displayService: DisplayService
  ) {
    super(_context, audioSpaceDataService, storageService, displayService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.hymnNoFC.patchValue(this._context.data!);
  }
}
