import { createSlice } from '@reduxjs/toolkit';

const cacheSlice = createSlice({
  name: 'cache',
  initialState: {},
  reducers: {
    manageCache: (state, action) => {
        /*
        store the search results of a particular inputSearch Text in the form of key value pairs 
            action.payload will be -> {
                inputSearch : [1,2,3,4,5,6]
            }
        */
      state = Object.assign(state, action.payload);
    },
  },
});

export const { manageCache } = cacheSlice.actions;
export default cacheSlice.reducer;
