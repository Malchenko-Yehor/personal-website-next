import React from 'react';
import InfoCard, { InfoCardProps } from "./index";

export default {
  title: 'Molecules/InfoCard',
  component: InfoCard
};

const Template = (args: InfoCardProps) => <InfoCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  dateRange: {
    startDate: new Date('11/11/2011'),
    endDate: 'now'
  },
  title: 'test',
} as InfoCardProps;
