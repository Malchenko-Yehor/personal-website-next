import CrossButton, { CrossButtonProps } from "./CrossButton";

export default {
  title: 'Atoms/CrossButton',
  component: CrossButton,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args: CrossButtonProps) => <CrossButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  animated: true
} as CrossButtonProps;
