import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import SignInSlice, { signInState } from './signIn';

export interface PState {
  signin: signInState;
}

// (이전상태, 액션) => 다음상태
const rootReducer = (state: PState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        signin: SignInSlice.reducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
