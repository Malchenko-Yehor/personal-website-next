import React from 'react';
import DefaultLayout, { DefaultLayoutProps } from "./index";

export default {
  title: 'Layouts/Default',
  component: DefaultLayout
};

const Template = (args: DefaultLayoutProps) => <DefaultLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Some title'
} as DefaultLayoutProps;
