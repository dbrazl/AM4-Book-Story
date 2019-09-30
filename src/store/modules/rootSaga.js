import { all } from 'redux-saga/effects';

import download from './download/saga';
import favorite from './favorite/saga';
import storeList from './storeList/saga';

export default function* rootSaga() {
    return yield all([download, favorite, storeList]);
}
