import MobileMenu from '@organisms/MobileMenu';
import React, { Fragment } from 'react';
import Navbar, { NavbarProps } from "./index";

export default {
  title: 'Organisms/Navbar',
  component: Navbar
};

const Template = (args: NavbarProps) => (
  <Fragment>
    <MobileMenu />
    <Navbar {...args} />
  </Fragment>
);

export const Default = Template.bind({});

Default.args = {} as NavbarProps;
