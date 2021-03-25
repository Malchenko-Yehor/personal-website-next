import React from 'react';
import Header, { HeaderProps } from "./Header";

export default {
  title: 'Organisms/Header',
  component: Header
};

const Template = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Header title',
  intro: 'Some beautiful description for our header lorem ipsum dolor sit amet',
  image: {
    src: '/images/programmer-and-dog.svg',
    width: 265,
    height: 162,
  }
} as HeaderProps;

export const WithoutImage = Template.bind({});

WithoutImage.args = {
  title: 'Header title',
  intro: 'Some beautiful description for our header lorem ipsum dolor sit amet'
} as HeaderProps;

export const WithoutIntro = Template.bind({});

WithoutIntro.args = {
  title: 'Header title',
  image: {
    src: '/images/programmer-and-dog.svg',
    width: 265,
    height: 162,
  }
} as HeaderProps;

export const OnlyTitle = Template.bind({});

OnlyTitle.args = {
  title: 'Header title',
} as HeaderProps;

