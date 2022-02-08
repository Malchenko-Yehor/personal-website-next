import PlanetRings, { PlanetRingsProps } from './PlanetRings';

export default {
  title: 'Atoms/PlanetRings',
  component: PlanetRings,
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

const Template = (args: PlanetRingsProps) => <PlanetRings {...args} />;

export const Default = Template.bind({});

Default.args = {} as PlanetRingsProps;

export const Tilted = Template.bind({});

Tilted.args = {
  tilt: 25,
} as PlanetRingsProps;

export const Coloured = Template.bind({});

Coloured.args = {
  color: '#e9be10',
} as PlanetRingsProps;
