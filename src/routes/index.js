import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home, Login, Register, Profile} from '../screens/index';

const StackAuth = createStackNavigator(
  {
    Login,
    Register,
  },
  {
    initialRouteName: 'Register',
    headerMode: 'none',
  }
);

const StackHome = createStackNavigator(
  {
      Home,
      Profile,
  },
  {
    initialRouteName: 'Profile',
    headerMode: 'none',
  }
);

const Router = createSwitchNavigator(
  {
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackHome',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);