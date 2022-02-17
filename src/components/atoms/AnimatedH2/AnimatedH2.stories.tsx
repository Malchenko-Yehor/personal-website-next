import AnimatedH2, { AnimatedH2Props } from './AnimatedH2';

export default {
  title: 'Atoms/AnimatedH2',
  component: AnimatedH2,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: AnimatedH2Props) => <AnimatedH2 {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Lorem ipsum dolor sit amet',
} as AnimatedH2Props;
