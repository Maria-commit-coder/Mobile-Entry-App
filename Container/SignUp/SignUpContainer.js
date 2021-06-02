import React, { Component } from 'react';
import { View, Text, ToastAndroid } from 'react-native';
var countryJSON=require('./ContryCode.json');
import SignUpComponent from '../../Components/SignUp/SignUpComponent';
export default class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname:'',
      mname:'',
      lname:'',
      phone:'',
      email:'',
      address:'',
      dob:'',
      gender:'',
      password:'',
      cpassword:'',
      Pvalue:countryJSON,
      code:'+91',
      hidden1:true,
      hidden2:true
    };
  }
  navigatetoLogin = () => {
    this.props.navigation.navigate('LoginContainer');
  };

   navigatetoSignUpVerify = () => {
    this.props.navigation.navigate('SignUpVerifyContainer',{Email:this.state.email, PhoneNo:this.state.phone});
  };

  handleFnameChange=(text)=>{
    this.setState({fname:text})
  }

  handleMnameChange=(text)=>{
    this.setState({mname:text})
  }

  handleLnameChange=(text)=>{
    this.setState({lname:text})
  }

  handlePhoneChange=(text)=>{
    this.setState({phone:text})
  }

  handleEmailChange=(text)=>{
    this.setState({email:text})
  }

  handleAddressChange=(text)=>{
    this.setState({address:text})
  }

  handleDateChange=(date)=>{
    this.setState({dob: date})
  }

  handleGenderChange=(item)=>{
    this.setState({gender:item})
  }

  handlePasswordChange=(text)=>{
    if(text.length==3)
    {
      ToastAndroid.show('Password too short', ToastAndroid.SHORT);
    }
    else if(text.length==12)
    {
      ToastAndroid.show('Password too long', ToastAndroid.SHORT);
    }
    else
    {
      this.setState({password:text})
    }
  }

  handleCpasswordChange=(text)=>{
    this.setState({cpassword:text})
  }

  CheckTextInput = () => {    
    const emailv = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.fname == '') 
    {
      ToastAndroid.show('Please enter First Name', ToastAndroid.SHORT);
    }
      else if (this.state.lname == '') 
      {       
        ToastAndroid.show('Please enter Last Name', ToastAndroid.SHORT);       
      } 
      else if (this.state.phone == '')
      {
        ToastAndroid.show('Please enter Phone Number', ToastAndroid.SHORT);
      }
      else if (this.state.phone.length!=10)
      {
        ToastAndroid.show('Please enter a valid Phone Number', ToastAndroid.SHORT);
      }
      else if(this.state.code=='')
      {
        ToastAndroid.show('Please select Country code', ToastAndroid.SHORT); 
      }
      else if(this.state.email == '')
      {
        ToastAndroid.show('Please enter an Email', ToastAndroid.SHORT);
      }
      else if(emailv.test(this.state.email) === false)
      {
        ToastAndroid.show('Please enter a valid email', ToastAndroid.SHORT);
      }
      else if(this.state.address == '')
      {
        ToastAndroid.show('Please enter an Address', ToastAndroid.SHORT);
      }
      else if(this.state.dob == '')
      {
        ToastAndroid.show('Please select your DOB', ToastAndroid.SHORT);
      }
      else if(this.state.gender == '')
      {
        ToastAndroid.show('Please choose a Gender', ToastAndroid.SHORT);
      }
      else if(this.state.password == '')
      {
        ToastAndroid.show('Please enter a Password', ToastAndroid.SHORT);
      }
      else if(this.state.cpassword == '')
      {
        ToastAndroid.show('Please confirm your Password', ToastAndroid.SHORT);
      }
      else if(this.state.password!=this.state.cpassword)
      {
        ToastAndroid.show('Password does not match!', ToastAndroid.SHORT);       
      }
      else {
        this.navigatetoSignUpVerify();
      }      
    }

    cancelButton=()=> {
      this.setState({fname:''});
      this.setState({mname:''});
      this.setState({lname:''});
      this.setState({phone:''});
      this.setState({email:''});
      this.setState({address:''});
      this.setState({dob:''});
      this.setState({gender:''});
      this.setState({password:''});
      this.setState({cpassword:''});
    }

    onCodeChange=(item) => {
      this.setState({code: item})
      }

    onInputLabel1Pressed=() => {   
      this.setState({ hidden1:!this.state.hidden1 });
    }

    onInputLabel2Pressed=() => {   
      this.setState({ hidden2:!this.state.hidden2 });
    }

    selectAddress=()=>{
      ToastAndroid.show('Current Address chosen', ToastAndroid.SHORT);
    }

  render() {
    return (
      <SignUpComponent
      navigatetoLogin={this.navigatetoLogin}
      navigatetoSignUpVerify={this.navigatetoSignUpVerify}
      fname={this.state.fname}
      mname={this.state.mname}
      lname={this.state.lname}
      phone={this.state.phone}
      email={this.state.email}
      address={this.state.address}
      dob={this.state.dob}
      gender={this.state.gender}
      password={this.state.password}
      cpassword={this.state.cpassword}
      Pvalue={this.state.Pvalue}
      code={this.state.code}
      hidden1={this.state.hidden1}
      hidden2={this.state.hidden2}
      onInputLabel1Pressed={this.onInputLabel1Pressed}
      onInputLabel2Pressed={this.onInputLabel2Pressed}
      handleFnameChange={(text)=>this.handleFnameChange(text)}
      handleMnameChange={(text)=>this.handleMnameChange(text)}
      handleLnameChange={(text)=>this.handleLnameChange(text)}
      handlePhoneChange={(text)=>this.handlePhoneChange(text)}
      handleEmailChange={(text)=>this.handleEmailChange(text)}
      handleAddressChange={(text)=>this.handleAddressChange(text)}
      handleDateChange={(date)=>this.handleDateChange(date)}
      handleGenderChange={(item)=>this.handleGenderChange(item)}
      handlePasswordChange={(text)=>this.handlePasswordChange(text)}
      handleCpasswordChange={(text)=>this.handleCpasswordChange(text)}
      CheckTextInput={()=>this.CheckTextInput()}
      cancelButton={()=>this.cancelButton()}
      onCodeChange={(item)=>this.onCodeChange(item)}
      selectAddress={this.selectAddress}
      />
    );
  }
}