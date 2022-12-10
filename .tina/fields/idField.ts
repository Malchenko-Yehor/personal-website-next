import { TinaField } from 'tinacms';
import { v4 as uuid } from 'uuid';

const idField: TinaField = {
  name: 'id',
  type: 'string',
  required: true,
  ui: {
    component: () => null,
    defaultItem: {
      id: uuid(),
    },
  },
};

export default idField;
