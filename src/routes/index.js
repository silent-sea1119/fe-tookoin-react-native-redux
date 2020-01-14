import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Home,
  Login,
  Register,
} from '../screens/index';

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
