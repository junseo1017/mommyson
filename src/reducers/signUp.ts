import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface signUpState {
  userNumber: string;
}

const initialState: signUpState = { userNumber: '' };

const signUpSlice = createSlice({
  name: 'SignInStatus',
  initialState,
  reducers: {
    saveNumber(state, action: PayloadAction<string>) {
      state.userNumber = action.payload;
    },
  },
});

export const signUpActions = signUpSlice.actions;
export default signUpSlice;
