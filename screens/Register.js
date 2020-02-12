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

export default class Register extends Component {
  state = {email: '', password: '', confirmedPassword:'',errorMessage: null,error:null};
  handleLogin = () => {
    if(this.state.confirmedPassword === this.state.password) {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.state.email, this.state.password)
          .then(() => this.props.navigation.navigate('App'))
          .catch(error => this.setState({errorMessage: error.message}));
    } else {
      this.setState({errorMessage:'Mots de passe non identiques'});
    }

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
            <Text style={styles.title}>Inscription</Text>
            {this.state.errorMessage && (
                <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
            )}
            <LabeledInput
              label="Email"
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <LabeledInput
              label="Mot de passe"
              onChangeText={password => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true}
            />
            <LabeledInput
                label="Confirmation Mot de passe"
                onChangeText={confirmedPassword => this.setState({confirmedPassword})}
                value={this.state.confirmedPassword}
                secureTextEntry={true}
            />
            <Button title="Créer un compte" onPress={this.handleLogin} />
            <Button style={{color: 'white'}}
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
