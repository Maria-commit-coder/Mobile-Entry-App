import React, { Component } from 'react';
import { BackHandler,ToastAndroid, Text}  from 'react-native';
import Toast from 'native-base';
import HomeNavigation from '../Home/HomeNavigation';
var countryJSON=require('./ContryCode.json');
import SignUpVerifyComponent from '../../Components/SignUp/SignUpVerifyComponent';
export default class SignUpVerifyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalEmailVisible: false,
      isModalPhoneVisible:false,
      isModalOtpVisible:false,
      checked: '',
      code:'+91',
      otp:'',
      email:this.props.navigation.getParam('Email'),
      phoneno:this.props.navigation.getParam('PhoneNo'),
      Pvalue:countryJSON,
      initialPosition: 0,
      mobileNo:'',
      showToast:false,
      verifyEmail:false,
      hidden:false,
      name1:"times-circle",
      text1:'Email not verified!',
      color1:'red',
      emailvarified:true,

    };
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentWillMount() {
        
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({text1:'Email verified!'})
      this.setState({name1:"check-circle"})
      this.setState({color1:"green"})
      this.setState({emailvarified:false})
      this.setState({initialPosition:1})
      
      }, 10000);
  }


  handleBackButtonClick() {
    this.props.navigation.navigate('SignUpContainer');
    return true;
  }
  chooseSomething=()=>{
   
      this.toggleModalEmail();
    } 
    chooseSomething1=()=>{
    
    this.toggleModalPhone(); 
  }

  
  toggleModalEmail = () => {
   
    this.setState({ isModalEmailVisible: !this.state.isModalEmailVisible });
   
  };
 
  CheckEmailInput = () => {
    const emailv = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(this.state.email == '')
    {
      ToastAndroid.show('Please enter an email', ToastAndroid.SHORT);          
    }
    else if(emailv.test(this.state.email) === false)
    {
      ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
    }
    else{
      ToastAndroid.show('A link has been sent to ' + (this.state.email) + ' to verify your account.', ToastAndroid.LONG);
      this.navigatetoBack();
    }
  }

 
  CheckPhoneInput = () => {
    if(this.state.phoneno == '')
    {
      ToastAndroid.show('Please enter a phone number', ToastAndroid.SHORT);       
    }
    else if(this.state.phoneno.length!=10)
    {
      ToastAndroid.show('Please enter a valid phone number', ToastAndroid.SHORT);
    }
    else if(this.state.code=='')
    {
      ToastAndroid.show('Please select Country code!', ToastAndroid.SHORT); 
    }
    else{
     this.setState({mobileNo:this.state.code+' '+this.state.phoneno})
      this.toggleModalOtp();
    }
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
      ToastAndroid.show('Verification SUCCESS!', ToastAndroid.SHORT); 
      this.navigatetoLogin();
    }
  }
  toggleModalPhone = () => {
    this.setState({ isModalPhoneVisible: !this.state.isModalPhoneVisible });
    this.setState({isModalOtpVisible:false});
    this.setState({phoneno:''});
  };
  
  toggleModalOtp = () => {
    this.setState({ isModalPhoneVisible: false});
    this.setState({ isModalOtpVisible: !this.state.isModalOtpVisible });
  };
handlePvalueChange=(value)=>{
  this.setState({Pvalue:value})
}
handleEmailChange=(text)=>{
  this.setState({email:text})
}
clearOtp=()=>{
  this.setState({otp:''})
}
onCodeChange=(item)=>{
  this.setState({code:item})
}
handlePhoneChange=(text)=>{
  this.setState({phoneno:text})

}
_toastWithDurationHandler=()=>{
  //function to make Toast With Duration
  ToastAndroid.show('Enter valid EmailID and try again!', ToastAndroid.SHORT);
}
otpInput=(item)=>{
  this.setState({otp:item})
}
handleOtpChange=(text)=>{
  this.setState({otp:text})
}
  navigatetoHomeNavigation = () => {
    this.props.navigation.navigate('HomeNavigation');
  };
  navigatetoLogin = () => {
    this.props.navigation.navigate('LoginContainer');
    this.setState({isModalEmailVisible: false});
    this.setState({isModalOtpVisible: false});
  };
  navigatetoSignUp = () => {
    this.props.navigation.navigate('SignUpContainer');
  };
  navigatetoBack = () => {
    // this.props.navigation.navigate('SignUpVerificationContainer');
    this.setState({isModalEmailVisible:false})
    this.setState({initialPosition:1})
  };
  handleSnapToItem(index){
    this.onNextPage(index);
  }

  resendLink=()=>{
    ToastAndroid.show('A link has been sent to ' + (this.state.email) + ' to verify your account.', ToastAndroid.LONG);
  }
  render() {
    return (
      
      <SignUpVerifyComponent
      navigatetoLogin={this.navigatetoLogin}
      navigatetoSignUp={this.navigatetoSignUp}
      navigatetoBack={this.navigatetoBack}
      navigatetoHomeNavigation={this.navigatetoHomeNavigation}
      _toastWithDurationHandler={this._toastWithDurationHandler}
      checked={this.state.checked}
      Pvalue={this.state.Pvalue}
      otp={this.state.otp}
      initialPosition={this.state.initialPosition}
      email={this.state.email}
      phoneno={this.state.phoneno}
      mobileNo={this.state.mobileNo}
      otpInput={(item)=>this.otpInput(item)}
      clearOtp={this.clearOtp}
      CheckEmailInput={this.CheckEmailInput}
      CheckPhoneInput={this.CheckPhoneInput}
      CheckOtpInput={this.CheckOtpInput}
      handlePvalueChange={(value)=>this.handlePvalueChange(value)}
      handleEmailChange={(text)=>this.handleEmailChange(text)}
      handlePhoneChange={(text)=>this.handlePhoneChange(text)}
      handleOtpChange={(text)=>this.handleOtpChange(text)}
      chooseSomething={()=>this.chooseSomething()}
      chooseSomething1={()=>this.chooseSomething1()}
      isModalPhoneVisible={this.state.isModalPhoneVisible}
      isModalEmailVisible={this.state.isModalEmailVisible}
      isModalOtpVisible={this.state.isModalOtpVisible}
      verifyEmail={this.state.verifyEmail}
      toggleModalEmail={this.toggleModalEmail}
      code={this.state.code}
      onCodeChange={(item)=>this.onCodeChange(item)}
      toggleModalOtp={this.toggleModalOtp}
      toggleModalPhone={this.toggleModalPhone}
      name1={this.state.name1}
      text1={this.state.text1}
      color1={this.state.color1}
      emailvarified={this.state.emailvarified}
      resendLink={this.resendLink}
      />
    );
  }
}