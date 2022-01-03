import HexagonList, { HexagonListProps } from './HexagonList';
import { v4 as uuid } from 'uuid';
import { Container } from 'styled-bootstrap-grid';
import StorybookDocs from '../../../../.storybook/components/StorybookDocs';

export default {
  title: 'Organisms/HexagonList',
  subtitle: 'test',
  description: 'test',
  component: HexagonList,
  parameters: {
    docs: {
      page: () => <StorybookDocs usedComponents={['Molecules/HexagonCard']} />,
    },
  },
};

const Template = (args: HexagonListProps) => (
  <Container>
    <HexagonList {...args} />
  </Container>
);

export const LongList = Template.bind({});

LongList.args = {
  items: [
    {
      id: uuid(),
      title: 'React',
      image: {
        url: '/images/react.svg',
        alternativeText: 'react',
      },
    },
    {
      id: uuid(),
      title: 'HTML',
      image: {
        url: '/images/html.svg',
        alternativeText: 'html',
      },
    },
    {
      id: uuid(),
      title: 'CSS',
      image: {
        url: '/images/css.svg',
        alternativeText: 'css',
      },
    },
    {
      id: uuid(),
      title: 'JavaScript',
      image: {
        url: '/images/javascript.svg',
        alternativeText: 'javascript',
      },
    },
    {
      id: uuid(),
      title: 'TypeScript',
      image: {
        url: '/images/typescript.svg',
        alternativeText: 'typescript',
      },
    },
    {
      id: uuid(),
      title: 'Vue',
      image: {
        url: '/images/vue.svg',
        alternativeText: 'vue',
      },
    },
    {
      id: uuid(),
      title: 'Git',
      image: {
        url: '/images/git.svg',
        alternativeText: 'git',
      },
    },
    {
      id: uuid(),
      title: 'Adobe Xd',
      image: {
        url: '/images/adobe-xd.svg',
        alternativeText: 'adobe xd',
      },
    },
    {
      id: uuid(),
      title: 'React',
      image: {
        url: '/images/react.svg',
        alternativeText: 'react',
      },
    },
    {
      id: uuid(),
      title: 'HTML',
      image: {
        url: '/images/html.svg',
        alternativeText: 'html',
      },
    },
    {
      id: uuid(),
      title: 'CSS',
      image: {
        url: '/images/css.svg',
        alternativeText: 'css',
      },
    },
    {
      id: uuid(),
      title: 'JavaScript',
      image: {
        url: '/images/javascript.svg',
        alternativeText: 'javascript',
      },
    },
    {
      id: uuid(),
      title: 'TypeScript',
      image: {
        url: '/images/typescript.svg',
        alternativeText: 'typescript',
      },
    },
    {
      id: uuid(),
      title: 'Vue',
      image: {
        url: '/images/vue.svg',
        alternativeText: 'vue',
      },
    },
    {
      id: uuid(),
      title: 'Git',
      image: {
        url: '/images/git.svg',
        alternativeText: 'git',
      },
    },
    {
      id: uuid(),
      title: 'Adobe Xd',
      image: {
        url: '/images/adobe-xd.svg',
        alternativeText: 'adobe xd',
      },
    },
  ],
} as HexagonListProps;

export const ShortList = Template.bind({});

ShortList.args = {
  items: LongList.args.items.slice(0, 8),
} as HexagonListProps;

export const VeryShortList = Template.bind({});

VeryShortList.args = {
  items: LongList.args.items.slice(0, 2),
} as HexagonListProps;
