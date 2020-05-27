import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import firebase from 'firebase';

export default class Settings extends Component {
  signOutUser = async () => {
    try {
      await firebase.auth().signOut();
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <View>
        <Button title="DECONNEXION" onPress={this.signOutUser} />
      </View>
    );
  }
}
