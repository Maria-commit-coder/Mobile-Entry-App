import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import AccountSettingComponent from '../../Components/Home/AccountSettingComponent';
export default class AccountSettingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch:true,
      language:'',
      isModalLanguageVisible: false,
    };
  }

  switchChange=()=>{
    this.setState({switch: !this.state.switch})
  }
  
  handleLanguageChange=(item)=>{
    this.setState({language:item})
  }

  toggleModalLanguage = () => {
    this.setState({ isModalLanguageVisible: !this.state.isModalLanguageVisible });
  }

  deleteAccount=()=>{
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account?',
      [
       
        {text:"NO",onPress:()=>console.warn('Your account has not been deleted')},
        {text:"YES",onPress:()=>console.warn('Your account has been deleted')},
      ],
      {cancelable:false},
    );
  }

  render() {
    return (
      <AccountSettingComponent
      switch={this.state.switch}
      language={this.state.language}
      isModalLanguageVisible={this.state.isModalLanguageVisible}
      switchChange={this.switchChange}
      deleteAccount={this.deleteAccount}
      handleLanguageChange={this.handleLanguageChange}
      toggleModalLanguage={this.toggleModalLanguage}
      />
    );
  }
}