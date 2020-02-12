import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import LabeledInput from '../components/LabeledInput';

export default class Signin extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
          style={styles.logo}
          source={require('../assets/images/homesh-icon.png')}
        />
        <Text style={styles.title}>Connexion</Text>
        <LabeledInput label="Identifiant" />
        <LabeledInput label="Mot de passe" />
        <Button title="Se Connecter" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
    fontWeight: '700',
  },
});
