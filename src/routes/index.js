import React from 'react';
import {View} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  Login,
  Register,
} from '../../pages';

const Router = createStackNavigator(
  {
    Register: {
        screen: Register,
      },
    Login: {
      screen: Login,
    },
    Home: {
      screen: Home,
    },
  },
  {
    headerMode: 'None',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(Router);
