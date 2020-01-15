import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../screens/Home/HomePage';
import Room from '../screens/Home/RoomPage';
import Device from '../screens/Home/DevicePage';
import Statistics from '../screens/Statistics';
import Settings from '../screens/Settings';
import Signin from '../screens/Signin';

const AuthStack = createStackNavigator({Signin});

const HomeStack = createStackNavigator({
  Home,
  Room,
  Device,
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
          iconName = `ios-home`;
        } else if (routeName === 'Statistics') {
          iconName = `ios-analytics`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options`;
        }

        // You can return any component that you like here!
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
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    },
  ),
);

export default Navigation;
