import DefaultLayout from '@layouts/Default/Default';
import React from 'react';
import { Default as AboutMeStory } from '@organisms/AboutMe/AboutMe.stories';
import { Default as CareerStory } from '@organisms/Career/Career.stories';
import { Default as PortfolioStory } from '@organisms/Portfolio/Portfolio.stories';
import { Default as SkillsStory } from '@organisms/Skills/Skills.stories';
import { Default as ContactMeStory } from '@organisms/ContactMe/ContactMe.stories';

export default {
  title: 'Pages/Index',
};

const Template = (args) => (
  <DefaultLayout {...args}>
    <AboutMeStory {...AboutMeStory.args} />
    <CareerStory {...CareerStory.args} />
    <SkillsStory {...SkillsStory.args} />
    <PortfolioStory {...PortfolioStory.args} />
    <ContactMeStory {...ContactMeStory.args} />
  </DefaultLayout>
);

export const Default = Template.bind({});
