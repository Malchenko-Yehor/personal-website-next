import { TinaField } from 'tinacms';
import idField from './idField';
import { v4 as uuid } from 'uuid';

const interestsField: TinaField = {
  name: 'interests',
  label: 'Interests',
  type: 'object',
  list: true,
  ui: {
    defaultItem: () => ({
      id: uuid(),
      title: 'Interest',
    }),
    itemProps: (item) => {
      return { label: item?.title };
    },
  },
  fields: [
    idField,
    {
      name: 'title',
      type: 'string',
      label: 'Title',
      required: true,
    },
    {
      name: 'iconUrl',
      type: 'image',
      label: 'Icon',
    },
    {
      name: 'iconAlt',
      type: 'string',
      label: 'Icon alternative text',
    },
  ],
};

export default interestsField;
