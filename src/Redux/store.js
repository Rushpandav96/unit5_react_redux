import {legacy_createStore as createStore} from 'redux';
import { TodoReducer } from './reducer';

export const store = createStore(TodoReducer,{todos:[]});