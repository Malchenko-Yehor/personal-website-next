import React from 'react';
import LanguageFlag, { LanguageFlagProps } from "./index";

export default {
  title: 'Atoms/LanguageFlag',
  component: LanguageFlag
};

const Template = (args: LanguageFlagProps) => <LanguageFlag {...args} />;

export const Default = Template.bind({});

Default.args = {} as LanguageFlagProps;
