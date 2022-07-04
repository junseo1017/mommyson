import { createSlice } from '@reduxjs/toolkit';
export interface curNavState {
  home: boolean;
  gether: boolean;
  square: boolean;
  profile: boolean;
}

const initialState: curNavState = { home: true, gether: false, square: false, profile: false };

const curNavSlice = createSlice({
  name: 'currentNav',
  initialState,
  reducers: {
    navHome(state) {
      state.home = true;
      state.gether = false;
      state.square = false;
      state.profile = false;
    },
    navGether(state) {
      state.home = false;
      state.gether = true;
      state.square = false;
      state.profile = false;
    },
    navSquare(state) {
      state.home = false;
      state.gether = false;
      state.square = true;
      state.profile = false;
    },
    navProfile(state) {
      state.home = false;
      state.gether = false;
      state.square = false;
      state.profile = true;
    },
  },
});

export const curNavActions = curNavSlice.actions;
export default curNavSlice;
