import ContactMe, { ContactMeProps } from './ContactMe';
import { Default as HoloListDefaultStory } from '../HoloList/HoloList.stories';

export default {
  title: 'Organisms/ContactMe',
  component: ContactMe,
};

const Template = (args: ContactMeProps) => <ContactMe {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Contact Me',
  items: HoloListDefaultStory.args.items,
} as ContactMeProps;
