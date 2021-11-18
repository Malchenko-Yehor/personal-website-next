import { timelineEntriesData } from '@organisms/Timeline/Timeline.stories';
import Career, { CareerProps } from "./Career";

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
