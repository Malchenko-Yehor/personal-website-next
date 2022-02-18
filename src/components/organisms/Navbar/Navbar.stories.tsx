import { Default as LanguageSwithcerDefaultStory } from '@molecules/LanguageSwitcher/LanguageSwitcher.stories';
import { Fragment } from 'react';
import Navbar, { NavbarProps } from './Navbar';

export default {
  title: 'Organisms/Navbar',
  component: Navbar,
};

const Template = (args: NavbarProps) => (
  <Fragment>
    <Navbar {...args} />
  </Fragment>
);

export const Default = Template.bind({});

Default.story = {
  parameters: {
    nextRouter: {
      locale: 'en',
    },
  },
};

Default.args = {
  languages: LanguageSwithcerDefaultStory.args.languages,
} as NavbarProps;
