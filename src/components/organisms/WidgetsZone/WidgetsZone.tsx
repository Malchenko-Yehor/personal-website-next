import AboutMe from '@organisms/AboutMe';
import { FC } from 'react';
import { PageWidgets } from '@tina/__generated__/types';

interface Props {
  widgets: PageWidgets[];
}

const PageWidgetsZone: FC<Props> = ({ widgets }) => {
  if (!widgets) return null;

  return (
    <>
      {widgets.map((widget, i) => {
        switch (widget.__typename) {
          case 'PageWidgetsAboutMe':
            return <AboutMe {...widget} key={i + widget.__typename} />;

          default:
            return null;
        }
      })}
    </>
  );
};

export default PageWidgetsZone;
