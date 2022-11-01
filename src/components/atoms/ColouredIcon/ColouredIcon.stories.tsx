import ColouredIcon, { ColouredIconProps } from './ColouredIcon';

export default {
  title: 'Atoms/ColouredIcon',
  component: ColouredIcon,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: ColouredIconProps) => <ColouredIcon {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: '#0ff',
  icon: {
    url: '/media/images/emakina.svg',
  },
} as ColouredIconProps;
