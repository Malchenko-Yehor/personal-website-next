import React from 'react';
import H2, { H2Props } from "./index";

export default {
  title: 'Atoms/H2',
  component: H2
};

const Template = (args: H2Props) => <H2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Heading 2'
} as H2Props;
