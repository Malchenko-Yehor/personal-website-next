import React from 'react';
import LanguageSwitcher, { LanguageSwitcherProps } from "./index";

export default {
  title: 'Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: LanguageSwitcherProps) => <LanguageSwitcher {...args} />;

export const Default = Template.bind({});

Default.args = {
  languages: [
    {
      icon: {
        src: '/images/poland-flag.svg',
        alt: 'poland flag'
      },
      languagePrefix: 'pl'
    },
    {
      icon: {
        src: '/images/uk-flag.svg',
        alt: 'poland flag'
      },
      languagePrefix: 'en'
    },
    {
      icon: {
        src: '/images/ukraine-flag.svg',
        alt: 'poland flag'
      },
      languagePrefix: 'ua'
    },
    {
      icon: {
        src: '/images/russia-flag.svg',
        alt: 'poland flag'
      },
      languagePrefix: 'pl'
    },
  ]
} as LanguageSwitcherProps;
