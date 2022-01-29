import Crater, { CraterProps } from './Crater';

export default {
  title: 'Atoms/Crater',
  component: Crater,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '40px', position: 'relative' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: CraterProps) => <Crater {...args} />;

export const Default = Template.bind({});

Default.args = {
  fill: '#ff5f40',
} as CraterProps;
