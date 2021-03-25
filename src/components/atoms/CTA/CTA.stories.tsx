import React from 'react';
import CTA, { CTAProps } from "./CTA";

export default {
  title: 'Atoms/CTA',
  component: CTA
};

const Template = (args: CTAProps) => <CTA {...args} />;

export const Button = Template.bind({});

Button.args = {
  label: 'CTA button',
  onClick: () => console.log('button clicked')
} as CTAProps;

export const Anchor = Template.bind({});

Anchor.args = {
  label: 'CTA anchor',
  href: '#test'
} as CTAProps;