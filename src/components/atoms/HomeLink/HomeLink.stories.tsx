import React from 'react';
import HomeLink from "./index";

export default {
  title: 'Atoms/HomeLink',
  component: HomeLink,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args) => <HomeLink {...args} />;

export const Default = Template.bind({});
