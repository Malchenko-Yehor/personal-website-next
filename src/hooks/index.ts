import { useContext } from "react";
import { viewportContext } from "../stores/viewport";


export const useViewport = () => {
  const { width, height } = useContext(viewportContext);

  return { width, height };
};