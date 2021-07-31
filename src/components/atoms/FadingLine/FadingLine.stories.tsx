import React from 'react';
import FadingLine from "./FadingLine.styled";

export default {
  title: 'Atoms/FadingLine',
  component: FadingLine,
  parameters: {
    layout: 'centered',
  }
};

const Template = args => <FadingLine {...args} />;

export const Default = Template.bind({});
