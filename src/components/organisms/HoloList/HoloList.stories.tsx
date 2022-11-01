import HoloList, { HoloListProps } from './HoloList';
import { v4 as uuid } from 'uuid';
import Section from '@atoms/Section';
import Container from '@styles/Container';

export default {
  title: 'Organisms/HoloList',
  component: HoloList,
};

const items = [
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#0ff',
    icon: {
      url: '/media/images/github.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#fff',
    icon: {
      url: '/media/images/linkedin.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#ff0',
    icon: {
      url: '/media/images/mail.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
  {
    id: uuid(),
    url: 'https://github.com/Malchenko-Yehor',
    color: '#f0f',
    icon: {
      url: '/media/images/telegram.svg',
    },
  },
];

const Template = (args: HoloListProps) => (
  <Section>
    <Container>
      <HoloList {...args} />
    </Container>
  </Section>
);

export const Default = Template.bind({});

Default.args = {
  items: items.slice(0, 4),
} as HoloListProps;

export const Short = Template.bind({});

Short.args = {
  items: items.slice(0, 2),
} as HoloListProps;

export const Long = Template.bind({});

Long.args = {
  items,
} as HoloListProps;
