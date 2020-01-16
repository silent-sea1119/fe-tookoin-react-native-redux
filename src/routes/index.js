import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  HomeBuyer,
  MyOrder,
  Login,
  Register,
  Profile,
} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const StackHome = createStackNavigator(
  {
    HomeBuyer,
    Profile,
    MyOrder,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  },
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
