import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import DeviceButton from '../Device/DeviceButton';

export default class FavoritesList extends Component {
  render() {
    let devices = [];

    for (let i = 0; i < 4; i++) {
      devices.push(
        <View style={styles.viewStyle} key={i}>
          <DeviceButton 
          navigation={this.props.navigation}
          iconName="tv" />
        </View>
      )
    }

    return (
      <View>
        <View horizontal style={styles.favorisFlex}>
          {devices}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorisFlex: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  viewStyle: {
    width: 20,
    height: 20,
  },
});
