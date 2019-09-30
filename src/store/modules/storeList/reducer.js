import produce from 'immer';

const INITIAL_STATE = {
    list: [],
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@store/STORAGE_STORE_LIST': {
                draft.list = action.payload;
                break;
            }
            case '@store/UPDATE_DOWNLOAD_STATUS': {
                draft.list.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        if (item.downloaded === undefined) {
                            draft.list[index] = { ...item, downloaded: true };
                        }
                        console.tron.log(`item.downloaded: ${item.downloaded}`);
                        if (item.downloaded === true) {
                            draft.list[index].downloaded = false;
                        } else {
                            draft.list[index].downloaded = true;
                        }
                    }
                });
                break;
            }
            default:
        }
    });
}
