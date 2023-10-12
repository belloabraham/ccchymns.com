import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ng-mat-elevation]',
  standalone: true,
})
export class NgMaterialElevationDirective implements OnChanges {
  @Input('ng-mat-elevation') elevation = 1;

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    return `mdc-elevation--z${this.elevation}`;
  }
}
