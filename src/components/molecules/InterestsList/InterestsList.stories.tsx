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
        url: '/media/images/bike.svg',
      },
    },
    {
      id: uuid(),
      title: 'Coding',
      icon: {
        url: '/media/images/coding.svg',
      },
    },
    {
      id: uuid(),
      title: 'Kickboxing',
      icon: {
        url: '/media/images/boxing.svg',
      },
    },
    {
      id: uuid(),
      title: 'Gaming',
      icon: {
        url: '/media/images/gamepad.svg',
      },
    },
    {
      id: uuid(),
      title: 'Workout',
      icon: {
        url: '/media/images/workout.svg',
      },
    },
    {
      id: uuid(),
      title: 'Playing guitar',
      icon: {
        url: '/media/images/guitar.svg',
      },
    },
  ],
} as InterestsListProps;
