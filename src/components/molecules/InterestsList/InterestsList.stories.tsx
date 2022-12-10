import InterestsList, { InterestsListProps } from './InterestsList';
import { v4 as uuid } from 'uuid';

export default {
  title: 'Molecules/InterestsList',
  component: InterestsList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: InterestsListProps) => <InterestsList {...args} />;

export const Default = Template.bind({});

Default.args = {
  items: [
    {
      id: uuid(),
      title: 'Biking',
      iconUrl: '/media/images/bike.svg',
      iconAlt: 'Biking',
    },
    {
      id: uuid(),
      title: 'Coding',
      iconUrl: '/media/images/coding.svg',
      iconAlt: 'Coding',
    },
    {
      id: uuid(),
      title: 'Kickboxing',
      iconUrl: '/media/images/boxing.svg',
      iconAlt: 'Kickboxing',
    },
    {
      id: uuid(),
      title: 'Gaming',
      iconUrl: '/media/images/gamepad.svg',
      iconAlt: 'Gaming',
    },
    {
      id: uuid(),
      title: 'Workout',
      iconUrl: '/media/images/workout.svg',
      iconAlt: 'Workout',
    },
    {
      id: uuid(),
      title: 'Playing guitar',
      iconUrl: '/media/images/guitar.svg',
      iconAlt: 'Playing guitar',
    },
  ],
} as InterestsListProps;
