import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DevicePage extends Component {
  render() {
    return (
      <View style={styles.addRoomView}>
        <Text style={styles.TextDevice}> Appareil </Text>
        <Icon name="cog" size={30} style={styles.icon} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 40,
  },
  addRoomView: {
    flex: 1,
    flexDirection: 'row',
  },
  TextDevice: {
    flex: 1,
    marginLeft: 30,
    fontSize: 20,
  },
});
