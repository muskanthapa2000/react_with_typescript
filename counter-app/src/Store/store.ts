import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import reducer from './reducer';

// Define the RootState based on your reducer
export type RootState = ReturnType<typeof reducer>; // Infer the state type from the reducer

// Create the store
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
