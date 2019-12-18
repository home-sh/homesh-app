import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class RoomButton extends Component {
  render() {
    return <View style={styles.salleSquare} />;
  }
}

const styles = StyleSheet.create({
  salleSquare: {
    flex: 1,
    marginTop: 30,
    height: 130,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: 'grey',
  },
});
