import { combineReducers } from 'redux';
import {authReducer,stepperReducer } from './reducers';

const combinedReducers = combineReducers({
  authReducer,
  stepperReducer
});

export default combinedReducers;
