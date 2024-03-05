import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { AddAudioHymnDialogComponent } from '../add-audio-hymn-dialog/add-audio-hymn-dialog.component';
import { SharedModule } from '../../../shared';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';
import { TuiDialogContext } from '@taiga-ui/core';
import { AudioHymnsDataService } from '../../audio-hymns.data.service';
import { StorageService } from '../../../storage.service';
import { DisplayService } from '@ccchymns.com/common';
import { Router } from '@angular/router';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-update-audio-hymn-dialog',
  standalone: true,
  imports: [SharedModule, NgMaterialButtonModule],
  templateUrl: './update-audio-hymn-dialog.component.html',
  styleUrls: ['./update-audio-hymn-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateAudioHymnDialogComponent extends AddAudioHymnDialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    public _context: TuiDialogContext<number>,
    audioHymnsDataService: AudioHymnsDataService,
    storageService: StorageService,
    router: Router,
    displayService: DisplayService
  ) {
    super(
      _context,
      audioHymnsDataService,
      storageService,
      router,
      displayService
    );
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.hymnNoFC.patchValue(this._context.data!);
  }
}
