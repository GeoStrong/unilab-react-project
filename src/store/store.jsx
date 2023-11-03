import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addDataHandler: (state, action) => {
      const { profile, name } = action.payload;
      state.data = { profile, name };
    },
  },
});

const store = configureStore({
  reducer: {
    account: accountSlice.reducer,
  },
});
export const accountActions = accountSlice.actions;
export default store;
