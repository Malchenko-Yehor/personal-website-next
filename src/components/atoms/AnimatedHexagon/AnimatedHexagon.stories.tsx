import React from 'react';
import AnimatedHexagon from './AnimatedHexagon';

export default {
  title: 'Atoms/AnimatedHexagon',
  component: AnimatedHexagon,
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

const Template = (args) => <AnimatedHexagon {...args} />;

export const Default = Template.bind({});
