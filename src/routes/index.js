import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Home} from '../screens/index';

const Router = createStackNavigator(
  {
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
