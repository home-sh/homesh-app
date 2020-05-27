import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import DeviceList from '../../components/Device/DevicesList';

export default class RoomPage extends Component {
  render() {
    return (
      // <ScrollView styles={styles.scroll}>
      <DeviceList navigation={this.props.navigation} />
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
});
