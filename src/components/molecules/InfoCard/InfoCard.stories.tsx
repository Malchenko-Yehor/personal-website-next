import React from 'react';
import InfoCard, { InfoCardProps } from "./InfoCard";

export default {
  title: 'Atoms/InfoCard',
  component: InfoCard
};

const Template = (args: InfoCardProps) => <InfoCard {...args} />;

export const Default = Template.bind({});

Default.args = {} as InfoCardProps;
