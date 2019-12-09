import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class DeviceButton extends Component {
  render() {
    return <View style={styles.favorisSquare} />;
  }
}

const styles = StyleSheet.create({
  favorisSquare: {
    marginTop: 30,
    marginBottom: 40,
    marginRight: 10,
    marginLeft: 8,
    width: 75,
    height: 75,
    backgroundColor: 'grey',
  },
});
