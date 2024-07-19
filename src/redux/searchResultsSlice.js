import { createSlice } from '@reduxjs/toolkit';

const searchResultsSlice = createSlice({
  name: 'searchResultsSlice',
  initialState: {
    searchJSONData: {},
  },
  reducers: {
    inputJSONData: (state, action) => {
      state.searchJSONData = Object.assign(
        state.searchJSONData,
        action.payload
      );
    },
  },
});

export const { inputJSONData } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
