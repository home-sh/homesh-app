import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import DeviceButton from './DeviceButton';

export default class FavoritesList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Text}> Favoris </Text>
        <ScrollView horizontal style={styles.favorisFlex}>
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
          <DeviceButton />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    marginLeft: 40,
  },
  favorisFlex: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
});
