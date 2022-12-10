import { TinaCloudCollection } from 'tinacms';
import aboutMeWidget from '../widgets/aboutMeWidget';

const pageCollection: TinaCloudCollection = {
  name: 'page',
  label: 'Pages',
  path: 'content/pages',
  fields: [
    {
      type: 'object',
      list: true,
      name: 'widgets',
      label: 'Widgets',
      templates: [aboutMeWidget],
      ui: {
        visualSelector: true,
      },
    },
  ],
  ui: {
    router: ({ document }) => {
      const locale = document._sys.breadcrumbs[0];

      switch (document._sys.filename) {
        case 'Homepage':
          return `/${locale}`;

        default:
          return;
      }
    },
  },
};

export default pageCollection;
