import { createSlice } from '@reduxjs/toolkit';

export interface signInState {
  status: 'starting' | 'checking' | 'existing' | 'newuser';
}

const initialState: signInState = { status: 'starting' };

const SignInSlice = createSlice({
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
  },
});

export const SignInActions = SignInSlice.actions;
export default SignInSlice;
