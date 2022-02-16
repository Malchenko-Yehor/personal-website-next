import AboutMe, { AboutMeProps } from './AboutMe';
import { Default as InterestsListDefaultStory } from '@molecules/InterestsList/InterestsList.stories';

export default {
  title: 'Organisms/AboutMe',
  component: AboutMe,
};

const Template = (args: AboutMeProps) => <AboutMe {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Hello!',
  intro:
    "I'm a Frontend Developer based in Poznań, Poland. I have a passion for web and mobile development and love to create websites and apps using modern technologies. But apart from my job I have some other interests:",
  interests: InterestsListDefaultStory.args.items,
} as AboutMeProps;
