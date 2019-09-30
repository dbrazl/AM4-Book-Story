import produce from 'immer';

const INITIAL_STATE = {
    previews: [],
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@download/SAVE_PREVIEW': {
                let equal = false;

                draft.previews.forEach(item => {
                    if (action.payload.item.id === item.id) {
                        equal = true;
                    }
                });

                if (equal === false) {
                    const { item } = action.payload;

                    if (item.downloaded !== undefined) {
                        item.downloaded = true;
                        draft.previews = draft.previews.concat(item);
                    } else {
                        const itemFormatted = { ...item, downloaded: true };
                        draft.previews = draft.previews.concat(itemFormatted);
                    }
                }
                break;
            }
            case '@download/DELETE_ITEM_IN_DOWNLOAD': {
                draft.previews.forEach((item, index) => {
                    if (item.id === action.payload.item.id) {
                        draft.previews.splice(index, 1);
                    }
                });
                break;
            }
            default:
        }
    });
}
