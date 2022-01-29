import { cWhite } from '@styles/variables';
import RotatingTitle, { RotatingTitleProps } from './RotatingTitle';

export default {
  title: 'Atoms/RotatingTitle',
  component: RotatingTitle,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: RotatingTitleProps) => <RotatingTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
  color: cWhite,
  text: 'Rotating Title',
  alwaysVisible: true,
} as RotatingTitleProps;
