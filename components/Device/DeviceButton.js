import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableNativeFeedback, StyleSheet, Text, View } from 'react-native';

export default class DeviceButton extends Component {

  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Device')}>

        <View style={styles.favorisSquare}>
          <Icon name={this.props.iconName} size={this.props.iconSize} style={styles.icon} />
          <View>{this.props.deviceName ? <Text style={styles.text}> {this.props.deviceName} </Text> : null}</View>
          <View>{this.props.roomName ? <Text> {this.props.roomName} </Text> : null}</View>
        </View>

      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  favorisSquare: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  text: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 20,
  }
});
