import React from 'react';
import Navbar, { NavbarProps } from "./index";

export default {
  title: 'Organisms/Navbar',
  component: Navbar
};

const Template = (args: NavbarProps) => <Navbar {...args} />;

export const Default = Template.bind({});

Default.args = {} as NavbarProps;
