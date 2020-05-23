import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// middleware catches the action, console logs it out and it moves along
import rootReducer from './root-reducer';
// store is expecting the middleware is going to be an array

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

