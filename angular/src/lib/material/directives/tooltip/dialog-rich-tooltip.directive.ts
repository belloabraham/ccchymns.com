import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'a[ng-mat-dialog-rich-tooltip], button[ng-mat-dialog-rich-tooltip]',
  exportAs: 'ngMatDialogRichTooltipButton',
  standalone: true,
})
export class NgMatDialogRichTooltipButtonDirective implements OnInit {
  @Input({ required: true }) id!: string;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'data-tooltip-id',
      this.id
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-haspopup',
      'dialog'
    );
    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'aria-expanded',
      'false'
    );
  }
}
