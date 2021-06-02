import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BuyPassComponent from '../../Components/Pass/BuyPassComponent';
export default class BuyPassContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Date:'',
      text:'',
      name:'Sagar',
      phone:'1234567890',
      email:'abc@gmail.com',
      Day:''
    //  dateToFormat : '1976-04-19T12:59-0500'
    };
  }
  navigatetoPassComponent=()=>{
    this.props.navigation.navigate('PassContainer');
  }
  componentDidMount() {
    var that = this;
    // var day= new Day().getDay();
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hour = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var today = new Date();
    var prepand = (hour >= 12)? " PM ":" AM ";
    hour = (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
    if (min===0 && second===0)
    { 
    hour=12;
    prepand=' Noon';
    } 
    else
    { 
    hour=12;
    prepand=' PM';
    } 
    } 
    if (hour===0 && prepand===' AM ') 
    { 
    if (min===0 && second===0)
    { 
    hour=12;
    prepand=' Midnight';
    } 
    else
    { 
    hour=12;
    prepand=' AM';
    } 
    }
    
  var day = today.getDay();
  var daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
    that.setState({
      //Setting the value of the date time
      Date:
        hour + ':' + min + ':' + sec+ ''+ prepand ,
        Day:daylist[day] +' , ' +date + '/' + month + '/' + year 
    });
  }
  
  onChangeName=(text)=>{
    this.setState({name:text})
}
onChangePhone=(text)=>{
  this.setState({phone:text})
}
onChangeEmail=(text)=>{
  this.setState({email:text})
}
  
  render() {
    return (
      <BuyPassComponent
      // const dateToFormat = '1976-04-19T12:59-0500'
      Date={this.state.Date}
      navigatetoPassComponent={this.navigatetoPassComponent}
      text={this.state.text}
      name={this.state.name}
      phone={this.state.phone}
      email={this.state.email}
      onChangeName={(text)=>this.onChangeName(text)}
      onChangePhone={(text)=>this.onChangePhone(text)}
      onChangeEmail={(text)=>this.onChangeEmail(text)}
      Day={this.state.Day}
      />
    );
  }
}