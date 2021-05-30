import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const posSlice = createSlice({
  name: 'mobileNavigation',
  initialState: {
    opened: false
  },
  reducers: {
    setMobileNavigationOpened: (state, action: PayloadAction<boolean>) => {
      state.opened = action.payload;
    }
  }
})

export const { setMobileNavigationOpened } = posSlice.actions

export default posSlice.reducer