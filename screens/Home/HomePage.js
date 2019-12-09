import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import RoomList from '../../components/Rooms/RoomsList';

export default class Home extends Component {
  render() {
    return (
      <ScrollView style={styles.mainContainer}>
        <Text style={styles.Text}> Favoris </Text>
        <ScrollView horizontal style={styles.favorisFlex}>
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
          <View style={styles.favorisSquare} />
        </ScrollView>
        <RoomList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 30,
  },
  Text: {
    marginLeft: 40,
  },
  TextSalle: {
    flex: 1,
    marginLeft: 40,
    alignItems: 'flex-start',
  },
  favorisFlex: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  favorisSquare: {
    marginTop: 30,
    marginBottom: 40,
    marginRight: 10,
    marginLeft: 8,
    width: 75,
    height: 75,
    backgroundColor: 'grey',
  },
});
