import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NotificationComponent from '../../Components/Home/NotificationComponent';

export default class NotificationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NotificationComponent/>
    );
  }
}
