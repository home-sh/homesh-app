import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomButton from './RoomButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'firebase';
import '@firebase/firestore';

export default class RoomList extends Component {
  state = {
    rooms: [],
  };

  async componentDidMount() {
    this.unsubscribe = await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('rooms')
      .onSnapshot(snapshot => {
        this.setState({rooms: snapshot.docs});
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onPress = () => {
    this.props.navigation.navigate('AddRoom');
  };

  render() {
    return (
      <View>
        <View style={styles.roomHeader}>
          <Text style={styles.roomTitle}>Salle</Text>
          <Icon name="plus-circle" size={30} onPress={this.onPress} />
        </View>
        <View style={styles.roomList}>
          {this.state.rooms.map((room, index) => {
            return (
              <View style={styles.roomContainer} key={index}>
                <RoomButton room={room} navigation={this.props.navigation} />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roomHeader: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roomTitle: {
    fontWeight: '600',
    fontSize: 45,
    fontFamily: 'LexendDeca-Regular',
  },
  roomList: {
    marginVertical: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  roomContainer: {
    width: 140,
    height: 140,
    marginBottom: 25,
  },
});
