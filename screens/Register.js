import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
  Platform,
} from 'react-native';
import firebase from 'firebase';
import LabeledInput from '../components/LabeledInput';

export default class Register extends Component {
  state = {email: '', password: '', errorMessage: null};
  handleLogin = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({ios: 0, android: -50})}
          style={styles.fullscreen}
          behavior="padding">
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../assets/images/homesh-icon.png')}
            />
            {this.state.errorMessage && (
              <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
            )}
            <Text style={styles.title}>Inscription</Text>
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
            <Button title="Créer un compte" onPress={this.handleLogin} />
            <Button
              title="Connectez vous ici"
              onPress={() => this.props.navigation.navigate('Signin')}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
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
