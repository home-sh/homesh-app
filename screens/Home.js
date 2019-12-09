import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
        <View style={styles.addRoomView}>
          <Text style={styles.TextSalle}> Salle </Text>
          <Icon name="plus-circle" size={30} style={styles.icon} />
        </View>
        <View style={styles.salleContainer}>
          <View style={styles.salleFlex}>
            <View style={styles.salleSquare} />
            <View style={styles.salleSquare} />
          </View>
          <View style={styles.salleFlex}>
            <View style={styles.salleSquare} />
            <View style={styles.salleSquare} />
          </View>
          <View style={styles.salleFlex}>
            <View style={styles.salleSquare} />
            <View style={styles.salleSquare} />
          </View>
        </View>
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
  salleFlex: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
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
  addRoomView: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 40,
  },
  salleSquare: {
    flex: 1,
    marginTop: 30,
    height: 120,
    marginRight: 25,
    marginLeft: 25,
    backgroundColor: 'grey',
  },
  salleContainer: {
    marginBottom: 25,
  },
});
