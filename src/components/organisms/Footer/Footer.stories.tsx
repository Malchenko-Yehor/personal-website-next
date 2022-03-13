import Footer, { FooterProps } from './Footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ flexShrink: 0 }}>
          <Story />
        </div>
      </div>
    ),
  ],
};

const Template = (args: FooterProps) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {} as FooterProps;
