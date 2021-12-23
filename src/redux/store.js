import { createStore } from 'redux';
import initialState from './initialState';
import reducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;