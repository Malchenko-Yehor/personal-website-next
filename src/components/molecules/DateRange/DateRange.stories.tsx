import React from 'react';
import DateRange, { DateRangeProps } from "./DateRange";

export default {
  title: 'Molecules/DateRange',
  component: DateRange
};

const Template = (args: DateRangeProps) => <DateRange {...args} />;

export const Default = Template.bind({});

Default.args = {
  startDate: new Date('12/12/2012'),
  endDate: new Date('03/30/2021')
} as DateRangeProps;

export const WithNowEndDate = Template.bind({});

WithNowEndDate.args = {
  startDate: new Date('12/12/2012'),
  endDate: 'now'
} as DateRangeProps