import React from 'react';
import H3, { H3Props } from "./H3";

export default {
  title: 'Atoms/H3',
  component: H3
};

const Template = (args: H3Props) => <H3 {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Heading 3'
} as H3Props;
