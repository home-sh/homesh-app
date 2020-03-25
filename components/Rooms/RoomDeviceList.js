import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import DeviceButton from '../Device/DeviceButton';

export default class RoomDeviceList extends Component {
  constructor(props) {
    super(props);
  }

  renderIcons() {
    let {devices} = this.props;
    let icons = devices.map((device, index) => {
      console.log(device);
      if (index < 5) {
        return (
          <View key={index} style={styles.viewStyle}>
            <DeviceButton
              icon={device.icon}
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
            title={`${devices.length - 5}+`}
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  viewStyle: {
    width: 20,
    height: 20,
    marginHorizontal: 2,
  },
});
