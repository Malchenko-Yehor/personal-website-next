import React from 'react';
import LanguageSwitcher from "./index";

export default {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered'
  },
};

const Template = (args) => <LanguageSwitcher {...args} />;

export const Default = Template.bind({});