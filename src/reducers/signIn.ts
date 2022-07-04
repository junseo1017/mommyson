import { createSlice } from '@reduxjs/toolkit';

export interface signInState {
  status: 'starting' | 'checking' | 'existing' | 'newuser' | 'loggedin';
}

const initialState: signInState = { status: 'starting' };

const signInSlice = createSlice({
  name: 'SignInStatus',
  initialState,
  reducers: {
    startSignIn(state) {
      state.status = 'checking';
    },
    existUser(state) {
      state.status = 'existing';
    },
    newUser(state) {
      state.status = 'newuser';
    },
    isloggedin(state) {
      state.status = 'loggedin';
    },
  },
});

export const SignInActions = signInSlice.actions;
export default signInSlice;
