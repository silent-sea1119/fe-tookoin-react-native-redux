import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'react-native-elements';
import IconFA from 'react-native-vector-icons/FontAwesome';

import {
  Home,
  HomeBuyer,
  MyOrder,
  Login,
  Register,
  Profile,
  InboxBuyer,
  DetailProdukBuyer,
} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
    Profile,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const StackHomeBuyer = createStackNavigator(
  { 
    HomeBuyer,
    DetailProdukBuyer,
  },
  {
    initialRouteName: 'HomeBuyer',
    headerMode: 'none',
  },
);

StackHomeBuyer.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === "DetailProdukBuyer") {
        tabBarVisible = false;
      } else {
        tabBarVisible = true;
      }
    });
  }

  return {
    tabBarVisible
  };
};

// const StackHome = createStackNavigator(
//   {
//     HomeBuyer,
//     InboxBuyer,
//     Profile,
//     MyOrder,
//     DetailProdukBuyer,
//   },
//   {
//     // initialRouteName: 'HomeBuyer',
//     // initialRouteName: 'Profile',
//     // initialRouteName: 'InboxBuyer',
//     initialRouteName: 'HomeBuyer',
//     headerMode: 'none',
//   },
// );

const RouteTab = createBottomTabNavigator(
  {
    HomeBuyer: {
      screen: StackHomeBuyer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <IconFA name="shopping-bag" size={22} color={tintColor} />
        ),
        tabBarLabel: 'Shop',
      },
    },
    MyOrder: {
      screen: MyOrder,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="receipt" size={24} color={tintColor} />
        ),
        tabBarLabel: 'My Order',
      },
    },
    Cart: {
      screen: MyOrder,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="shopping-cart"
            type="font-awesome"
            size={26}
            color={tintColor}
          />
        ),
        tabBarLabel: 'Cart',
      },
    },
    Notification: {
      screen: InboxBuyer,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon
            name="notifications"
            type="material"
            size={26}
            color={tintColor}
          />
        ),
        tabBarLabel: 'Notifications',
      },
    },

    Profile: {
      screen: StackAuth,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" type="font-awesome" size={24} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeBuyer',
    tabBarOptions: {
      activeTintColor: '#00B444',
    },
  },
);

const Router = createSwitchNavigator(
  {
    // StackAuth,
    // StackHome,
    RouteTab,
  },
  {
    initialRouteName: 'RouteTab',
    headerMode: 'none',
  },
);

// const RouterDEV = createStackNavigator(
//   {
//     Register,
//     Login,
//   },
//   {
//     initialRouteName: 'Register',
//     headerMode: 'none',
//   },
// );

// export default createAppContainer(RouterDEV);
export default createAppContainer(Router);
