import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


class TabIcon extends Component {
  render() {
    const color = this.props.tintColor;
    return (
      <Icon name={this.props.iconName} size={28} color={color} />
    );
  }
}

export default TabIcon;
