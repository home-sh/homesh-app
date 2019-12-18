import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import DeviceList from '../../components/Device/DevicesList';

export default class RoomPage extends Component {
  render() {
    return (
      <ScrollView>
        <DeviceList />
      </ScrollView>
    );
  }
}
