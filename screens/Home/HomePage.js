import React, {Component} from 'react';
import {StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import RoomList from '../../components/Rooms/RoomsList';
import FavoritesList from '../../components/Device/FavoritesList';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.mainContainer}>
          <FavoritesList navigation={this.props.navigation} />
          <RoomList navigation={this.props.navigation} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
});
