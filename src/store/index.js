import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { partners } from './partners/reducer';

const reducers = combineReducers({ partners });
export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
