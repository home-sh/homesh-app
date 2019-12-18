import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from './screens/Home/HomePage';
import RoomPage from './screens/Home/RoomPage';

const App = () => {
  return <AppContainer />;
};

const AppNavigator = createStackNavigator({
  Home: HomePage,
  Room: RoomPage,
});

const AppContainer = createAppContainer(AppNavigator);

export default App;
