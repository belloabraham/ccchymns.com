import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
} from '@angular/core';
import { MDCRipple } from '@material/ripple';

@Directive({
  selector: '[ng-mat-icon-button]',
  standalone: true,
})
export class NgMaterialIconButtonDirective implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngAfterViewInit(): void {
    const iconButtonRipple = new MDCRipple(this.elementRef.nativeElement);
    iconButtonRipple.unbounded = true;
  }
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-icon-button');
  }
}
