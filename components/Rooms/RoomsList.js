import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RoomButton from './RoomButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RoomList extends Component {
  constructor(props) {
    super(props);
  }

  rooms = [
    {
      name: 'Chambre',
      devices: [
        {icon: 'lightbulb'},
        {icon: 'lamp'},
        {icon: 'television'},
        {icon: 'alarm'},
      ],
    },
    {
      name: 'Salle de bain',
      devices: [{icon: 'lightbulb'}],
    },
    {
      name: 'Salon',
      devices: [
        {icon: 'lightbulb'},
        {icon: 'television'},
        {icon: 'laptop'},
        {icon: 'desktop-classic'},
        {icon: 'radio'},
        {icon: 'radio'},
      ],
    },
    {
      name: 'Bureau',
      devices: [{icon: 'lightbulb'}, {icon: 'desk-lamp'}],
    },
    {
      name: 'Salle à manger',
      devices: [{icon: 'lightbulb'}, {icon: 'alarm-light'}],
    },
    {
      name: 'Cuisine',
      devices: [{icon: 'lightbulb'}],
    },
  ];

  render() {
    return (
      <View>
        <View style={styles.roomHeader}>
          <Text style={styles.roomTitle}>Salle</Text>
          <Icon name="plus-circle" size={30} />
        </View>
        <View style={styles.roomContainer}>
          {this.rooms.map((room, index) => {
            return (
              <RoomButton
                key={index}
                room={room}
                navigation={this.props.navigation}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roomHeader: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  roomTitle: {
    fontWeight: '600',
    fontSize: 45,
    fontFamily: 'LexendDeca-Regular',
  },
  roomContainer: {
    marginHorizontal: '10%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});
