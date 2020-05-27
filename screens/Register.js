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
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: null,
    showPassword: true,
    showCPassword: true,
    icon: 'eye-slash',
    iconC: 'eye-slash',
  };
  handleLogin = () => {
    if (this.state.password === this.state.confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('App'))
        .catch(error => this.setState({errorMessage: error.message}));
    } else {
      this.setState({
        errorMessage: 'Les mots de passe doivent être identique !',
      });
    }
  };
  toggleSwitch = () => {
    this.state.icon !== 'eye-slash'
      ? this.setState({showPassword: true, icon: 'eye-slash'})
      : this.setState({showPassword: false, icon: 'eye'});
  };
  toggleSwitch2 = () => {
    this.state.iconC !== 'eye-slash'
      ? this.setState({showCPassword: true, iconC: 'eye-slash'})
      : this.setState({showCPassword: false, iconC: 'eye'});
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
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <View style={styles.passwordContainer}>
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
            </View>
            <LabeledInput
              name={this.state.iconC}
              onpress={this.toggleSwitch2}
              label="Confirmation mot de passe"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry={this.state.showCPassword}
              onChangeText={confirmPassword => this.setState({confirmPassword})}
              value={this.state.confirmPassword}
            />
            <Button title="Créer un compte" onPress={this.handleLogin} />
            <Text
              style={styles.textBleu}
              onPress={() => this.props.navigation.navigate('Signin')}>
              {' '}
              Connectez vous ici
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
