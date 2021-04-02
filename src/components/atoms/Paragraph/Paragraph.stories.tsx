import React from 'react';
import Paragraph, { ParagraphProps } from "./index";

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph
};

const Template = (args: ParagraphProps) => <Paragraph {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Paragraph'
} as ParagraphProps;

export const LoremIpsum = Template.bind({});

LoremIpsum.args = {
  text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque consequuntur magnam molestiae quidem obcaecati, dolorum dignissimos laboriosam, ad autem, distinctio maxime tempora! Soluta cupiditate nemo ea, repellendus voluptatem accusamus impedit.'
} as ParagraphProps;
