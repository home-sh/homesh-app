import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomButton from './RoomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RoomList extends Component {
  render() {
    return (
      <View>
        <View style={styles.addRoomView}>
          <Text style={styles.TextSalle}> Salle </Text>
          <Icon name="plus-circle" size={30} style={styles.icon} />
        </View>
        <View style={styles.salleContainer}>
          <View style={styles.salleFlex}>
            <RoomButton />
            <RoomButton />
          </View>
          <View style={styles.salleFlex}>
            <RoomButton />
            <RoomButton />
          </View>
          <View style={styles.salleFlex}>
            <RoomButton />
            <RoomButton />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addRoomView: {
    flex: 1,
    flexDirection: 'row',
  },
  TextSalle: {
    flex: 1,
    marginLeft: 40,
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 40,
  },
  salleContainer: {
    marginBottom: 25,
  },
  salleFlex: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
});
