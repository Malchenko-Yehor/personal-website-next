import { configureStore } from '@reduxjs/toolkit'
import mobileNavigationReducer from './slices/mobile-navigation';

const mainStore = configureStore({
  reducer: {
    mobileNavigation: mobileNavigationReducer
  }
});

export type MainState = ReturnType<typeof mainStore.getState>
export type MainDispatch = typeof mainStore.dispatch

export default mainStore;