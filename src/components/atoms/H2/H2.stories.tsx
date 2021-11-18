import H2, { H2Props } from "./H2";

export default {
  title: 'Atoms/H2',
  component: H2
};

const Template = (args: H2Props) => <H2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Heading 2'
} as H2Props;
