import React from 'react';
import CrossButton, { CrossButtonProps } from "./index";

export default {
  title: 'Atoms/CrossButton',
  component: CrossButton
};

const Template = (args: CrossButtonProps) => <CrossButton {...args} />;

export const Default = Template.bind({});

Default.args = {} as CrossButtonProps;
