import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import cacheSlice from './cacheSlice';
import searchResultsSlice from './searchResultsSlice';

const store = configureStore({
  reducer: {
    /* put the slice of hamburger menu in the store */
    app: appSlice,
    cache: cacheSlice,
    searchResultsSlice: searchResultsSlice
  }
});

export default store;
