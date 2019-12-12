import {createBottomTabNavigator} from 'react-navigation-tabs';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Tab1 from '../components/Tab1';
import Tab2 from '../components/Tab2';

/* eslint react/prop-types: 0 */

export default createBottomTabNavigator(
  {
    Tab1: {
      screen: Tab1,
      navigationOptions: {
        title: 'MAIN',
      },
    },
    Tab2: {
      screen: Tab2,
      navigationOptions: {
        title: 'LIST',
      },
    },
  },
  {
    lazy: true,
    animationEnabled: true,
    tabBarOptions: {
      pressOpacity: 0.5,
      activeTintColor: colors.blue,
      labelStyle: {
        ...fonts.size12Bold,
        margin: 0,
      },
      showIcon: true,
      style: {
        backgroundColor: colors.dark,
      },
      indicatorStyle: {
        opacity: 0,
      },
      inactiveTintColor: colors.lightGray,
    },
  },
);
