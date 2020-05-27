import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/Home/HomePage';
import Room from '../screens/Home/RoomPage';
import AddRoom from '../screens/Home/AddRoom';
import Device from '../screens/Home/DevicePage';
import AddDevice from '../screens/Home/AddDevice';
import Statistics from '../screens/Statistics';
import Settings from '../screens/Settings';
import Signin from '../screens/Signin';
import Register from '../screens/Register';
import Loading from '../screens/Loading';

const HomeStack = createStackNavigator({
  Home,
  Room,
  AddRoom,
  Device,
  AddDevice,
});

const StatisticsStack = createStackNavigator({
  Statistics,
});

const SettingsStack = createStackNavigator({
  Settings,
});

const BottomNavigation = createBottomTabNavigator(
  {
    Home: HomeStack,
    Statistics: StatisticsStack,
    Settings: SettingsStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'Statistics') {
          iconName = 'ios-analytics';
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      App: BottomNavigation,
      Signin,
      Register,
      Loading,
    },
    {
      initialRouteName: 'Loading',
    },
  ),
);

export default Navigation;
