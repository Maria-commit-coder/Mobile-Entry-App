import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PassComponent from '../../Components/Pass/PassComponent';
export default class PassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <PassComponent/>
    );
  }
}
