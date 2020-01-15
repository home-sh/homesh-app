import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

export default class DeviceButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.favorisSquare}
        onPress={() => this.props.navigation.navigate('Device')}>
        <Text>Device</Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  favorisSquare: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
