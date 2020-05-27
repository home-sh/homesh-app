import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import DeviceButton from '../Device/DeviceButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DeviceList extends Component {
  state = {
    devices: [],
  };

  room = this.props.navigation.state.params.room;

  async componentDidMount() {
    this.unsubscribe = await this.room.ref
      .collection('devices')
      .onSnapshot(snapshot => {
        this.setState({devices: snapshot.docs});
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onPress = () => {
    this.props.navigation.navigate('AddDevice', {room: this.room});
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.roomName}>{this.room.data().name}</Text>
        <View style={styles.deviceHeader}>
          <Text style={styles.deviceTitle}>Appareils</Text>
          <Icon
            name="plus-circle"
            size={30}
            style={styles.icon}
            onPress={this.onPress}
          />
        </View>
        <View style={styles.devicesList}>
          {this.state.devices.map((device, index) => {
            return (
              <View style={styles.deviceContainer} key={index}>
                <DeviceButton
                  navigation={this.props.navigation}
                  device={device}
                  deviceName={device.data().name}
                  iconName={device.data().icon}
                  iconSize={70}
                  shadow={true}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  roomName: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 25,
    marginTop: 20,
  },
  deviceHeader: {
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deviceTitle: {
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'LexendDeca-Regular',
  },
  devicesList: {
    marginVertical: 25,
    marginHorizontal: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  deviceContainer: {
    width: 140,
    height: 140,
    marginBottom: 25,
  },
});
