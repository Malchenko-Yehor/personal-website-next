import Clouds, { CloudsProps } from "./Clouds";

export default {
  title: 'Molecules/Clouds',
  component: Clouds
};

const Template = (args: CloudsProps) => <Clouds {...args} />;

export const Default = Template.bind({});

Default.args = {
  visible: false,
  cloudsAmount: 20,
  animationSpeed: 1.5
} as CloudsProps;
