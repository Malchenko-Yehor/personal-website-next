import React from 'react';
import Skills, { SkillsProps } from "./index";

export default {
  title: 'Atoms/Skills',
  component: Skills
};

const Template = (args: SkillsProps) => <Skills {...args} />;

export const Default = Template.bind({});

Default.args = {} as SkillsProps;
