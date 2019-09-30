import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: 'AM4BookStoreTest',
            storage: AsyncStorage,
            whitelist: ['favorite', 'download', 'storeList'],
        },
        reducers
    );

    return persistedReducer;
};
