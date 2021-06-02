import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PassHomeComponent from '../../Components/Pass/PassHomeComponent';
export default class PassHomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      Event:'bada wala event',
      Date:'28 aug 2020',
      Day:'mon',
      Time:'2:05am',
      Name:'pramod',
      Mobile:'1234567890',
      Age:'21',
      Pass:'252525',
      Eventvenue:'17th cross  malleshwaram ',
      Totalbill:'500'
    };
  }
  
  navigatetoScanQRCodeContainer = () => {
    this.props.navigation.navigate('ScanQRCodeContainer');
  };

  navigatetoNotificationComponent = () => {
    this.props.navigation.navigate('NotificationContainer');
  };
 

   // handle Event

   handleEvent=(text)=>{
    this.setState({Event:text})
  };
  // handle Date
  handleDate=(text)=>{
    this.setState({Date:text})
  };
  // handle day
  handleDay=(text)=>{
    this.setState({Day:text})
  };
  // handle Time
  handleTime=(text)=>{
    this.setState({Time:text})
  };
  // handle Name
  handleName=(text)=>{
    this.setState({Name:text})
  };
   // handle mobile number
   handleMobile=(text)=>{
    this.setState({Mobile:text})
  };
   // handle age
   handleAge=(text)=>{
    this.setState({Age:text})
  };
  
   // handle pass
   handlePass=(text)=>{
    this.setState({Pass:text})
  };
   // handle Eventvenue
   handleEventvenue=(text)=>{
    this.setState({Eventvenue:text})
  };
   // handle Total bill
   handleTotalbill=(text)=>{
    this.setState({Totalbill:text})
  };
  
  render() {
    return (
      <PassHomeComponent
      
      navigatetoNotificationComponent={this.navigatetoNotificationComponent}
      navigatetoScanQRCodeContainer={this.navigatetoScanQRCodeContainer}
      //border color
      isShowingcolor={this.state.isShowingcolor}

      //green-signal
      showmessage={this.state.showmessage}

      //Event
      Event={this.state.Event}
      handleEvent={(text)=>this. handleEvent(text)}

      //Date
      Date={this.state.Date}
      handleDate={(text)=>this.handleDate(text)}

      //day
      Day={this.state.Day}
      handleDay={(text)=>this.handleDay(text)}

      //time
      Time={this.state.Time}
      handleTime={(text)=>this.handleTime(text)}

      //Name
      Name={this.state.Name}
      handleName={(text)=>this.handleName(text)}

       //Mobile
       Mobile={this.state.Mobile}
       handleMobile={(text)=>this.handleMobile(text)}

        //age
      Age={this.state.Age}
      handleAge={(text)=>this.handleAge(text)}

       //pass
       Pass={this.state.Pass}
       handlePass={(text)=>this.handlePass(text)}

        //event venue
        Eventvenue={this.state.Eventvenue}
        handleEventvenue={(text)=>this.handleEventvenue(text)}

         //event venue
         Totalbill={this.state.Totalbill}
         handleTotalbill={(text)=>this.handleTotalbill(text)}
      />
    );
  }
}