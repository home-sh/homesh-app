import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableNativeFeedback, StyleSheet, Text, View } from 'react-native';

export default class DeviceButton extends Component {

  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Device')}>

        <View style={[styles.favorisSquare, this.props.shadow ? styles.shadow : null]}>
          <Icon name={this.props.iconName} size={this.props.iconSize} style={styles.icon} />
          <View>{this.props.deviceName ? <Text style={styles.text}> {this.props.deviceName} </Text> : null}</View>
          <View>{this.props.roomName ? <Text style={styles.subtext}> {this.props.roomName} </Text> : null}</View>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BDBDBD'
  },
  shadow: {
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
    fontSize: 15,
    fontFamily: 'LexendDeca-Regular',
    margin:-5
  },
  subtext: {
    fontSize: 10,
    fontFamily: 'LexendDeca-Regular',
    margin:-1
  }

});
