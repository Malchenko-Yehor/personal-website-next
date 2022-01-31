import Section from '@atoms/Section';
import Container from '@styles/Container';
import PlanetsList, { PlanetsListProps } from './PlanetsList';
import { v4 as uuid } from 'uuid';

export default {
  title: 'Organisms/PlanetsList',
  component: PlanetsList,
  decorators: [
    (Story) => (
      <Section>
        <Container>
          <Story />
        </Container>
      </Section>
    ),
  ],
};

const Template = (args: PlanetsListProps) => <PlanetsList {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      id: uuid(),
      icon: {
        url: '/images/visit-qatar.svg',
        width: 141,
        height: 141.6,
      },
      color: '#ff5f40',
      title: 'Visit Qatar Mobile',
      url: 'https://www.deutschebank.be/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/visit-qatar.svg',
        width: 141,
        height: 141.6,
      },
      color: '#bcafb2',
      title: 'Visit Qatar',
      url: 'https://www.deutschebank.be/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/facq.svg',
        width: 141,
        height: 141.6,
      },
      color: '#00655d',
      title: 'FACQ',
      url: 'https://www.deutschebank.be/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/emakina-white.svg',
        width: 141,
        height: 141.6,
      },
      color: '#f8e2b0',
      title: 'Emakina Agency',
      url: 'https://emakina.com/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/deutsche-bank.svg',
        width: 141,
        height: 141.6,
      },
      color: '#b7af9f',
      title: 'Deutsche Bank',
      url: 'https://www.deutschebank.be/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/tink.svg',
        width: 141,
        height: 141.6,
      },
      color: '#4FD0E7 ',
      title: 'Tink',
      url: 'https://www.deutschebank.be/',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/gwo-white.svg',
        width: 141,
        height: 141.6,
      },
      color: '#97979F',
      title: 'Matlandia 5',
      url: 'https://matlandia5.apps.gwo.pl/0/sections',
    },
    {
      id: uuid(),
      icon: {
        url: '/images/gwo-white.svg',
        width: 141,
        height: 141.6,
      },
      color: '#4b70dd ',
      title: 'Matlandia 7',
      url: 'https://matlandia7.apps.gwo.pl/0/sections',
    },
  ],
} as PlanetsListProps;
