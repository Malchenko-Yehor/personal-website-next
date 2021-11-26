import { getMappedCareer } from '@api/mappings';
import { Widget, WidgetType } from '@api/types';
import Section from '@atoms/Section';
import Career from '@organisms/Career';
import { FC, Fragment } from 'react';

export interface WidgetsZoneProps {
  widgets: Widget[];
}

const WidgetsZone: FC<WidgetsZoneProps> = ({ widgets }) => {
  if (!widgets.length) return null;

  return (
    <Fragment>
      {widgets.map((widget) => (
        <WidgetItem key={widget.id} {...widget} />
      ))}
    </Fragment>
  );
};

export interface WidgetProps {
  __typename: WidgetType;
  [x: string]: unknown;
}

const WidgetItem: FC<Widget> = (props) => {
  const widget = getWidget(props);

  if (widget) return <Section>{widget}</Section>;

  return;
};

const getWidget = (widgetData: Widget) => {
  switch (widgetData.__typename) {
    case WidgetType.Career:
      return <Career {...getMappedCareer(widgetData)} />;

    default:
      return null;
  }
};

export default WidgetsZone;
