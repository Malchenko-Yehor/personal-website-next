import { TinaCloudCollection } from 'tinacms';

const pageCollection: TinaCloudCollection = {
  name: 'page',
  label: 'Pages',
  path: 'content/pages',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body',
      isBody: true,
    },
    {
      label: 'Categories',
      name: 'categories',
      type: 'string',
      list: false,
      options: [
        {
          value: 'movies',
          label: 'Movies',
        },
        {
          value: 'music',
          label: 'Music',
        },
      ],
    },
    {
      label: 'Testimonial',
      name: 'testimonial',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Author',
          name: 'author',
          type: 'string',
        },
        {
          label: 'Role',
          name: 'role',
          type: 'string',
        },
        {
          label: 'Quote',
          name: 'quote',
          type: 'string',
          ui: {
            component: 'textarea',
          },
        },
      ],
    },
  ],
  ui: {
    // This is an DEMO router. You can remove this to fit your site
    router: ({ document }) => {
      switch (document._sys.filename) {
        case 'Homepage':
          return '/';

        default:
          return;
      }
    },
  },
};

export default pageCollection;
