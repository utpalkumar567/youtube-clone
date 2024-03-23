import { createSlice } from "@reduxjs/toolkit";

const hamburgerslice = createSlice({
  name: "hamburgerslice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toogleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },

    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toogleMenu, closeMenu } = hamburgerslice.actions;
export default hamburgerslice.reducer;
