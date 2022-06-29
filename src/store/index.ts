import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Reducer, AnyAction } from 'redux';
import rootReducer, { PState } from '../reducers/rootreducer';
const isDev = process.env.NODE_ENV === 'development';
const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<PState, AnyAction>,
    devTools: isDev,
  });
  return store;
};

const wrapper = createWrapper(createStore, {
  debug: isDev,
});

export default wrapper;
