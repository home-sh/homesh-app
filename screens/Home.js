import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

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
        <Text style={styles.Text}> Salle </Text>
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
  favorisFlex: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
  },
  salleFlex: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
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
  salleSquare: {
    marginTop: 30,
    width: 150,
    height: 150,
    marginRight: 5,
    marginLeft: 10,
    backgroundColor: 'grey',
  },
  salleContainer: {
    marginBottom: 25,
  },
});
