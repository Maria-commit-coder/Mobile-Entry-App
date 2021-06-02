import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventDetailsComponent from '../../Components/Events/EventDetailsComponent';
import BuyPassComponent from '../../Components/Pass/BuyPassComponent';

export default class EventDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,

    };
  }

  navigatetoBuyPassContainer = () => {
    this.props.navigation.navigate('BuyPassContainer');
  };

  navigatetoEventHomeContainer = () => {
    this.props.navigation.navigate('EventHomeContainer');
  };

  navigatetoEventContainer = () => {
    this.props.navigation.navigate('EventContainer');
  };

  setModalVisible=() =>{
    this.setState({modalVisible: !this.state.modalVisible});
    
  }


  render() {
    return (
      <EventDetailsComponent
      setModalVisible={this.setModalVisible}
      modalVisible={this.state.modalVisible}
      navigatetoEventHomeContainer={this.navigatetoEventHomeContainer}
      navigatetoEventContainer={this.navigatetoEventContainer}
      navigatetoBuyPassContainer={this.navigatetoBuyPassContainer}/>
      
    );
  }
}