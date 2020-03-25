import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import DeviceButton from './DeviceButton';

export default class FavoritesList extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Text}> Favoris </Text>
        <ScrollView style={styles.list} horizontal>
          {this.props.favorites.map((device, i) => {
            return (
              <View style={styles.viewStyle} key={i}>
                <DeviceButton
                  navigation={this.props.navigation}
                  deviceName="Device"
                  roomName="Room"
                  iconName="television"
                  iconSize={30}
                  shadow={true}
                  isOn={true}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Text: {
    fontWeight: 'bold',
    fontSize: 30,
    alignItems: 'flex-start',
    fontFamily: 'LexendDeca-Regular',
  },
  viewStyle: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
  },
});
