import React, {Component} from 'react';
import {StyleSheet, View, Button, Text} from 'react-native';
import LabeledInput from '../../components/LabeledInput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AddDevice extends Component {
  state = {
    name: '',
    icon: '',
    error: null,
  };

  styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    inputGroup: {
      height: 200,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

  onSave = async () => {
    let room = this.props.navigation.state.params.room;

    if (Icon.hasIcon(this.state.icon)) {
      await room.ref
        .collection('devices')
        .doc()
        .set({name: this.state.name, icon: this.state.icon});
      this.props.navigation.pop();
    } else {
      this.setState({error: "Cette icone n'existe pas"});
    }
  };

  render() {
    return (
      <View style={this.styles.container}>
        <View style={this.styles.inputGroup}>
          <LabeledInput
            label="Name"
            textContentType="none"
            autoCapitalize="none"
            onChangeText={name => this.setState({name})}
            value={this.state.name}
          />
          <LabeledInput
            label="Icon"
            textContentType="none"
            autoCapitalize="none"
            onChangeText={icon => this.setState({icon})}
            value={this.state.icon}
          />
          <Text style={{color: 'red'}}>
            {this.state.error && this.state.error}
          </Text>
        </View>
        <Button title="Enregistrer" onPress={this.onSave} />
      </View>
    );
  }
}
