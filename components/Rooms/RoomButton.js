import React, {Component} from 'react';
import {Text, StyleSheet, TouchableHighlight, View} from 'react-native';
import RoomDeviceList from './RoomDeviceList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class RoomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableHighlight
        underlayColor={styles.salleSquare.backgroundColor}
        onPress={() => this.props.navigation.navigate('Room')}>
        <View style={styles.salleSquare}>
          <Icon style={{textAlign: 'right'}} name="record" size={25} />
          <Text style={styles.RoomText}>Room</Text>
          <RoomDeviceList navigation={this.props.navigation} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  salleSquare: {
    height: '100%',
    width: '100%',
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
    justifyContent: 'space-between',
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#BDBDBD'
  },
  RoomText: {
    fontSize: 20,
    fontFamily: 'LexendDeca-Regular',
    textAlign: 'center',
  },
});
