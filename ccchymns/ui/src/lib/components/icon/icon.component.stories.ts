import type { Meta, StoryObj } from '@storybook/angular';
import { IconComponent } from './icon.component';

const meta: Meta<IconComponent> = {
  component: IconComponent,
  title: 'Components/Icon',
};
export default meta;
type Story = StoryObj<IconComponent>;

export const Primary: Story = {
  args: {},
};
