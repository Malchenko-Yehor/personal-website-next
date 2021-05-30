import { useContext } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { MainDispatch, MainState } from "stores/main-store";
import { viewportContext } from "../stores/viewport";


export const useViewport = () => {
  const { width, height } = useContext(viewportContext);

  return { width, height };
};

export const useMainDispatch = () => useDispatch<MainDispatch>();

export const useMainSelector: TypedUseSelectorHook<MainState> = useSelector;