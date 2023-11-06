import { configureStore } from '@reduxjs/toolkit';
import dataFilterReducer from './dataFilter';
import popupReducer from './popup';

const store = configureStore({
  reducer: {
    dataFilter: dataFilterReducer,
    popup: popupReducer,
  },
});
export default store;
