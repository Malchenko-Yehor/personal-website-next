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
  iconUrl: '/media/images/bike.svg',
  iconAlt: 'Biking',
} as InterestProps;

export const LongText = Template.bind({});

LongText.args = {
  title: 'Lorem ipsum dolor sit amet',
  iconUrl: '/media/images/bike.svg',
  iconAlt: 'Lorem ipsum dolor sit amet',
} as InterestProps;
