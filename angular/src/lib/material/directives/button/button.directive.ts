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
import { MDCRipple } from '@material/ripple';

@Directive()
export class NgMaterialBaseButtonDirective implements AfterViewInit, OnChanges {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    new MDCRipple(this.el.nativeElement);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }
  @Input() color: 'primary' | 'secondary' = 'primary';
  @HostBinding('class') hostElementClasses!: string;

  private getHostElementClasses() {
    if (this.color === 'secondary') {
      return `button-${this.color}`;
    }
    return this.color;
  }
}

@Directive({
  selector: '[ng-mat-stroked-button]',
  standalone: true,
})
export class NgMaterialStrokedButtonDirective
  extends NgMaterialBaseButtonDirective
  implements OnInit
{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(elementRef);
  }
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-button');
    this.renderer.addClass(
      this.elementRef.nativeElement,
      'mdc-button--outlined'
    );
  }
}

@Directive({
  selector: '[ng-mat-button]',
  standalone: true,
})
export class NgMaterialButtonDirective
  extends NgMaterialBaseButtonDirective
  implements OnInit
{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(elementRef);
  }
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-button');
  }
}

@Directive({
  selector: '[ng-mat-raised-button]',
  standalone: true,
})
export class NgMaterialRaisedButtonDirective
  extends NgMaterialBaseButtonDirective
  implements OnInit
{
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super(elementRef);
  }
  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-button');
    this.renderer.addClass(this.elementRef.nativeElement, 'mdc-button--raised');
  }
}
