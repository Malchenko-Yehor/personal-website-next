import Menu, { MenuProps } from './Menu';

export default {
  title: 'Organisms/Menu',
  component: Menu,
};

const Template = (args: MenuProps) => <Menu {...args} />;

export const Default = Template.bind({});

Default.args = {
  alwaysOpened: true,
} as MenuProps;
