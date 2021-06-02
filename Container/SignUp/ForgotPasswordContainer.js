import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
var countryJSON=require('./ContryCode.json');
import ForgotPasswordComponent from '../../Components/SignUp/ForgotPasswordComponent';

export default class ForgotPasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalEmailVisible: false,
      isModalPhoneVisible: false,
      isModalOtpVisible: false,
      isModalPasswordVisible: false,
      checked: '',
      Pvalue:countryJSON,
      code:'+91',     
      otp:'', 
      email:'',
      phone:'',
      password:'',
      cpassword:'',
      mobileNo:'',
      hidden1:true,
      hidden2:true
    };
  }
 
  navigatetoLogin = () => {
    this.props.navigation.navigate('LoginContainer');
    this.setState({isModalEmailVisible: false});
    this.setState({isModalPasswordVisible: false});
  };

//  chooseSomething=(checked)=>{
//   this.setState({checked:checked}) 
//   if(checked == 'Email'){
//     this.toggleModalEmail();
//   } 
//   if(checked == 'PhoneNumber') {
//     this.toggleModalPhone();
//   }
// }

toggleModalEmail = () => {
  this.setState({ isModalEmailVisible: !this.state.isModalEmailVisible });
}

toggleModalPhone = () => {
  this.setState({ isModalPhoneVisible: !this.state.isModalPhoneVisible });
  this.setState({ isModalOtpVisible: false });
  this.setState({ phone: ''});
}

toggleModalOtp = () => {
  this.setState({ isModalPhoneVisible: false });
  this.setState({ isModalOtpVisible: !this.state.isModalOtpVisible });
  this.setState({otp:''});
}

toggleModalPassword = () => {
  this.setState({ isModalOtpVisible: false });
  this.setState({ isModalPasswordVisible: !this.state.isModalPasswordVisible });
}

onCodeChange=(item) => {
  this.setState({code: item})
  }

  otpInput=(item)=>{
    this.setState({otp:item})
  }

  handleEmailChange=(text)=>{
    this.setState({email:text})
  }

  CheckEmailInput = () => {
    const emailv = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.state.email == '')
    {
      ToastAndroid.show('Please enter an email', ToastAndroid.SHORT);          
    }
    else if(emailv.test(this.state.email) === false)
    {
      ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show('A link has been sent to ' + (this.state.email) + ' to reset your password.', ToastAndroid.LONG);
      this.navigatetoLogin();
    }
  }

  handlePhoneChange=(text)=>{
    this.setState({phone:text})
  }

  CheckPhoneInput = () => {
    if(this.state.phone == '')
    {
      ToastAndroid.show('Please enter a phone number', ToastAndroid.SHORT);       
    }
    else if(this.state.phone.length!=10)
    {
      ToastAndroid.show('Please enter a valid phone number', ToastAndroid.SHORT);
    }
    else if(this.state.code=='')
    {
      ToastAndroid.show('Please select Country code', ToastAndroid.SHORT); 
    }
    else{
      this.setState({mobileNo:this.state.code+' '+this.state.phone})
      this.toggleModalOtp();
    }
  }

  clearOtp=()=>{
    this.setState({otp:''})
  }

  handleOtpChange=(text)=>{
    this.setState({otp:text})
  }

  CheckOtpInput = () => {
    if(this.state.otp == '')
    {
      ToastAndroid.show('OTP cannot be empty!', ToastAndroid.SHORT);       
    }
    else if(this.state.otp.length!=6)
    {
      ToastAndroid.show('Please enter a valid OTP', ToastAndroid.SHORT);
    }
    else{
      this.toggleModalPassword();
    }
  }

  handlePasswordChange=(text)=>{
    if(text.length==3)
    {
      ToastAndroid.show('Password too short', 1);
    }
    else if(text.length==12)
    {
      ToastAndroid.show('Password too long', 1);
    }
    else
    {     
      this.setState({password:text})
    }
  }

  handlePassword1Change=(text)=>{
    this.setState({cpassword:text})
  }

  CheckPasswordInput = () => {
    if(this.state.password=='' || this.state.cpassword=='')
    {
      ToastAndroid.show('Password cannot be empty', ToastAndroid.SHORT);
    }     
    else if(this.state.password!=this.state.cpassword)
    {
      ToastAndroid.show('Password does not match!', ToastAndroid.SHORT);       
    }
    else{
      ToastAndroid.show('Password reset successfully!', ToastAndroid.SHORT);
      this.navigatetoLogin();
    }
  }

  onInputLabel1Pressed=() => {   
    this.setState({ hidden1:!this.state.hidden1 });
  }

  onInputLabel2Pressed=() => {   
    this.setState({ hidden2:!this.state.hidden2 });
  }

  render() {
    return (
      <ForgotPasswordComponent
      navigatetoLogin={this.navigatetoLogin}
      checked={this.state.checked}
      Pvalue={this.state.Pvalue}
      code={this.state.code}
      otp={this.state.otp}
      mobileNo={this.state.mobileNo}
      email={this.state.email}
      phone={this.state.phone}
      password={this.state.password}
      cpassword={this.state.cpassword}
      hidden1={this.state.hidden1}
      hidden2={this.state.hidden2}
      isModalEmailVisible={this.state.isModalEmailVisible}
      isModalPhoneVisible={this.state.isModalPhoneVisible}
      isModalOtpVisible={this.state.isModalOtpVisible}
      isModalPasswordVisible={this.state.isModalPasswordVisible}
      toggleModalEmail={this.toggleModalEmail}
      toggleModalPhone={this.toggleModalPhone}
      toggleModalOtp={this.toggleModalOtp}
      toggleModalPassword={this.toggleModalPassword}     
      chooseSomething={(value)=>this.chooseSomething(value)}
      onCodeChange={(item)=>this.onCodeChange(item)}      
      otpInput={(item)=>this.otpInput(item)}     
      CheckEmailInput={this.CheckEmailInput}
      handleEmailChange={(text)=>this.handleEmailChange(text)}      
      CheckPhoneInput={this.CheckPhoneInput}
      handlePhoneChange={(text)=>this.handlePhoneChange(text)}
      CheckOtpInput={this.CheckOtpInput}
      handleOtpChange={(text)=>this.handleOtpChange(text)}     
      handlePasswordChange={(text)=>this.handlePasswordChange(text)}
      handlePassword1Change={(text)=>this.handlePassword1Change(text)}
      CheckPasswordInput={this.CheckPasswordInput}
      clearOtp={this.clearOtp}     
      onInputLabel1Pressed={this.onInputLabel1Pressed}
      onInputLabel2Pressed={this.onInputLabel2Pressed}
      />
    );
  }
}