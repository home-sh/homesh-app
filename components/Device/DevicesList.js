import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import DeviceButton from '../Device/DeviceButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DeviceList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.salleText}>Salle</Text>
        <View style={styles.addRoomView}>
          <Text style={styles.TextDevice}> Appareil </Text>
          <Icon name="plus-circle" size={30} style={styles.icon} />
        </View>
        <View style={styles.deviceContainer}>
          <View style={styles.deviceFlex}>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
          </View>
          <View style={styles.deviceFlex}>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
          </View>
          <View style={styles.deviceFlex}>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
          </View>
          <View style={styles.deviceFlex}>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
            <View style={styles.viewStyle}>
              <DeviceButton navigation={this.props.navigation} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deviceContainer: {
    marginTop: 25,
    marginBottom: 25,
  },
  deviceFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
