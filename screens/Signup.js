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
import LabeledInput from '../components/LabeledInput';

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail(email) {
    this.setState({email});
  }

  onChangePassword(password) {
    this.setState({password});
  }

  render() {
    let {email, password} = this.state;
    return (
      <SafeAreaView style={styles.fullscreen}>
        <KeyboardAvoidingView style={styles.fullscreen} behavior="height">
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require('../assets/images/homesh-icon.png')}
            />
            <Text style={styles.title}>Connexion</Text>
            <LabeledInput
              label="Email"
              onChangeText={text => this.onChangeEmail(text)}
              value={email}
            />
            <LabeledInput
              label="Mot de passe"
              onChangeText={text => this.onChangePassword(text)}
              value={password}
            />
            <Button title="Se Connecter" />
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
