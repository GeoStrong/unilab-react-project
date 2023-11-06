import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterPopup: false,
  profilePopup: false,
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    filterPopupHandler: (state, action) => {
      state.filterPopup = action.payload;
    },
    profilePopupHandler: (state, action) => {
      state.profilePopup = action.payload;
    },
  },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
