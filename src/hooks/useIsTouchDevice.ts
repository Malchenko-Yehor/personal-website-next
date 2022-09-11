import { isTouchDevice } from '@helpers/touch-device';
import { useState, useEffect } from 'react';

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState<boolean>();

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return isTouch;
};
