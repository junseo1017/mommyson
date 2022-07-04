import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import signInSlice, { signInState } from './signIn';
import signUpSlice, { signUpState } from './signUp';
import curNavSlice, { curNavState } from './currentNav';
export interface PState {
  signin: signInState;
  signup: signUpState;
  curNav: curNavState;
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state: PState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        signin: signInSlice.reducer,
        signup: signUpSlice.reducer,
        curNav: curNavSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
