import StorybookDocs from '../../../../.storybook/components/StorybookDocs';
import Planet, { PlanetProps } from './Planet';

export default {
  title: 'Organisms/Planet',
  component: Planet,
  parameters: {
    layout: 'centered',
    docs: {
      page: () => (
        <StorybookDocs usedComponents={['Atoms/RotatingTitle', 'Atoms/AsteroidBelt', 'Atoms/Crater']} />
      ),
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: PlanetProps) => <Planet {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: {
    url: '/media/images/deutsche-bank.svg',
    width: 141,
    height: 141.6,
  },
  color: '#ff5f40',
  title: 'Deutsche Bank',
  url: 'https://www.deutschebank.be/',
} as PlanetProps;

export const WithAsteroids = Template.bind({});

WithAsteroids.args = {
  icon: {
    url: '/media/images/deutsche-bank.svg',
    width: 141,
    height: 141.6,
  },
  color: '#ff5f40',
  title: 'Deutsche Bank',
  url: 'https://www.deutschebank.be/',
  feature: 'asteroids',
} as PlanetProps;

export const WithRings = Template.bind({});

WithRings.args = {
  icon: {
    url: '/media/images/deutsche-bank.svg',
    width: 141,
    height: 141.6,
  },
  color: '#ff5f40',
  title: 'Deutsche Bank',
  url: 'https://www.deutschebank.be/',
  feature: 'rings',
} as PlanetProps;
