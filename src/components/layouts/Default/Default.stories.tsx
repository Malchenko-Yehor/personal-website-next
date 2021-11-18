import DefaultLayout, { DefaultLayoutProps } from "./Default";

export default {
  title: 'Layouts/Default',
  component: DefaultLayout
};

const Template = (args: DefaultLayoutProps) => <DefaultLayout {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Some title'
} as DefaultLayoutProps;
