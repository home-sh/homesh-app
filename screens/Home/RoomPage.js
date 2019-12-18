import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
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

const styles = StyleSheet.create({});
