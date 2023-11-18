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
  @Input('ccc-icon') name!:
    | 'phone-fill'
    | 'email-fill'
    | 'star-fill'
    | 'star-half'
    | 'facebook'
    | 'instagram'
    | 'x-circle'
    | 'youtube'
    | 'arrow-left'
    | 'menu'
    | 'logout'
    | 'close'
    | 'chevron-up'
    | 'chevron-down'
    | 'chevron-right'
    | 'bible'
    | 'audio'
    | 'book-edit'
    | 'audio-hymns'
    | 'all-hymns'
    | 'music-clef'
    | 'plus-circle'
    | 'arrow-right'
    | 'pencil-outline'
    | 'sort';
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
    return `ccci-${this.name} ccci-${this.position} ${iconStateClass}`;
  }
}
