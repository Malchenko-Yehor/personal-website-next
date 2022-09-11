import { useEffect } from 'react';

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
