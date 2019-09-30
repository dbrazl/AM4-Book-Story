export function savePreview(item) {
    return {
        type: '@download/SAVE_PREVIEW',
        payload: { item },
    };
}

export function deleteItemInDownload(item) {
    return {
        type: '@download/DELETE_ITEM_IN_DOWNLOAD',
        payload: { item },
    };
}

export function deleteItemInDownloadFailure() {
    return {
        type: '@download/DELETE_ITEM_IN_DOWNLOAD_FAILURE',
    };
}
