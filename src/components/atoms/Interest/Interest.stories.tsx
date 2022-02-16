import Interest, { InterestProps } from './Interest';

export default {
  title: 'Atoms/Interest',
  component: Interest,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: InterestProps) => <Interest {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Biking',
  icon: {
    url: '/images/bike.svg',
  },
} as InterestProps;

export const LongText = Template.bind({});

LongText.args = {
  title: 'Lorem ipsum dolor sit amet',
  icon: {
    url: '/images/bike.svg',
  },
} as InterestProps;
