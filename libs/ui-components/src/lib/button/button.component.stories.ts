import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const TextButtonEnabled: Story = {
  args: {
    label: 'Test Button',
    disabled: false,
  },
};

export const TextButtonDisabled: Story = {
  args: {
    label: 'Test Button',
    disabled: true,
  }
};
