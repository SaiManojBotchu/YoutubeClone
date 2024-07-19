import { createSlice } from '@reduxjs/toolkit';


/* slice which contains the state information of hamburger menu. Like is it open or closed.
Initally, it will be open */

const appSlice = createSlice({
  name: 'app',

  initialState: {
    isMenuOpen: false,
  },

  reducers: {

    //action - 1 to toggle the hamburger menu
    toggleSideBarMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    // action - 2 to close the hamburger menu
    closeSideBarMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSideBarMenu, closeSideBarMenu } = appSlice.actions;

export default appSlice.reducer;
