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
      page: () => <StorybookDocs usedComponents={['Organisms/HexagonCard']} />,
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
      rating: 3,
      image: {
        url: '/media/images/react.svg',
        alternativeText: 'react',
      },
    },
    {
      id: uuid(),
      title: 'HTML',
      rating: 4,
      image: {
        url: '/media/images/html.svg',
        alternativeText: 'html',
      },
    },
    {
      id: uuid(),
      title: 'CSS',
      rating: 4,
      image: {
        url: '/media/images/css.svg',
        alternativeText: 'css',
      },
    },
    {
      id: uuid(),
      title: 'JavaScript',
      rating: 4,
      image: {
        url: '/media/images/javascript.svg',
        alternativeText: 'javascript',
      },
    },
    {
      id: uuid(),
      title: 'TypeScript',
      rating: 3,
      image: {
        url: '/media/images/typescript.svg',
        alternativeText: 'typescript',
      },
    },
    {
      id: uuid(),
      title: 'Webpack',
      rating: 2,
      image: {
        url: '/media/images/webpack.svg',
        alternativeText: 'webpack',
      },
    },
    {
      id: uuid(),
      title: 'Jest',
      rating: 2,
      image: {
        url: '/media/images/jest.svg',
        alternativeText: 'jest',
      },
    },
    {
      id: uuid(),
      title: 'Vue',
      rating: 1,
      image: {
        url: '/media/images/vue.svg',
        alternativeText: 'vue',
      },
    },
    {
      id: uuid(),
      title: 'Git',
      rating: 3,
      image: {
        url: '/media/images/git.svg',
        alternativeText: 'git',
      },
    },
    {
      id: uuid(),
      title: 'MJML',
      rating: 2,
      image: {
        url: '/media/images/mjml.svg',
        alternativeText: 'mjml',
      },
    },
    {
      id: uuid(),
      title: 'Adobe Xd',
      rating: 2,
      image: {
        url: '/media/images/adobe-xd.svg',
        alternativeText: 'adobe xd',
      },
    },
    {
      id: uuid(),
      title: 'React',
      rating: 3,
      image: {
        url: '/media/images/react.svg',
        alternativeText: 'react',
      },
    },
    {
      id: uuid(),
      title: 'HTML',
      rating: 4,
      image: {
        url: '/media/images/html.svg',
        alternativeText: 'html',
      },
    },
    {
      id: uuid(),
      title: 'CSS',
      rating: 4,
      image: {
        url: '/media/images/css.svg',
        alternativeText: 'css',
      },
    },
    {
      id: uuid(),
      title: 'JavaScript',
      rating: 4,
      image: {
        url: '/media/images/javascript.svg',
        alternativeText: 'javascript',
      },
    },
    {
      id: uuid(),
      title: 'TypeScript',
      rating: 2,
      image: {
        url: '/media/images/typescript.svg',
        alternativeText: 'typescript',
      },
    },
    {
      id: uuid(),
      title: 'Vue',
      rating: 1,
      image: {
        url: '/media/images/vue.svg',
        alternativeText: 'vue',
      },
    },
    {
      id: uuid(),
      title: 'Git',
      rating: 3,
      image: {
        url: '/media/images/git.svg',
        alternativeText: 'git',
      },
    },
    {
      id: uuid(),
      title: 'Adobe Xd',
      rating: 2,
      image: {
        url: '/media/images/adobe-xd.svg',
        alternativeText: 'adobe xd',
      },
    },
  ],
} as HexagonListProps;

export const ShortList = Template.bind({});

ShortList.args = {
  items: LongList.args.items.slice(0, 11),
} as HexagonListProps;

export const VeryShortList = Template.bind({});

VeryShortList.args = {
  items: LongList.args.items.slice(0, 2),
} as HexagonListProps;
