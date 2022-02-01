import Portfolio, { PortfolioProps } from './Portfolio';
import { Default as PlanetsListDefaultStory } from '../PlanetsList/PlanetsList.stories';

export default {
  title: 'Organisms/Portfolio',
  component: Portfolio,
};

const Template = (args: PortfolioProps) => <Portfolio {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Portfolio',
  items: PlanetsListDefaultStory.args.items,
} as PortfolioProps;

export const LongList = Template.bind({});

LongList.args = {
  title: 'Portfolio',
  items: [...PlanetsListDefaultStory.args.items, ...PlanetsListDefaultStory.args.items],
} as PortfolioProps;
