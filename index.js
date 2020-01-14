/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import React from 'react';
import {name as appName} from './app.json';
import store from './src/redux/store';
import {Provider as StoreProvider} from 'react-redux';

const AppContainer = () => {
    return (
    //   <StoreProvider store={store}>
          
          <App />

    //   </StoreProvider>
    );
  };
AppRegistry.registerComponent(appName, () => AppContainer);
