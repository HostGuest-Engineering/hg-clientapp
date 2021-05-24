import { combineReducers } from 'redux';
import {authReducer } from './reducers';

const combinedReducers = combineReducers({
  authReducer
});

export default combinedReducers;
