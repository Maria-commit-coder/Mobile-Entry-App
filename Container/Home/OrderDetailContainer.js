import React, { Component } from 'react';
import { View, Text } from 'react-native';
import OrderDetailComponent from '../../Components/Home/OrderDetailComponent';
export default class OrderDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Order_Number:'1',
      Event_Name:'Reva Fest',
      Order_Date:'28/10/2020',
      Price:'2000',
      Phone_number:'7090857252',
      Adress:'malleshwaram',
      Email:'adihptham@gmail.com'
    };
  }
  // handle order number
  handleOrderNumber=(text)=>{
    this.setState({ Order_Number:text})
  };
  // handle event name
  handleEventName=(text)=>{
    this.setState({Event_Name:text})
  };
  // handle order date
  handleOrderDate=(text)=>{
    this.setState({Order_Date:text})
  };
  // handle price
  handlePrice=(text)=>{
    this.setState({Price:text})
  };
   // handle phonenmber
   handlePhonenumber=(text)=>{
    this.setState({Phone_number:text})
  };
 // handle adress
 handleAdress=(text)=>{
  this.setState({Adress:text})
};
 // handle Email
 handleEmail=(text)=>{
  this.setState({Email:text})
};

  // to nagivate to view details screen
  navigatetoOrderDetail= () => {
    this.props.navigation.navigate('OrderDetailContainer');
  };
  

  render() {
    return (
      <OrderDetailComponent

      //nagivate to view details
      navigatetoOrderDetail={this.navigatetoOrderDetail}

      // order number
      Order_Number={this.state.Order_Number}
      handleOrderNumber={(text)=>this.handleOrderNumber(text)}

      // event name
      Event_Name={this.state.Event_Name}
      handleEventName={(text)=>this.handleEventName(text)}

      // order date
      Order_Date={this.state.Order_Date}
      handleOrderDate={(text)=>this.handleOrderDate(text)}

      // price
      Price={this.state.Price}
      handlePrice={(text)=>this.handlePrice(text)}

      //Phone number
      Phone_number={this.state.Phone_number}
      handlePhonenumber={(text)=>this.handlePhonenumber(text)}

       //Adress
       Adress={this.state.Adress}
       handleAdress={(text)=>this.handleAdress(text)}

        //Email
        Email={this.state.Email}
        handleEmail={(text)=>this.handleEmail(text)}
      />
      
    );
  }
}