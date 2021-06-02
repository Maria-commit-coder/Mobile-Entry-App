import React, { Component } from 'react';
import { View, Text,Alert } from 'react-native';
import ProfileComponent from '../../Components/Home/ProfileComponent';
export default class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
 
  navigatetoEditProfile = () => {
    this.props.navigation.navigate('EditProfileContainer');
  };
  navigatetoNotificationComponent = () => {
    this.props.navigation.navigate('NotificationContainer');
  };
  navigatetoOrderHistory= () => {
    this.props.navigation.navigate('OrderHistoryContainer');
  };
  navigatetoSupport= () => {
    this.props.navigation.navigate('SupportContainer');
  };
  
  navigatetoAccountSetting= () => {
    this.props.navigation.navigate('AccountSettingContainer');
  };

  navigatetoOrderDetail= () => {
    this.props.navigation.navigate('OrderDetailContainer');
  };

  logout=()=>{
    Alert.alert(
      'Log Out',
      'Are you sure you want to logout?',
      [
       
        {text:"NO",onPress:()=>console.warn('You are not logged out')},
        {text:"YES",onPress:()=>console.warn('You are now logged out')},
      ],
      {cancelable:false},
    );
  }
  render() {
    return (
      <ProfileComponent
      
      logout={this.logout}
      navigatetoEditProfile={this.navigatetoEditProfile}
      navigatetoNotificationComponent={this.navigatetoNotificationComponent}
      navigatetoOrderHistory={this.navigatetoOrderHistory}
      navigatetoSupport={this.navigatetoSupport}
      navigatetoAccountSetting={this.navigatetoAccountSetting}
      navigatetoOrderDetail={this.navigatetoOrderDetail}
      />

    );
  }
}
