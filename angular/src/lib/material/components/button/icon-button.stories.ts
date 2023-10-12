import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NgMaterialIconButtonComponent } from './icon-button';
import { NgMaterialButtonModule } from '../../ng-mat-button.module';

const meta: Meta<NgMaterialIconButtonComponent> = {
  component: NgMaterialIconButtonComponent,
  title: 'Components/Button',
  decorators: [
    moduleMetadata({
      imports: [NgMaterialButtonModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<NgMaterialIconButtonComponent>;

export const Icon: Story = {
  parameters: {
    storySource: {
      source: `
      <button ng-mat-icon-button ></button>
      
       //Required the import of NgMaterialButtonModule from libs/angular
      `,
    },
  },
  render: (args) => ({
    props: args,
    template: `<button ng-mat-icon-button ></button>`,
  }),
  args: {},
};

