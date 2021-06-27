import React from 'react';
import LanguageSwitcher, { LanguageSwitcherProps } from "./index";

export default {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcher
};

const Template = (args: LanguageSwitcherProps) => <LanguageSwitcher {...args} />;

export const Default = Template.bind({});

Default.args = {} as LanguageSwitcherProps;
