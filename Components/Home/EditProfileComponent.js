import React, { Component } from 'react';
import { View, Text,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import {CardItem, Card} from 'native-base';
import DatePicker from 'react-native-datepicker';
import {Button,} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class EditProfileComponent extends Component {
  render() {
    return (
      <View>
      <ScrollView>
        
      <Card style={{width:'90%', marginLeft:'5%', marginTop:'5%'}}>
          
      <CardItem style={{backgroundColor:'rgba(189,174,198)', flexDirection:'column', alignItems:'flex-start'}}>
                
      <Text>First Name :</Text>      
       <View style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
         <TextInput
         value={this.props.fname}
         placeholder='fname'
         placeholderTextColor='#9C8AA5'
         onChangeText={this.props.handleFnameChange}>
         </TextInput>
       </View>
       
       </CardItem>

       <CardItem style={{backgroundColor:'rgba(189,174,198)',flexDirection:'column', alignItems:'flex-start'}}>
       <Text>Middle Name :</Text>
       <View style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
         <TextInput
         value={this.props.mname}
         placeholder='mname'
         placeholderTextColor='#9C8AA5'
         onChangeText={this.props.handleMnameChange}>
         </TextInput>
       </View>
       </CardItem>

       <CardItem style={{backgroundColor:'rgba(189,174,198)',flexDirection:'column', alignItems:'flex-start'}}>
       <Text>Last Name :</Text>
       <View style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
         <TextInput
         value={this.props.lname}
         placeholder='lname'
         placeholderTextColor='#9C8AA5'
         onChangeText={this.props.handleLnameChange}>
         </TextInput>
       </View>
       </CardItem>

       <CardItem style={{backgroundColor:'rgba(189,174,198)',flexDirection:'column', alignItems:'flex-start'}}>
       <Text>EMail Id :</Text>
       <View style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
         <TextInput
         value={this.props.email}
         placeholder='email'
         placeholderTextColor='#9C8AA5'
         onChangeText={this.props.handleEmailChange}>
         </TextInput>
       </View>
       </CardItem>

       <CardItem style={{backgroundColor:'rgba(189,174,198)',flexDirection:'column', alignItems:'flex-start'}}>
       <Text>Phone Number :</Text>
       <View style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
         <TextInput
         value={this.props.phone}
         placeholder='phone no'
         placeholderTextColor='#9C8AA5'
         onChangeText={this.props.handlePhoneChange}>
         </TextInput>
       </View>
       </CardItem>

          <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
          <Text>DOB :</Text>
           <DatePicker 
           value={this.props.dob}
        style={{height:40, borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}
        date={this.props.dob}
        mode="date"
        placeholder="DOB"
        format="DD-MM-YYYY"
        minDate="1950-01-01"
        maxDate="2021-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => this.props.handleDateChange(date)}
      /> 
      </CardItem>

        <CardItem style={{flexDirection:'column', alignItems:'flex-start'}}>
        <Text>Location :</Text>
      <View style={{flexDirection:'row',heigth:40,borderColor:'black', borderWidth:1, width:'100%',marginTop:'2%'}}>
              <TextInput
              value={this.props.address}
              placeholder='Enter your Home Address'
              padding={5}
              multiline={true}
              numberOfLines={2}
              placeholderTextColor="#9C8AA5"            
              style={{fontSize:15, color:'black', width:'80%',height:40}}
              onChangeText={(text)=>this.props.handleAddressChange(text)}
              ></TextInput> 
              <TouchableOpacity onPress={this.props.selectAddress}>
              <Icon name='map-marker' size={20} style={{color:'#9C8AA5', marginTop:"8%", marginLeft:'30%'}}/>
              </TouchableOpacity>
              </View>
              </CardItem>
      

        <CardItem>
        <Button 
        onPress={this.props.CheckTextInput}        
        style={{backgroundColor:'#732C7B', borderRadius:19, width:'40%', marginLeft:'30%'}}>
        <Text style={{color:'white'}}>Save</Text>
        </Button>
        </CardItem>
        </Card>
        
        </ScrollView>
        </View>
    );
  }
}