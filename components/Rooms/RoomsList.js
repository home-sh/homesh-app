import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomButton from './RoomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RoomList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let rooms = [];

    for (let i = 0; i < 9; i++) {
      rooms.push(
        <View style={styles.viewStyle} key={i}>
          <RoomButton navigation={this.props.navigation} />
        </View>,
      );
    }
    return (
      <View>
        <View style={styles.addRoomView}>
          <Text style={styles.TextSalle}> Salle </Text>
          <Icon name="plus-circle" size={30} style={styles.icon} />
        </View>
        <View style={styles.salleContainer}>{rooms}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addRoomView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextSalle: {
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'flex-start',
    fontFamily: 'LexendDeca-Regular',
  },
  icon: {
    marginRight: 40,
  },
  salleContainer: {
    marginTop: 15,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  viewStyle: {
    width: 170,
    height: 170,
    marginBottom: 25,
    marginRight: 10,
    marginLeft: 10,
  },
});
