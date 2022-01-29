import { isTouchDevice } from '@helpers/touch-device';
import { RefObject, useContext, useEffect, useState } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { MainDispatch, MainState } from 'stores/main-store';
import { viewportContext } from '../stores/viewport';

export const useViewport = () => {
  const { width, height } = useContext(viewportContext);

  return { width, height };
};

export const useMainDispatch = () => useDispatch<MainDispatch>();

export const useMainSelector: TypedUseSelectorHook<MainState> = useSelector;

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Function) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

export const useOnMediaQueryChange = (minDeviceWidths: number[], callback: VoidFunction) => {
  useEffect(() => {
    const mediaQueryLists = minDeviceWidths.map((width) => {
      return matchMedia(`(min-width: ${width}px)`);
    });

    mediaQueryLists.forEach((mediaQuery) => {
      mediaQuery.addEventListener('change', callback);
    });

    return () => {
      mediaQueryLists.forEach((mediaQuery) => {
        mediaQuery.removeEventListener('change', callback);
      });
    };
  }, []);
};

export const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState<boolean>();

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);

  return isTouch;
};
