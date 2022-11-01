import LanguageFlag, { LanguageFlagProps } from './LanguageFlag';

export default {
  title: 'Atoms/LanguageFlag',
  component: LanguageFlag,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args: LanguageFlagProps) => <LanguageFlag {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: {
    src: '/media/images/flags/pl.svg',
    alt: 'poland flag',
  },
  locale: 'pl',
} as LanguageFlagProps;
