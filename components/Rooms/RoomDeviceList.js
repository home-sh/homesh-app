import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import DeviceButton from '../Device/DeviceButton';

export default class RoomDeviceList extends Component {
  constructor(props) {
    super(props);
  }

  renderIcons() {
    let {devices} = this.props;
    let icons = this.props.devices.map((device, index) => {
      if (index < 5) {
        return (
          <View key={index} style={styles.viewStyle}>
            <DeviceButton
              iconName={device.data().icon}
              iconSize={15}
              navigation={this.props.navigation}
            />
          </View>
        );
      } else {
        return null;
      }
    });
    if (devices.length > 5) {
      icons[4] = (
        <View style={styles.viewStyle}>
          <DeviceButton
            deviceName={`${devices.length - 5}+`}
            navigation={this.props.navigation}
          />
        </View>
      );
    }
    return icons;
  }

  render() {
    return (
      <View>
        <View horizontal style={styles.favorisFlex}>
          {this.renderIcons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorisFlex: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  viewStyle: {
    width: '100%',
    height: '100%',
    marginHorizontal: 2,
  },
});
