import { DateRange as DateRangeInterface } from 'types';
import DateRange from "./DateRange";

export default {
  title: 'Molecules/DateRange',
  component: DateRange,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args: DateRangeInterface) => <DateRange {...args} />;

export const Default = Template.bind({});

Default.args = {
  startDate: new Date('12/12/2012'),
  endDate: new Date('03/30/2021')
} as DateRangeInterface;

export const WithNowEndDate = Template.bind({});

WithNowEndDate.args = {
  startDate: new Date('12/12/2012'),
  endDate: 'now'
} as DateRangeInterface