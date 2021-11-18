import Header, { HeaderProps } from "./Header";

export default {
  title: 'Organisms/Header',
  component: Header
};

const Template = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Some title'
} as HeaderProps;

export const LongTitle = Template.bind({});

LongTitle.args = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
} as HeaderProps;

