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
            roomName="coucou"
            iconName="tv"
            iconSize={30}
          />
        </View>
      )
    }

    return (
      <View>
        <Text style={styles.Text}> Favoris </Text>
        <ScrollView horizontal style={styles.favorisFlex}>

          {devices}

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    marginLeft: 40,
  },
  favorisFlex: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  viewStyle: {
    marginTop: 30,
    marginBottom: 40,
    width: 75,
    height: 75,
    marginRight: 30,
  },
});
