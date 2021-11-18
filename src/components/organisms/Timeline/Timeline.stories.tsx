import Timeline, { TimelineProps } from "./Timeline";
import { v4 as uuid } from 'uuid';

export default {
  title: 'Organisms/Timeline',
  component: Timeline,
  excludeStories: /.*Data$/
};

const Template = (args: TimelineProps) => <Timeline {...args} />;

export const timelineEntriesData = [
  {
    id: uuid(),
    iconUrl: '/images/emakina.svg',
    infoCard: {
      dateRange: {
        startDate: new Date('6/1/2019'),
        endDate: 'now'
      },
      title: 'Emakina',
      description: 'Frontend developer',
      url: 'https://emakina.com'
    }
  },
  {
    id: uuid(),
    iconUrl: '/images/panda-group.svg',
    infoCard: {
      dateRange: {
        startDate: new Date('3/1/2019'),
        endDate: new Date('5/1/2019')
      },
      title: 'Panda Group',
      description: 'Frontend developer',
      url: 'https://pandagroup.co'
    }
  },
  {
    id: uuid(),
    iconUrl: '/images/gwo.svg',
    infoCard: {
      dateRange: {
        startDate: new Date('7/1/2018'),
        endDate: new Date('3/1/2019')
      },
      title: 'GWO',
      description: 'JavaScript developer',
      url: 'https://gwo.pl/'
    }
  },
  {
    id: uuid(),
    iconUrl: '/images/wezom.svg',
    infoCard: {
      dateRange: {
        startDate: new Date('7/1/2017'),
        endDate: new Date('1/1/2018')
      },
      title: 'Wezom',
      description: 'Frontend developer',
      url: 'https://wezom.com/'
    }
  },
];

export const Default = Template.bind({});

Default.args = {
  entries: timelineEntriesData
} as TimelineProps;

