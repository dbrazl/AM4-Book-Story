export function saveItemInFavorite(item) {
    return {
        type: '@favorite/SAVE_ITEM_IN_FAVORITE',
        payload: { item },
    };
}

export function deleteItemInFavorite(item) {
    return {
        type: '@favorite/DELETE_ITEM_IN_FAVORITE',
        payload: item,
    };
}

export function deleteItemInFavoriteFailure() {
    return {
        type: '@favorite/DELETE_ITEM_IN_FAVORITE_FAILURE',
    };
}
