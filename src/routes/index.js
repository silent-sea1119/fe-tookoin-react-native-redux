import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {HomeBuyer, ProfileBuyer} from '../screens/index';

const Router = createStackNavigator(
  {
    HomeBuyer: {
      screen: HomeBuyer,
    },
    ProfileBuyer: {
      screen: ProfileBuyer,
    },
  },
  {
    headerMode: 'None',
    initialRouteName: 'ProfileBuyer',
  },
);

export default createAppContainer(Router);
