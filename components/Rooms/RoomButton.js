import React, {Component} from 'react';
import {Text, StyleSheet, TouchableHighlight} from 'react-native';

export default class RoomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        style={styles.salleSquare}
        onPress={() => this.props.navigation.navigate('Room')}>
        <Text style={styles.RoomText}>Room</Text>
      </TouchableHighlight>
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
  },
  RoomText: {
    fontFamily: 'LexendDeca-Regular',
    textAlign: 'center',
  },
});
