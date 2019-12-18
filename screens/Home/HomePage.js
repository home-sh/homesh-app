import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import RoomList from '../../components/Rooms/RoomsList';
import FavoritesList from '../../components/Device/FavoritesList';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <FavoritesList />
        <RoomList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
});
