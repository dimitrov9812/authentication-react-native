import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';
import albumReducer from './albumReducer';
import menuReducer from './menuReducer';

export default combineReducers(
    {
    libraries: libraryReducer,
    selectLibrary: selectionReducer,
    selectMenu: selectionReducer,
    albums: albumReducer,
    menus: menuReducer
    });