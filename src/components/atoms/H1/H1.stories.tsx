import React from 'react';
import H1, { H1Props } from "./H1";

export default {
  title: 'Atoms/H1',
  component: H1
};

const Template = (args: H1Props) => <H1 {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Heading 1'
} as H1Props;