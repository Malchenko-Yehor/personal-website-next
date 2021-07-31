import React from 'react';
import CrossButton, { CrossButtonProps } from "./index";

export default {
  title: 'Atoms/CrossButton',
  component: CrossButton,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args: CrossButtonProps) => <CrossButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  animated: true
} as CrossButtonProps;
