import type { Meta, StoryObj } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';

const meta: Meta<TextInputComponent> = {
  component: TextInputComponent,
  title: 'TextInputComponent',
};
export default meta;
type Story = StoryObj<TextInputComponent>;

export const PrimaryEnabled: Story = {
  args: {
    placeholder: 'Testing Placeholder',
    disabled: false,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    placeholder: 'Testing Placeholder: Disabled',
    disabled: true,
  },
};
