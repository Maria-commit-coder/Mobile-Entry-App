import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PassVerifyComponent from '../../Components/Pass/PassVerifyComponent';
export default class PassVerifyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PassVerifyComponent/>
    );
  }
}
