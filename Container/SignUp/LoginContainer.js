import React, { Component } from 'react';
import { View,Alert,Keyboard } from 'react-native';
import LoginComponent from '../../Components/SignUp/LoginComponent';
import HomeNavigation from '../Home/HomeNavigation';
import { Text,Toast } from "native-base";
var countryJSON=require('./ContryCode.json')
export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phonenumb:'',
      hidden:true,
      password:'',
      showToast: false,
      Pvalue:countryJSON,
      code:'+91',
      ButtonStateHolder:false,
    }
  }
  
  navigatetoSignUp = () => {
    this.props.navigation.navigate('SignUpContainer');
  };

   navigatetoForgotPassword = () => {
    this.props.navigation.navigate('ForgotPasswordContainer');
  };

  navigatetoHomeNavigation = () => {
    this.props.navigation.navigate('HomeNavigation');
  };
  _onSubmit() {
    const { username, password } = this.state;
    Alert.alert('Button has been pressed!');
  };
  handlePhonenumber=(text)=>{

    this.setState({phonenumb:text})
  };
  handlePassword=(text)=>{
    
    this.setState({password:text})
    
  };
  onInputLabelPressed=() => {
    this.setState({ hidden:!this.state.hidden });
  };
  onCodeChange=(item) => {
    this.setState({code: item})
  };
  DisableButtonFunction=() => {
    this.setState({ButtonStateHolder:!this.state.ButtonStateHolder})
  };
  myFun=() =>{

    const {phonenumb,password} = this.state;

    if(phonenumb==""){
      Toast.show({
        text: "Please fill the Phone Number!",
        type: "danger",
        textStyle: { textAlign:'center' },
        position: "bottom",
        duration: 2000,
      })

    }else if(phonenumb.length < 10){

      Toast.show({
        text: "Please enter all 10 digits!",
        type: "danger",
        textStyle: { textAlign:'center' },
        position: "bottom",
        duration: 2000,
      })
      }
      // else if(this.state.code=='')
      // {
      //   Toast.show({
      //     text: "Please select Country code",
      //     type: "danger",
      //     textStyle: { textAlign:'center' },
      //     position: "bottom",
      //     duration: 2000,
      //   })
      // }
    else if(password==""){
      Toast.show({
        text: "Please fill the Password!",
        type: "danger",
        textStyle: { textAlign:'center' },
        position: "bottom",
        duration: 2000,
      })
    }
    else {
      this.navigatetoHomeNavigation();
      Toast.show({
        text: "Login successful",
        textStyle: { textAlign:'center' },
        type: "success",
        position: "top",
        duration: 2000,
      })

    }
  
    Keyboard.dismiss();
  }
  

  render() {
   
    return (
      <LoginComponent
      navigatetoSignUp={this.navigatetoSignUp}
      navigatetoForgotPassword={this.navigatetoForgotPassword}
      navigatetoHomeNavigation={this.navigatetoHomeNavigation}

      _onSubmit={()=>this._onSubmit()}
      
      PhoneNumber={this.state.PhoneNumber}
      handlePhonenumber={(text)=>this.handlePhonenumber(text)}

      Password={this.state.Password}
      handlePassword={(text)=>this.handlePassword(text)}

      hidden={this.state.hidden}
      onInputLabelPressed={this.onInputLabelPressed}
      
      myFun={this.myFun}

      code={this.state.code}
      Pvalue={this.state.Pvalue}
      onCodeChange={(item)=>this.onCodeChange(item)}

      ButtonStateHolder={this.state.ButtonStateHolder}
      DisableButtonFunction={this.DisableButtonFunction}

      />
      
    );
  }
}