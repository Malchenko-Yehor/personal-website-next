import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const mobileNavigationSlice = createSlice({
  name: 'mobileNavigation',
  initialState: {
    opened: false,
  },
  reducers: {
    setMobileNavigationOpened: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    },
  },
});

export const { setMobileNavigationOpened } = mobileNavigationSlice.actions;

export default mobileNavigationSlice.reducer;
