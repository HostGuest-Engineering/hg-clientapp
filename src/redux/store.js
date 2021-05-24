import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combinedReducers from '.';

const middleware = [thunk];
const store = createStore(combinedReducers, compose(applyMiddleware(...middleware)));

export { store };
