import React from 'react';
import LanguageFlag, { LanguageFlagProps } from "./index";
import { RouterContext } from "next/dist/next-server/lib/router-context";

export default {
  title: 'Atoms/LanguageFlag',
  component: LanguageFlag
};

const Template = (args: LanguageFlagProps) => <LanguageFlag {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: {
    src: '/images/poland-flag.svg',
    alt: 'poland flag'
  },
  locale: 'pl'
} as LanguageFlagProps;
