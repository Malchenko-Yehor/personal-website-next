import { TinaTemplate } from 'tinacms';
import { v4 as uuid } from 'uuid';
import interestsField from '../fields/interestsField';

const aboutMeWidget: TinaTemplate = {
  name: 'aboutMe',
  label: 'About Me',
  ui: {
    previewSrc: '/media/images/widget-previews/about-me-widget-preview.png',
    defaultItem: () => ({
      title: 'About me title',
      intro: 'Intro text',
      interests: [
        {
          id: uuid(),
          title: 'Interest',
        },
      ],
    }),
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true,
    },
    {
      name: 'intro',
      label: 'Intro',
      type: 'string',
      required: true,
      ui: {
        component: 'textarea',
      },
    },
    interestsField,
  ],
};

export default aboutMeWidget;
