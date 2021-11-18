import BurgerButton, { BurgerButtonProps } from "./BurgerButton";

export default {
  title: 'Atoms/BurgerButton',
  component: BurgerButton,
  parameters: {
    layout: 'centered',
  }
};

const Template = (args: BurgerButtonProps) => <BurgerButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  onClick: () => window.alert('Burger button clicked')
} as BurgerButtonProps;
