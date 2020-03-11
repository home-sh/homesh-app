import React, {Component} from 'react';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DeviceButton extends Component {
  renderContent() {
    if (this.props.icon) {
      return <Icon name={this.props.icon} size={this.props.iconSize || 10} />;
    } else {
      return <Text>{this.props.title || 'device'}</Text>;
    }
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.device}
        onPress={() => this.props.navigation.navigate('Device')}>
        {this.renderContent()}
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
    backgroundColor: 'grey',
  },
});
