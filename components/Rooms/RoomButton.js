import React, {Component} from 'react';
import {Text, StyleSheet, TouchableHighlight, View} from 'react-native';
import RoomDeviceList from './RoomDeviceList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';
import '@firebase/firestore';

export default class RoomButton extends Component {
  state = {
    devices: [],
  };

  async componentDidMount() {
    this.unsubscribe = await this.props.room.ref
      .collection('devices')
      .onSnapshot(snapshot => {
        this.setState({devices: snapshot.docs});
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor={styles.room.backgroundColor}
        onPress={() =>
          this.props.navigation.navigate('Room', {room: this.props.room})
        }>
        <View style={styles.room}>
          <Icon
            style={{textAlign: 'right'}}
            color="#212121"
            name="record"
            size={25}
          />
          <Text style={styles.text}>
            {this.props.room.data().name || 'Room'}
          </Text>
          <RoomDeviceList
            devices={this.state.devices}
            navigation={this.props.navigation}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  room: {
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'LexendDeca-Regular',
  },
});
