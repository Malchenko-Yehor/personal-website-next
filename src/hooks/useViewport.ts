import { viewportContext } from '@stores/viewport';
import { useContext } from 'react';

export const useViewport = () => {
  const { width, height } = useContext(viewportContext);

  return { width, height };
};
