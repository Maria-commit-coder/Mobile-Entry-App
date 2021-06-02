import React, { Component } from 'react';
import { View, Text,ToastAndroid } from 'react-native';
import EditProfileComponent from '../../Components/Home/EditProfileComponent';
export default class EditProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname:'Pooja',
      mname:' ',
      lname:'Polampalli',
      phone:'+91-7795213524',
      email:'poojapolampalli14@gmail.com',
      address:'bangalore',
      dob:'14-11-1998',
    };
  }
  navigatetoProfile=()=>{
    this.props.navigation.navigate('ProfileContainer');
  }
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
  selectAddress=()=>{
    ToastAndroid.show('Current Address chosen', ToastAndroid.SHORT);
  }


 
 
 CheckTextInput = () => {    
  const emailv = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (this.state.fname == '') 
  {
    ToastAndroid.show('Please enter First Name', ToastAndroid.SHORT);
  }
    else if (this.state.mname == '') 
    {       
      ToastAndroid.show('Please enter Middle Name', ToastAndroid.SHORT);       
    } 
    else if (this.state.lname == '') 
    {       
      ToastAndroid.show('Please enter Last Name', ToastAndroid.SHORT);       
    } 
    else if (this.state.phone == '')
    {
      ToastAndroid.show('Please enter Phone Number', ToastAndroid.SHORT);
    }
    else if (this.state.phone.length!=14)
    {
      ToastAndroid.show('Please enter a valid Phone Number', ToastAndroid.SHORT);
    }
    else if (this.state.email == '')
    {
      ToastAndroid.show('Please enter email', ToastAndroid.SHORT);
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
    else
    { ToastAndroid.show('Details saved successfully', ToastAndroid.SHORT)
    this.navigatetoProfile();
  }
  }
   

  render() {
    return (
      <EditProfileComponent
      navigatetoProfile={this.navigatetoProfile}
      fname={this.state.fname}
      mname={this.state.mname}
      lname={this.state.lname}
      phone={this.state.phone}
      email={this.state.email}
      address={this.state.address}
      dob={this.state.dob}
      handleFnameChange={(text)=>this.handleFnameChange(text)}
      handleMnameChange={(text)=>this.handleMnameChange(text)}
      handleLnameChange={(text)=>this.handleLnameChange(text)}
      handlePhoneChange={(text)=>this.handlePhoneChange(text)}
      handleEmailChange={(text)=>this.handleEmailChange(text)}
      handleAddressChange={(text)=>this.handleAddressChange(text)}
      handleDateChange={(date)=>this.handleDateChange(date)}
      selectAddress={this.selectAddress}
      CheckTextInput={()=>this.CheckTextInput()}
     />
    );
  }
}