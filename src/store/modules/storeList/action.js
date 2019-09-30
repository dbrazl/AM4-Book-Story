export function storageStoreList(list) {
    return {
        type: '@store/STORAGE_STORE_LIST',
        payload: list,
    };
}

export function updateDownloadedStatus(item) {
    return {
        type: '@store/UPDATE_DOWNLOAD_STATUS',
        payload: item,
    };
}

export function updateDownloadedStatusFailure() {
    return {
        type: '@store/UPDATE_DOWNLOAD_STATUS_FAILURE',
    };
}
