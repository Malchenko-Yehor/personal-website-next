import HexagonCard, { HexagonCardProps } from './HexagonCard';

export default {
  title: 'Organisms/HexagonCard',
  component: HexagonCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: HexagonCardProps) => <HexagonCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  image: {
    url: '/images/react.svg',
    alternativeText: 'react',
  },
  title: 'React',
} as HexagonCardProps;

export const LongTitle = Template.bind({});

LongTitle.args = {
  image: {
    url: '/images/javascript.svg',
    alternativeText: 'react',
  },
  title: 'JavaScript',
} as HexagonCardProps;
