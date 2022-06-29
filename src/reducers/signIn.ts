import { createSlice } from '@reduxjs/toolkit';

interface stateState {
  status: 'pending' | 'checking' | 'existing' | 'newuser';
}

const initialState: stateState = { status: 'pending' };
export type signInState = typeof initialState;

const SignInSlice = createSlice({
  name: 'SignInStatus',
  initialState,
  reducers: {
    checkUser(state) {
      state.status = 'checking';
    },
  },
});

export const SignInSliceAcitons = SignInSlice.actions;
export default SignInSlice;
