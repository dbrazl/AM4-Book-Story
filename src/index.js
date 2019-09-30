import React from 'react';
import { View, StatusBar } from 'react-native';

import './config/ReactotronConfig';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import Routes from './routes';

export default function src() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <StatusBar barStyle="light-content" backgroundColor="#000" />
                <Routes />
                <View />
            </PersistGate>
        </Provider>
    );
}
