import NavLink, { NavLinkProps } from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: NavLinkProps) => <NavLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  href: '#test',
  children: 'Some Text',
  onClick: () => alert('onClick'),
} as NavLinkProps;
