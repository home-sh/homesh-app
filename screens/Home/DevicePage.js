import React, {Component} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class DevicePage extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('device').data().name,
      headerRight: () => (
        <Icon
          name={navigation.getParam('favorite') ? 'star' : 'star-outline'}
          onPress={navigation.getParam('toggleFavorite')}
          size={30}
          style={styles.icon}
        />
      ),
    };
  };

  device = this.props.navigation.getParam('device');

  componentDidMount() {
    this.props.navigation.setParams({favorite: this.device.data().favorite});
    this.props.navigation.setParams({toggleFavorite: this.toggleFavorite});
  }

  toggleFavorite = async () => {
    this.props.navigation.setParams({favorite: !this.device.data().favorite});
    await this.device.ref.set(
      {favorite: !this.device.data().favorite},
      {merge: true},
    );
  };

  render() {
    return <View style={styles.deviceHeader} />;
  }
}

const styles = StyleSheet.create({
  deviceHeader: {
    marginVertical: 25,
    marginHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deviceTitle: {
    fontWeight: '600',
    fontSize: 25,
    fontFamily: 'LexendDeca-Regular',
  },
});
