import AsteroidBelt, { AsteroidBeltProps } from './AsteroidBelt';

export default {
  title: 'Atoms/AsteroidBelt',
  component: AsteroidBelt,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: AsteroidBeltProps) => <AsteroidBelt {...args} />;

export const Default = Template.bind({});

Default.args = {} as AsteroidBeltProps;

export const Rotated = Template.bind({});

Rotated.args = {
  tilt: 45,
} as AsteroidBeltProps;
