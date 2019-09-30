import { all, takeEvery, put } from 'redux-saga/effects';

import {
    updateDownloadedStatus,
    updateDownloadedStatusFailure,
} from '../storeList/action';

export function* updateStoreList({ payload }) {
    try {
        yield put(updateDownloadedStatus(payload.item));
    } catch (error) {
        yield put(updateDownloadedStatusFailure());
    }
}

export default all([
    takeEvery('@download/SAVE_PREVIEW', updateStoreList),
    takeEvery('@download/DELETE_ITEM_IN_DOWNLOAD', updateStoreList),
]);
