import React from 'react';
import HomeLink, { HomeLinkProps } from "./index";

export default {
  title: 'Atoms/HomeLink',
  component: HomeLink
};

const Template = (args: HomeLinkProps) => <HomeLink {...args} />;

export const Default = Template.bind({});

Default.args = {} as HomeLinkProps;
