import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import DeviceButton from '../Device/DeviceButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DeviceList extends Component {
  render() {
    let devices = [];

    for (let i = 0; i < 9; i++) {
      devices.push(
        <View style={styles.viewStyle} key={i}>
          <DeviceButton
            navigation={this.props.navigation}
            deviceName="COUCOU"
            iconName="tv"
            iconSize={70}
            shadow={true}
          />
        </View>,
      );
    }
    return (
      <ScrollView>
        <Text style={styles.salleText}>Salle</Text>
        <View style={styles.addRoomView}>
          <Text style={styles.TextDevice}> Appareil </Text>
          <Icon name="plus-circle" size={30} style={styles.icon} />
        </View>
        <View style={styles.devicesContainer}>{devices}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  devicesContainer: {
    marginTop: 25,
    marginBottom: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  viewStyle: {
    width: 140,
    height: 140,
    marginBottom: 25,
    marginRight: 25,
    marginLeft: 25,
  },
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
    alignItems: 'flex-start',
  },
  salleText: {
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 25,
    marginTop: 20,
  },
});
