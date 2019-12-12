import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../components/Main';
import Login from '../components/Login';
import TabbarNavigation from './tabbar-navigation';
import Loader from '../lib/components/Loader';

import HeaderRightOption from '../lib/components/HeaderRightOption';

const RootNavigation = createStackNavigator(
  {
    Login: {
      screen: Login,
      path: 'login',
      navigationOptions: {
        header: null,
      },
    },
    Main: {
      screen: Main,
      path: 'main',
      navigationOptions: {
        title: 'Main',
      },
    },
    Tabbar: {
      screen: TabbarNavigation,
      path: 'tabbar',
      navigationOptions: ({navigation}) => ({
        headerTitle: 'Coffee!',
        headerRight: <HeaderRightOption />,
      }),
    },
    Loader: {
      screen: Loader,
      path: 'loader',
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(RootNavigation);
