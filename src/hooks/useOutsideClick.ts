import { RefObject, useEffect } from 'react';

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
