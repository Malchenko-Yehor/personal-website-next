import MobileMenu, { MobileMenuProps } from "./MobileMenu";

export default {
  title: 'Organisms/MobileMenu',
  component: MobileMenu
};

const Template = (args: MobileMenuProps) => <MobileMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  alwaysOpened: true
} as MobileMenuProps;