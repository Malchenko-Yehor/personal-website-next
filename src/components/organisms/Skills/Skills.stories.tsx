import { ShortList } from '@organisms/HexagonList/HexagonList.stories';
import Skills, { SkillsProps } from './Skills';

export default {
  title: 'Organisms/Skills',
  component: Skills,
};

const Template = (args: SkillsProps) => <Skills {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Skills',
  items: ShortList.args.items,
} as SkillsProps;
