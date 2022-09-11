import HoloLink, { HoloLinkProps } from './HoloLink';

export default {
  title: 'Molecules/HoloLink',
  component: HoloLink,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: HoloLinkProps) => <HoloLink {...args} />;

export const Default = Template.bind({});

Default.args = {
  url: 'https://github.com/Malchenko-Yehor',
  color: '#0ff',
  icon: {
    url: '/images/github.svg',
  },
} as HoloLinkProps;

export const AlternativeColor = Template.bind({});

AlternativeColor.args = {
  url: 'https://github.com/Malchenko-Yehor',
  color: '#ff0',
  icon: {
    url: '/images/github.svg',
  },
} as HoloLinkProps;
