import throttle from "@helpers/throttle";
import React, { createContext, useEffect, useState } from "react";

type ContextType = {
  width: number,
  height: number
}

export const viewportContext = createContext<ContextType>({ width: 0, height: 0 });

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(getViewportWidth());
  const [height, setHeight] = useState(getViewportHeight());


  const handleWindowResize = throttle(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 150);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const getViewportWidth = () => {
  if (process.browser) return window.innerWidth;

  return 0;
};

const getViewportHeight = () => {
  if (process.browser) return window.innerHeight;

  return 0;
};

export default ViewportProvider;