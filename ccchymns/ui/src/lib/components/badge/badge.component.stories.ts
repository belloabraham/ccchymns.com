import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CCCRoundedBadgeComponent } from './rounded-badge.component';
import { CCCBadgedModule } from '../../ccc-badge.module';
import { NgMaterialButtonModule } from '@ccchymns.com/angular';

const meta: Meta<CCCRoundedBadgeComponent> = {
  component: CCCRoundedBadgeComponent,
  title: 'Components/Badge',
  decorators: [
    moduleMetadata({
      imports: [NgMaterialButtonModule, CCCBadgedModule],
    }),
  ],
  argTypes: {
    background: {
      options: [
        'light',
        'danger',
        'warning',
        'danger',
        'info',
        'link',
        'dark',
        'secondary',
        'primary',
      ],
      control: { type: 'select' },
    },
  },
};
export default meta;
type Story = StoryObj<CCCRoundedBadgeComponent>;

export const Pill: Story = {
  parameters: {
    storySource: {
      source: `
          <button ng-mat-button >Button <span ccc-badge [posTopRight]="true" [background]="'primary'">1</span></button>
        //Require the import of CCCBadgedModule from libs/mydailydigest-ui
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <button class="me-5" ng-mat-button >Button <span ccc-badge [posTopRight]="posTopRight" [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-raised-button >Button <span ccc-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-raised-button color="secondary" >Button <span ccc-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    <button class="me-5" ng-mat-stroked-button>Button <span ccc-badge [background]="background" [posTopRight]="posTopRight" >{{label}}</span></button>
    `,
  }),
  args: {
    background: 'success',
    label: 1,
    posTopRight: true,
  },
};

export const RoundedPill: Story = {
  parameters: {
    storySource: {
      source: `
       <button ng-mat-raised-button color="secondary" >Button <span ccc-badge ccc-badge-rounded [background]="'primary'"></span></button>
        //Require the import of CCCBadgedModule from libs/mydailydigest-ui
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `
    <button class="me-5" ng-mat-button >Button <span ccc-badge  ccc-badge-rounded [background]="background"></span></button>
    <button class="me-5" ng-mat-raised-button >Button <span ccc-badge ccc-badge-rounded  [background]="background"></span></button>
    <button class="me-5" ng-mat-raised-button color="secondary" >Button <span ccc-badge ccc-badge-rounded [background]="background"></span></button>
    <button class="me-5" ng-mat-stroked-button  >Button <span ccc-badge ccc-badge-rounded [background]="background"></span></button>
    `,
  }),
  args: {
    background: 'success',
  },
};
