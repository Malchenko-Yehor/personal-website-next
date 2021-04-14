import React from 'react';
import FadingLine, { FadingLineProps } from "./FadingLine.styled";

export default {
  title: 'Atoms/FadingLine',
  component: FadingLine
};

const Template = (args: FadingLineProps) => <FadingLine {...args} />;

export const Default = Template.bind({});

Default.args = {
  animatable: true,
  animationTime: 3000,
  startAnimation: true
} as FadingLineProps;
