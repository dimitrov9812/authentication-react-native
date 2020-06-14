import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import testReducer from './testReducer';
import selectionReducer from './selectionReducer';

export default combineReducers(
    {
    libraries: libraryReducer,
    selectLibrary: selectionReducer
    });