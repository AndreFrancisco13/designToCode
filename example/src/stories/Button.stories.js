import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'] },
    disabled: { control: 'boolean' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  size: 'medium',
  variant: 'primary',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  size: 'medium',
  variant: 'secondary',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  size: 'medium',
  variant: 'primary',
  disabled: true,
};
