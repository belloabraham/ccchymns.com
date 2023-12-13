import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

export const cccDrawerAnimations: {
  readonly transformDrawer: AnimationTriggerMetadata;
} = {
  // Animation that slides a drawer in and out.
  transformDrawer: trigger('transform', [
    state(
      'open, open-instant',
      style({
        transform: 'none',
        visibility: 'visible',
      })
    ),
    state(
      'void',
      style({
        'box-shadow': 'none',
        visibility: 'hidden',
      })
    ),
    transition('void => open-instant', animate('0ms')),
    transition(
      'void <=> open, open-instant => void',
      animate('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')
    ),
  ]),
};
