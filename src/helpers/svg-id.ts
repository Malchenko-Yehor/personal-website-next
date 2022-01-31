import { v4 as uuid } from 'uuid';

export const generateSvgFirendlyId = () => {
  return 'a' + uuid().replaceAll('-', '');
};
