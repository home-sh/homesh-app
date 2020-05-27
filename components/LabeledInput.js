import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LabeledInput extends Component {
  onChangeText(text) {
    this.props.onChangeText(text);
  }

  render() {
    const {name, label, onpress, ...props} = this.props;
    let icon;
    let style = {
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
    };
    let labelStyle = {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: '600',
    };
    if (name === undefined) {
      console.log(name);
    } else {
      style = {
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
        marginLeft: 30,
      };
      labelStyle = {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: '600',
        marginLeft: 30,
      };
      icon = (
        <Icon style={styles.icon} name={name} size={20} onPress={onpress} />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={labelStyle}> {label || 'Label'} </Text>
        <View style={styles.searchSection}>
          <TextInput
            style={style}
            {...props}
            onChangeText={text => this.onChangeText(text)}
          />
          {icon}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 10,
    marginLeft: 10,
  },
  container: {
    flexDirection: 'column',
  },
  searchSection: {
    flexDirection: 'row',
  },
});
