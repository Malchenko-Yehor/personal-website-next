import ScaledText, { ScaledTextProps } from './ScaledText';

export default {
  title: 'Atoms/ScaledText',
  component: ScaledText,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px', display: 'flex', justifyContent: 'center', fontSize: '30px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: ScaledTextProps) => <ScaledText {...args} />;

export const VeryShortText = Template.bind({});

VeryShortText.args = {
  children: 'Lorem',
  applySize: true,
} as ScaledTextProps;

export const ShortText = Template.bind({});

ShortText.args = {
  children: 'Lorem ipsum dolor',
  applySize: true,
} as ScaledTextProps;

export const MediumText = Template.bind({});

MediumText.args = {
  children: 'Lorem ipsum dolor sit amet',
  applySize: true,
} as ScaledTextProps;

export const LongText = Template.bind({});

LongText.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  applySize: true,
} as ScaledTextProps;
