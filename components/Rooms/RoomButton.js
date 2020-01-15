import React, {Component} from 'react';
import {Text, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import RoomDeviceList from './RoomDeviceList';
export default class RoomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableNativeFeedback
        onPress={() => this.props.navigation.navigate('Room')}>
        <View style={styles.salleSquare}>
          <Text style={styles.RoomText}>Room</Text>
          <View style={{position: 'absolute', bottom: 5, width: '100%'}}>
            <RoomDeviceList navigation={this.props.navigation} />
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  salleSquare: {
    flex: 1,
    marginTop: 30,
    height: 130,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    justifyContent: 'center',
  },
  RoomText: {
    fontSize: 20,
    fontFamily: 'LexendDeca-Regular',
    textAlign: 'center',
  },
});
