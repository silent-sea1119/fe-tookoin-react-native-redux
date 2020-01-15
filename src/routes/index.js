import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Home,
  Login,
  Register,
} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);

const StackHome = createStackNavigator(
  {
      Home,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackAuth',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);