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
  },
});

export const SignInActions = SignInSlice.actions;
export default SignInSlice;
