import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableHighlight, StyleSheet, Text, View} from 'react-native';

export default class DeviceButton extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor={styles.device.backgroundColor}
        onPress={() =>
          this.props.navigation.navigate('Device', {
            device: this.props.device,
          })
        }
        // onLongPress={() =>
        //   this.props.navigation.navigate('Device', {
        //     device: this.props.device,
        //     favorite: this.props.device.data().favorite,
        //   })
        // }
      >
        <View
          style={[
            styles.device,
            this.props.shadow ? styles.shadow : null,
            this.props.isOn ? styles.activated : null,
          ]}>
          {this.props.iconName ? (
            <Icon
              name={this.props.iconName}
              size={this.props.iconSize}
              style={styles.icon}
              color={this.props.isOn ? '#8BC34A' : 'black'}
            />
          ) : null}
          {this.props.deviceName ? (
            <Text
              style={[styles.text, this.props.isOn ? styles.activated : null]}>
              {this.props.deviceName}
            </Text>
          ) : null}
          {this.props.roomName ? (
            <Text
              style={[
                styles.subtext,
                this.props.isOn ? styles.activated : null,
              ]}>
              {this.props.roomName}
            </Text>
          ) : null}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  device: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BDBDBD',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  activated: {
    borderColor: '#8BC34A',
    color: '#8BC34A',
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontFamily: 'LexendDeca-Regular',
  },
  subtext: {
    fontSize: 10,
    fontFamily: 'LexendDeca-Regular',
    marginTop: -5,
  },
});
