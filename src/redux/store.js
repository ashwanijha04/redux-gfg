// src/redux/store.js

import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from '../redux/taskReducers';

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  taskReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
