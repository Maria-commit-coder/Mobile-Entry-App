import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView,TouchableOpacity,StyleSheet,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Header, Container, Left, Body,  Content,  Picker,CardItem} from 'native-base';
import {Card} from 'react-native-paper';
import {Button, Title} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';


 
export default class SignUpComponent extends Component {
  render() {
        return (
         
          <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
          <View style={{backgroundColor:"rgba(189,174,198,0.2)",flex:1,borderWidth:2,borderColor:"white",}}>
          {/* LOGO */}
          <Image style={{height: '15%',width:'40%', resizeMode: 'contain', alignSelf: 'center'}}
          source={require('../../Assets/Images/MobileEntry.png')}/>

          {/*WELCOME-TEXT*/}
          <View style={{alignItems:'center', marginTop:'-2%'}}>
          <Text style={{color:'#732C7B', fontSize:25, fontWeight:'bold'}}>Sign Up</Text>
          <Text style={{color:'#732C7B', fontSize:18, marginTop:'2%'}}>Create an account</Text>
          </View>

          <View style={{width:'90%', marginLeft:'5%', marginTop:'5%', height:'50%',}} >
          <ScrollView>
          <Card style={{backgroundColor:'',}}>
          <Card.Content>
            
          
              {/* FISRT-NAME */}
              <TextInput
              placeholder='Enter your First Name'
              padding={5}
              placeholderTextColor="#9C8AA5"
              style={{fontSize:15, height:'7%', color:'black', borderColor:'#732C7B',borderRadius:5, borderWidth:1, marginLeft:'5%', width:'90%', marginTop:'2%',}}
              onChangeText={(text)=>this.props.handleFnameChange(text)}
              ></TextInput>       
              {/* MIDDLE-NAME */}
              <TextInput
              placeholder='Enter your Middle Name'
              padding={5}
              placeholderTextColor="#9C8AA5"
              style={{fontSize:15, height:'7%', color:'black', borderColor:'#732C7B',borderRadius:5, borderWidth:1, marginLeft:'5%', width:'90%', marginTop:'2%'}}
              onChangeText={(text)=>this.props.handleMnameChange(text)}
              ></TextInput>
              {/* LAST-NAME */}
              <TextInput
              placeholder='Enter your Last Name'
              padding={5}
              placeholderTextColor="#9C8AA5"
              style={{fontSize:15, height:'7%', color:'black', borderColor:'#732C7B',borderRadius:5, borderWidth:1, marginLeft:'5%', width:'90%', marginTop:'2%',marginBottom:'6%',}}
              onChangeText={(text)=>this.props.handleLnameChange(text)}
              ></TextInput>                    
              
              {/* PHONE-NUMBER */}
              <View style={{padding: 2,marginTop:'5%', flexDirection:'row',height:'7%',alignItems:'center'}}>
              <View style={{width:'90%', marginLeft:'5%', color:'white',borderWidth:1,borderRadius:5,borderColor:'#732C7B',flexDirection:'row'}}>
              <Picker style={{width:"40%",color:"black", height:40}} selectedValue={this.props.code} onValueChange={(item)=>this.props.onCodeChange(item)}>
              {this.props.Pvalue.map((item, index) => {
              return (
              <Picker.Item label={item.dial_code+' '+item.name} value={item.dial_code} key={index}/>
              ) })}
             </Picker>
             <TextInput
             placeholder='Enter your Phone no.'
             padding={5}
             placeholderTextColor="#9C8AA5"
             keyboardType='phone-pad'
             maxLength={10}
             style={{ height:39, color:'black',width:"90%",borderRadius:5,}}
             onChangeText={(text)=>this.props.handlePhoneChange(text)}
             />
             </View>
             </View> 
                          
              {/* EMAIL-ADDRESS */}
              <TextInput
              placeholder='Enter your Email Address'
              padding={5}
              placeholderTextColor="#9C8AA5"
              keyboardType='email-address'
              style={{fontSize:15, height:'7%',marginTop:'5%',borderRadius:5, color:'black', borderColor:'#732C7B', borderWidth:1, marginLeft:'5%', width:'90%', marginTop:'6%'}}
              onChangeText={(text)=>this.props.handleEmailChange(text)}
              ></TextInput>             
             
              {/* HOME-ADDRESS */}
              <View style={{flexDirection:'row',heigth:'7%', marginTop:'7%',borderRadius:5, borderColor:'#732C7B', borderWidth:1, marginLeft:'5%', width:'90%'}}>
              <TextInput
              placeholder='Enter your Home Address'
              padding={5}
              multiline={true}
              numberOfLines={2}
              placeholderTextColor="#9C8AA5"            
              style={{fontSize:15, color:'black',borderRadius:5, width:'80%',height:40}}
              onChangeText={(text)=>this.props.handleAddressChange(text)}
              ></TextInput> 
              <TouchableOpacity onPress={this.props.selectAddress}>
              <Icon name='map-marker' size={20} style={{color:'#9C8AA5', marginTop:"8%", marginLeft:'30%'}}/>
              </TouchableOpacity>
              </View>
              {/* DATE OF BIRTH */}
              <DatePicker
               style={{width:'90%', marginLeft:'5%',borderRadius:5,marginTop:'7%',borderColor:'#732C7B',borderWidth:1,}}
               date={this.props.dob}
               mode="date"
               placeholder="Select your DOB "
               format="YYYY-MM-DD"
               minDate="1950-01-01"
               maxDate="2020-01-01"
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
               marginLeft: 36,
               color:'white',
               borderRadius:5,
               }
               
               }}
               onDateChange={(date) => this.props.handleDateChange(date)}
             />
  
             {/* GENDER */}
             <View style={styles.GenderContainer1}>
              <Picker
               selectedValue={this.props.gender}
               style={{width:'90%', color:'black'}}
               onValueChange={(item) =>
               this.props.handleGenderChange(item)
               }>
                 <Picker.Item label="Choose your gender" value=""/>
               <Picker.Item label="Male" value="male" />
               <Picker.Item label="Female" value="female" />
               <Picker.Item label="Other" value="other"/>           
              </Picker>
              </View>
             
              {/* PASSWORD */}
              <View style={{flexDirection:'row', marginTop:'7%', borderRadius:5,borderColor:'#732C7B', borderWidth:1, marginLeft:'5%', width:'90%',height:'7%'}}>
              <TextInput
              placeholder='Enter your Password'
              padding={5}
              placeholderTextColor="#9C8AA5"
              maxLength={15}
              secureTextEntry={this.props.hidden1}            
              style={{fontSize:15, color:'black', width:'80%',height:40}}
              onChangeText={(text)=>this.props.handlePasswordChange(text)}
              ></TextInput> 
              
              <TouchableOpacity onPress={this.props.onInputLabel1Pressed}>
              <Icon name='eye' size={20} style={{color:'#9C8AA5', marginTop:"8%", marginLeft:'27%'}}/>
              </TouchableOpacity>
              </View>
              
              {/* CONFIRM-PASSWORD */}
              <View style={{flexDirection:'row', marginTop:'2%',borderRadius:5, borderColor:'#732C7B', borderWidth:1, marginLeft:'5%', width:'90%',height:'7%'}}>
              <TextInput
              placeholder='Confirm your Password'
              padding={5}
              placeholderTextColor="#9C8AA5"
              maxLength={15}
              secureTextEntry={this.props.hidden2}            
              style={{fontSize:15, color:'black', width:'80%',height:40}}
              onChangeText={(text)=>this.props.handleCpasswordChange(text)}
              ></TextInput> 
              <TouchableOpacity onPress={this.props.onInputLabel2Pressed}>
              <Icon name='eye' size={20} style={{color:'#9C8AA5', marginTop:"8%", marginLeft:'27%'}}/>
              </TouchableOpacity>
              </View>            
  
              
               
              </Card.Content>       
          </Card>
          </ScrollView>   
          </View>
      
              {/* SIGN-UP BUTTON */}
              <View
              style={{ width: '50%', alignSelf: 'center',alignItems:'center',marginTop:'5%',}}>
              <TouchableOpacity
              onPress={this.props.CheckTextInput}
              style={styles.SignupButton}>
              <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          
        </View>  
        </TouchableWithoutFeedback>   
        );
      }
}
const styles = StyleSheet.create({

  GenderContainer1:{
    fontSize:15, 
    height:'8%', 
    color:'white', 
    borderColor:'#732C7B', 
    borderWidth:1, 
    padding:'-10%',
    marginLeft:'5%', 
    width:'90%', 
    marginTop:'7%',
    borderRadius:5,
  
  },
  SignupButton: {
    borderRadius:19,
    backgroundColor:'#732C7B',
    alignSelf:'center',
    padding:'5%',
    width:'70%'
  },

});