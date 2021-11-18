import SpaceShuttle, { SpaceShuttleProps } from "./SpaceShuttle";

export default {
  title: 'Atoms/SpaceShuttle',
  component: SpaceShuttle
};

const Template = (args: SpaceShuttleProps) => <SpaceShuttle {...args} />;

export const Default = Template.bind({});

Default.args = {
  speed: 1.5,
  visible: false
} as SpaceShuttleProps;
