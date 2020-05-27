import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import LabeledInput from '../../components/LabeledInput';
import firebase from 'firebase';
import '@firebase/firestore';

export default class AddRoom extends Component {
  state = {
    name: '',
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
  });

  onSave = async () => {
    await firebase
      .firestore()
      .collection('users')
      .doc(firebase.auth().currentUser.uid)
      .collection('rooms')
      .doc()
      .set({name: this.state.name});
    this.props.navigation.pop();
  };

  render() {
    return (
      <View style={this.styles.container}>
        <LabeledInput
          label="Name"
          textContentType="none"
          autoCapitalize="none"
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <Button title="Enregistrer" onPress={this.onSave} />
      </View>
    );
  }
}
