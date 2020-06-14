import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import testReducer from './testReducer';

export default combineReducers({libraries: libraryReducer, test: testReducer});