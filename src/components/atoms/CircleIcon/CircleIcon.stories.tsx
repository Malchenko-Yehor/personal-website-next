import React from 'react';
import CircleIcon, { CircleIconProps } from "./index";

export default {
  title: 'Atoms/CircleIcon',
  component: CircleIcon,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args: CircleIconProps) => <CircleIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  src: '/images/emakina.svg',
} as CircleIconProps;
