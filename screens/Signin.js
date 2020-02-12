import React, {Component} from 'react';
import {
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import firebase from 'firebase';
import LabeledInput from '../components/LabeledInput';

export default class Signin extends Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Image
          style={styles.logo}
          source={require('../assets/images/homesh-icon.png')}
        />
        {this.state.errorMessage && (
          <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
        )}
        <Text style={styles.title}>Connexion</Text>
        <LabeledInput
          label="Email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <LabeledInput
          label="Mot de passe"
          onChangeText={password => this.setState({password})}
          value={this.state.password}
        />
        <Button title="Se Connecter" onPress={this.handleLogin} />
        <Button
          title="Créer un compte ici"
          onPress={() => this.props.navigation.navigate('Register')}
        />
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
