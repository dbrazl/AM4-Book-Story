import { combineReducers } from 'redux';

import download from './download/reducer';
import favorite from './favorite/reducer';
import storeList from './storeList/reducer';

export default combineReducers({
    favorite,
    download,
    storeList,
});
