import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';

import Icon from 'react-native-vector-icons/Fontisto';

import Main from './pages/Main';
import Favorite from './pages/Favorite';
import Store from './pages/Store';
import Product from './pages/Product';
import Download from './pages/Download';

const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#ffad00',
    inactiveTintColor: '#fff',
    style: {
        backgroundColor: '#000',
    },
};

const navigationOptions = {
    tabBarLabel: 'LOJA',
    tabBarIcon: ({ tintColor }) => (
        <Icon name="shopping-store" size={20} color={tintColor} />
    ),
};

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
};

const navigation = createBottomTabNavigator(
    {
        Main,
        Favorite,
        Store: {
            screen: createStackNavigator(
                {
                    Store,
                    Product,
                },
                {
                    defaultNavigationOptions,
                }
            ),
            navigationOptions,
        },
        Download,
    },
    {
        tabBarOptions,
    }
);

export default createAppContainer(navigation);
