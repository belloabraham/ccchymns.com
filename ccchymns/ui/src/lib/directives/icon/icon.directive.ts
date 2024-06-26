import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export type Icon =
  | 'phone-fill'
  | 'email-fill'
  | 'star-fill'
  | 'star-half'
  | 'facebook'
  | 'instagram'
  | 'x-circle-outline'
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
  | 'sort-asc'
  | 'sort-desc'
  | 'delete'
  | 'upload-outline'
  | 'e-circle'
  | 'f-circle'
  | 'y-circle'
  | 'publish'
  | 'check-circle'
  | 'eye'
  | 'e-circle-outline';

@Directive({
  selector: '[ccc-icon]',
  standalone: true,
})
export class CCCIconDirective implements OnChanges {
  @Input('ccc-icon') name!: Icon;
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
