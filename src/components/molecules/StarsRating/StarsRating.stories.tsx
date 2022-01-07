import StarsRating, { StarsRatingProps } from './StarsRating';

export default {
  title: 'Molecules/StarsRating',
  component: StarsRating,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: StarsRatingProps) => <StarsRating {...args} />;

export const Default = Template.bind({});

Default.args = {
  starsAmount: 5,
  rating: 3,
} as StarsRatingProps;

export const FullRating = Template.bind({});

FullRating.args = {
  starsAmount: 5,
  rating: 5,
} as StarsRatingProps;

export const OneStarRating = Template.bind({});

OneStarRating.args = {
  starsAmount: 5,
  rating: 1,
} as StarsRatingProps;

export const MoreStars = Template.bind({});

MoreStars.args = {
  starsAmount: 7,
  rating: 3,
} as StarsRatingProps;
