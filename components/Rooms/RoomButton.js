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
        <Text>Room</Text>
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
    backgroundColor: 'grey',
  },
});
