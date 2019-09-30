import produce from 'immer';

const INITIAL_STATE = {
    items: [],
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@favorite/SAVE_ITEM_IN_FAVORITE': {
                let equal = false;

                draft.items.forEach(item => {
                    if (action.payload.item.id === item.id) equal = true;
                });

                if (equal === false) {
                    const { item } = action.payload;

                    if (item.added !== undefined) {
                        item.added = true;
                        draft.items = draft.items.concat(item);
                    } else {
                        console.tron.log(item);
                        const itemFormatted = { ...item, added: true };
                        draft.items = draft.items.concat(itemFormatted);
                    }
                }
                break;
            }
            case '@favorite/DELETE_ITEM_IN_FAVORITE': {
                draft.items.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        draft.items.splice(index, 1);
                    }
                });
                break;
            }
            default:
        }
    });
}
