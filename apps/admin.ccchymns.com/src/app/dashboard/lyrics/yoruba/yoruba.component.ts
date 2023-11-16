import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CCCIconDirective } from '@ccchymns.com/ui';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';

@Component({
  selector: 'app-lyrics-yoruba',
  standalone: true,
  imports: [SharedModule, CCCIconDirective, NgMaterialButtonModule],
  templateUrl: './yoruba.component.html',
  styleUrl: './yoruba.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YorubaComponent {}
