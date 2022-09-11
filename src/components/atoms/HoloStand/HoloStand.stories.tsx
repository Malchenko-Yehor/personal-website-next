import HoloStand, { Props } from './HoloStand';

export default {
  title: 'Atoms/HoloStand',
  component: HoloStand,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: Props) => <HoloStand {...args} />;

export const Default = Template.bind({});

Default.args = {} as Props;
