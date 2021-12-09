import React from 'react';
import HexagonCard, { HexagonCardProps } from './HexagonCard';

export default {
  title: 'Molecules/HexagonCard',
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
