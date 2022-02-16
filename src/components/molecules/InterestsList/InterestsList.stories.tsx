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
      icon: {
        url: '/images/bike.svg',
      },
    },
    {
      id: uuid(),
      title: 'Coding',
      icon: {
        url: '/images/coding.svg',
      },
    },
    {
      id: uuid(),
      title: 'Kickboxing',
      icon: {
        url: '/images/boxing.svg',
      },
    },
    {
      id: uuid(),
      title: 'Gaming',
      icon: {
        url: '/images/gamepad.svg',
      },
    },
    {
      id: uuid(),
      title: 'Workout',
      icon: {
        url: '/images/workout.svg',
      },
    },
    {
      id: uuid(),
      title: 'Playing guitar',
      icon: {
        url: '/images/guitar.svg',
      },
    },
  ],
} as InterestsListProps;
