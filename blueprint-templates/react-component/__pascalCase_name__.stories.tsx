import {{ pascalCase name }}, { {{ pascalCase name }}Props } from "{{ pascalCase name }}";

export default {
  title: 'Atoms/{{ pascalCase name }}',
  component: {{ pascalCase name }},
  parameters: {
    layout: 'centered',
  },
};

const Template = (args: {{ pascalCase name }}Props) => <{{ pascalCase name }} {...args} />;

export const Default = Template.bind({});

Default.args = {} as {{ pascalCase name }}Props;
