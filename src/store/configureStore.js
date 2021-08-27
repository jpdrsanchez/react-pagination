import { configureStore, combineReducers } from '@reduxjs/toolkit';
import posts from './posts';

const reducer = combineReducers({ posts });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;
