import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default class LabeledInput extends Component {
  render() {
    const {label, ...props} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.label}> {label || 'Label'} </Text>
        <TextInput style={styles.input} {...props}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 0.25,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
});
