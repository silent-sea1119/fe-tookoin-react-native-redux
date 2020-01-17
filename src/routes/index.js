import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  Home,
  HomeBuyer,
  MyOrder,
  Login,
  Register,
  Profile,
  InboxBuyer,
  DetailProdukBuyer,
  HomeSeller
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
    InboxBuyer,
    Profile,
    MyOrder,
    DetailProdukBuyer
  },
  {
    // initialRouteName: 'HomeBuyer',
    // initialRouteName: 'Profile',
    // initialRouteName: 'InboxBuyer',
    initialRouteName: 'DetailProdukBuyer',
    headerMode: 'none',
  },
);

const StackSeller = createStackNavigator({
  HomeSeller,
}, {
  headerMode: 'none',
})

const Router = createSwitchNavigator(
  {
    StackSeller,
    StackAuth,
    StackHome,
  },
  {
    initialRouteName: 'StackSeller',
    headerMode: 'none',
  },
);

const RouterDEV = createStackNavigator(
  {
    Register,
    Login
  },
  {
    initialRouteName: 'Register',
    headerMode: 'none',
  }
);

// export default createAppContainer(RouterDEV);
export default createAppContainer(Router);
