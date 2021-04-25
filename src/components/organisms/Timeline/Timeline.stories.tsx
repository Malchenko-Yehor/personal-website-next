import React from 'react';
import Timeline, { TimelineProps } from "./index";
import { v4 as uuid } from 'uuid';

const generateEntries = () => {
  const emptyArray = [...Array(5)];

  return emptyArray.map(generateEntry);
};

const generateEntry = () => {
  return {
    id: uuid(),
    iconUrl: '/images/emakina.svg',
    infoCard: {
      dateRange: {
        startDate: new Date('11/11/2011'),
        endDate: 'now'
      },
      title: 'Emakina',
      description: 'Frontend developer',
      url: 'https://emakina.com'
    }
  };
};

export default {
  title: 'Organisms/Timeline',
  component: Timeline
};

const Template = (args: TimelineProps) => <Timeline {...args} />;

export const Default = Template.bind({});

Default.args = {
  entries: generateEntries()
} as TimelineProps;