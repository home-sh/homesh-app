import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class DeviceButton extends Component {
  render() {
    return <View style={styles.favorisSquare} />;
  }
}

const styles = StyleSheet.create({
  favorisSquare: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
  },
});
