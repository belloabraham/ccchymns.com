import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { MDCTooltip, XPosition, YPosition } from '@material/tooltip';

@Component({
  selector: 'ng-mat-dialog-rich-tooltip',
  standalone: true,
  templateUrl: './dialog-rich-tooltip.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NgMaterialDialogRichTooltipComponent implements AfterViewInit {
  @ViewChild('mdcTooltip') tooltip!: ElementRef;
  @Input() persistent = false;
  @Input({ required: true }) id!: string;
  @Input() hideDelay = 100;
  @Input() showDelay = 100;
  @Input() xPosition?: XPosition;
  @Input() yPosition?: YPosition;

  ngAfterViewInit(): void {
    const tooltip = new MDCTooltip(this.tooltip.nativeElement);
    tooltip.setHideDelay(this.hideDelay);
    tooltip.setShowDelay(this.showDelay);
    tooltip.setTooltipPosition({
      xPos: this.xPosition,
      yPos: this.yPosition,
    });
  }
}
