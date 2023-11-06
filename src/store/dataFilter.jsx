import { createSlice } from '@reduxjs/toolkit';
import { localData } from '../data/data';
const initialState = {
  localData,
  activePage: 1,
  filterData: [],
  inputValue: '',
};

const dataFilterSlice = createSlice({
  name: 'dataFilter',
  initialState,
  reducers: {
    filterDataHandler: (state, action) => {
      state.filterData = action.payload;
    },

    filterByNameHandler: (state, action) => {
      state.filterData = state.filterData.filter((item) =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.inputValue = action.payload;
      if (action.payload === '') {
        state.filterData = state.localData;
      }
    },

    activePageHandler: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

export const dataFilterActions = dataFilterSlice.actions;
export default dataFilterSlice.reducer;
