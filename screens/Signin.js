import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  Button,
} from 'react-native';
import firebase from 'firebase';
import LabeledInput from '../components/LabeledInput';

export default class Signin extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null,
    showPassword: true,
    icon: 'eye-slash',
  };
  handleLogin = () => {
    const {email, password} = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({errorMessage: error.message}));
  };

  toggleSwitch = () => {
    this.state.icon !== 'eye-slash'
      ? this.setState({showPassword: true, icon: 'eye-slash'})
      : this.setState({showPassword: false, icon: 'eye'});
  };
  render() {
    return (
      <SafeAreaView style={styles.fullscreen}>
        <KeyboardAvoidingView style={styles.fullscreen} behavior="height">
          <View style={styles.container}>
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
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <LabeledInput
              name={this.state.icon}
              onpress={this.toggleSwitch}
              label="Mot de passe"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry={this.state.showPassword}
              onChangeText={password => this.setState({password})}
              value={this.state.password}
            />
            <Button title="Se Connecter" onPress={this.handleLogin} />
            <Text
              style={styles.textBleu}
              onPress={() => this.props.navigation.navigate('Register')}>
              {' '}
              Créer un compte ici
            </Text>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textBleu: {
    color: 'blue',
  },
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
