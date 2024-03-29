import Container from '@styles/Container';
import InfoCard, { InfoCardProps } from "./InfoCard";

export default {
  title: 'Molecules/InfoCard',
  component: InfoCard
};

const Template = (args: InfoCardProps) => (
  <Container><InfoCard {...args} /></Container>
);

export const Default = Template.bind({});

Default.args = {
  dateRange: {
    startDate: new Date('11/11/2011'),
    endDate: 'now'
  },
  title: 'Emakina',
  description: 'Frontend developer'
} as InfoCardProps;

export const WithLink = Template.bind({});

WithLink.args = {
  dateRange: {
    startDate: new Date('11/11/2011'),
    endDate: 'now'
  },
  title: 'Emakina',
  description: 'Frontend developer',
  url: 'https://emakina.com'
} as InfoCardProps;

export const WithoutDescription = Template.bind({});

WithoutDescription.args = {
  dateRange: {
    startDate: new Date('11/11/2011'),
    endDate: 'now'
  },
  title: 'Emakina',
} as InfoCardProps;

export const ArrowOnRightSide = Template.bind({});

ArrowOnRightSide.args = {
  dateRange: {
    startDate: new Date('11/11/2011'),
    endDate: 'now'
  },
  title: 'Emakina',
  arrowOnRightSide: true
} as InfoCardProps;
