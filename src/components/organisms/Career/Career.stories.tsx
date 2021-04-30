import { timelineEntriesData } from '@organisms/Timeline/Timeline.stories';
import React from 'react';
import Career, { CareerProps } from "./index";

export default {
  title: 'Organisms/Career',
  component: Career
};

const Template = (args: CareerProps) => <Career {...args} />;

export const Default = Template.bind({});

Default.args = {
  entries: timelineEntriesData,
  title: 'Career'
} as CareerProps;
