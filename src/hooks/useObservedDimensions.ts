import { MutableRefObject, useState, useRef, useEffect } from 'react';

export const useObservedDimensions = (ref: MutableRefObject<HTMLElement>) => {
  const [dimensions, setdDimensions] = useState({ width: 0, height: 0 });
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;

        setdDimensions({ width, height });
      });
    });

    if (ref.current) resizeObserverRef.current.observe(ref.current);

    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);

  return dimensions;
};
