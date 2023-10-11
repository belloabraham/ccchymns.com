import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { MDCTooltip, XPosition, YPosition } from '@material/tooltip';

@Directive({
  selector: 'a[ng-mat-tooltip], button[ng-mat-tooltip]',
  exportAs: 'ngMatTooltipButton',
  standalone: true,
})
export class NgMatTooltipButtonDirective implements OnInit {
  @Input({ required: true }) id!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-describedby',
      this.id
    );
  }
}

@Directive({
  selector: 'div[ng-mat-tooltip]',
  exportAs: 'ngMatPlainTooltip',
  standalone: true,
})
export class NgMatTooltipDirective implements AfterViewInit, OnInit, OnChanges {
  @Input({ required: true }) id!: string;
  @HostBinding('id') hostElementId = this.id;
  @Input() showDelay = 100;
  @Input() hideDelay = 100;
  @Input() xPosition?: XPosition;
  @Input() yPosition?: YPosition;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-tooltip');
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'role',
      'tooltip'
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-hidden',
      'true'
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementId = this.id;
  }
  ngAfterViewInit(): void {
    const tooltip = new MDCTooltip(this.elementRef.nativeElement);
    tooltip.setShowDelay(this.showDelay);
    tooltip.setHideDelay(this.hideDelay);
    tooltip.setTooltipPosition({
      xPos: this.xPosition,
      yPos: this.yPosition,
    });
  }
}

@Directive({
  selector: 'a[ng-mat-tooltip-content-link]',
  standalone: true,
})
export class NgMatTooltipContentLinkDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'mdc-tooltip__content-link'
    );
  }
}
