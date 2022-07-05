import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface signInState {
  status: 'starting' | 'checking' | 'existing' | 'newuser' | 'loggedin';
  userNumber?: string;
}

const initialState: signInState = { status: 'starting' };

const signInSlice = createSlice({
  name: 'SignInStatus',
  initialState,
  reducers: {
    startSignIn(state) {
      state.status = 'checking';
    },
    existUser(state, action) {
      state.status = 'existing';
      state.userNumber = action.payload;
    },
    newUser(state, action) {
      state.status = 'newuser';
      state.userNumber = action.payload;
    },
    isloggedin(state) {
      state.status = 'loggedin';
    },
  },
});

export const SignInActions = signInSlice.actions;
export default signInSlice;
