import NavLinksList, { NavLinksListProps } from "./NavLinksList";

export default {
  title: 'Atoms/NavLinksList',
  component: NavLinksList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: NavLinksListProps) => <NavLinksList {...args} />;

export const Default = Template.bind({});

Default.args = {} as NavLinksListProps;
