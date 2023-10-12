import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[ccc-icon]',
  standalone: true,
})
export class CCCIconDirective implements OnChanges {
  @Input('ccc-icon') name!: string;
  @Input() position: 'start' | 'end' = 'start';
  @Input() state: 'on' | 'off' | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.hostElementClasses = this.getHostElementClasses();
  }

  @HostBinding('class') hostElementClasses = this.getHostElementClasses();

  private getHostElementClasses() {
    let iconStateClass = '';
    if (this.state === 'on') {
      iconStateClass = 'mdc-icon-button__icon mdc-icon-button__icon--on';
    }
    if (this.state === 'off') {
      iconStateClass = 'mdc-icon-button__icon';
    }
    return `ccc-i-${this.name} ccc-i-${this.position} ${iconStateClass}`;
  }
}
