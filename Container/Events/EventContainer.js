import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventComponent from '../../Components/Events/EventComponent';
export default class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
 navigatetoEventHomeContainer = () => {
    this.props.navigation.navigate('EventHomeContainer');
  };

  navigatetoEventDetailsContainer = () => {
    this.props.navigation.navigate('EventDetailsContainer');
  };

  render() {
    return (
      <EventComponent
      navigatetoEventHomeContainer={this.navigatetoEventHomeContainer}
      navigatetoEventDetailsContainer={this.navigatetoEventDetailsContainer}/>
    );
  }
}
