import React from 'react';
import {{ pascalCase name }}, { {{ pascalCase name }}Props } from "./{{ pascalCase name }}";

export default {
  title: 'Atoms/{{ pascalCase name }}',
  component: {{ pascalCase name }}
};

const Template = (args: {{ pascalCase name }}Props) => <{{ pascalCase name }} {...args} />;

export const Default = Template.bind({});

Default.args = {} as {{ pascalCase name }}Props;
