import throttle from "@helpers/throttle";
import React, { createContext, useEffect, useState } from "react";

type ContextType = {
  width: number,
  height: number
}

export const viewportContext = createContext<ContextType>({ width: 0, height: 0 });

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

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

export default ViewportProvider;