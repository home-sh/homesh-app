import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import DeviceButton from '../Device/DeviceButton';

export default class FavoritesList extends Component {
  render() {
    return (
      <View>
        <View horizontal style={styles.favorisFlex}>
          <View style={styles.viewStyle}>
            <DeviceButton navigation={this.props.navigation} />
          </View>
          <View style={styles.viewStyle}>
            <DeviceButton navigation={this.props.navigation} />
          </View>
          <View style={styles.viewStyle}>
            <DeviceButton navigation={this.props.navigation} />
          </View>
          <View style={styles.viewStyle}>
            <DeviceButton navigation={this.props.navigation} />
          </View>
          <View style={styles.viewStyle}>
            <DeviceButton navigation={this.props.navigation} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorisFlex: {
    flexDirection: 'row',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  viewStyle: {
    width: 20,
    height: 20,
  },
});
