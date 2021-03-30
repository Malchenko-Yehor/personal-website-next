import React from 'react';
import Section, { SectionProps } from "./Section";

export default {
  title: 'Atoms/Section',
  component: Section
};

const Template = (args: SectionProps) => <Section {...args} />;

export const Default = Template.bind({});

Default.args = {} as SectionProps;
