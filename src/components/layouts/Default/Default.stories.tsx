import React from 'react';
import DefaultLayout, { DefaultProps } from "./index";

export default {
  title: 'Layouts/Default',
  component: DefaultLayout
};

const Template = (args: DefaultProps) => <DefaultLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Some title'
} as DefaultProps;
