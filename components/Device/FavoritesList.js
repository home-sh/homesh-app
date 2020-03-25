import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import DeviceButton from './DeviceButton';

export default class FavoritesList extends Component {
  render() {
    let devices = [];

    for (let i = 0; i < 9; i++) {
      devices.push(
        <View style={styles.viewStyle} key={i}>
          <DeviceButton
            navigation={this.props.navigation}
            deviceName="Device"
            roomName="Room"
            iconName="tv"
            iconSize={30}
            shadow={true}
          />
        </View>
      )
    }

    return (
      <View>
        <Text style={styles.Text}> Favoris </Text>
        <ScrollView horizontal >
          <View style={styles.favorisFlex}>
            {devices}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'flex-start',
    fontFamily: 'LexendDeca-Regular',
  },
  favorisFlex: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  viewStyle: {
    width: 80,
    height: 80,
    marginRight: 20,
  },
});
