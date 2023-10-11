import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NgMaterialButtonComponent } from './button';

import { NgMaterialButtonModule } from '../../ng-mat-button.module';
import { NgMaterialElevationDirective } from '../../directives';

const meta: Meta<NgMaterialButtonComponent> = {
  component: NgMaterialButtonComponent,
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [NgMaterialButtonModule, NgMaterialElevationDirective],
    }),
  ],
};
export default meta;
type Story = StoryObj<NgMaterialButtonComponent>;

export const Flat: Story = {
  parameters: {
    storySource: {
      source: `
       <button ng-mat-button>Button</button>

        //Required the import of NgMaterialButtonModule from libs/angular
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `<button ng-mat-button>{{label}}</button>`,
  }),
  args: {
    label: 'Button',
  },
};

export const Raised: Story = {
  parameters: {
    storySource: {
      source: `
      <button ng-mat-raised-button [color]="color" [ng-mat-elevation]="elevation">Button</button>

     //Required the import of NgMaterialButtonModule and NgMaterialElevationDirective from libs/angular
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `<button ng-mat-raised-button [color]="color" [ng-mat-elevation]="elevation">{{label}}</button>`,
  }),
  args: {
    ...Flat.args,
    elevation: 1,
    color: 'primary',
  },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    elevation: { control: { type: 'range', min: 1, max: 10, step: 1 } },
  },
};

export const Stroked: Story = {
  parameters: {
    storySource: {
      source: `
       <button ng-mat-stroked-button>Button</button>

        //Required the import of NgMaterialButtonModule from libs/angular
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `<button ng-mat-stroked-button>{{label}}</button>`,
  }),
  args: {
    ...Flat.args,
  },
};
