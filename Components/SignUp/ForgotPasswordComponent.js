import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { RadioButton, Button, Title  } from 'react-native-paper';
import { Card, CardItem, Picker } from 'native-base';
import Modal from "react-native-modal";
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ForgotPasswordComponent extends Component {
  
  render() {
    return (
      <View style={{backgroundColor:'rgba(189,174,198,0.2)', flex:1}}>  
      <Image style={{width:175, height:175, marginTop:'7%', marginLeft:'27%'}}
        source={require('../../Assets/Images/MobileEntry.png')}/>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:15, color:'#732C7B', marginTop:'3%'}}> Did you forget your password?? </Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15, color:'#732C7B', marginTop:'2%'}}>Don't worry!!</Text>
        <Icon name='smile-o' style={{color:'#732C7B', fontSize:20, marginLeft:'2%', marginTop:'2%'}}/>
        </View>
        <Text style={{fontSize:15, color:'#732C7B', marginTop:'2%'}}>You can reset your password using </Text>
        <Text style={{fontSize:15, color:'#732C7B', marginTop:'2%'}}>your registered email id </Text>
        <Text style={{fontSize:15, color:'#732C7B', marginTop:'2%'}}> or phone number.</Text>
        </View>
        
        <View style={{flexDirection:'row', marginTop:'15%', height:'14%'}}>
        <Button onPress={this.props.toggleModalEmail}
        style={{borderRadius:19, backgroundColor:'#732C7B', marginLeft:'5%', width:'40%'}}>
          <Title style={{color:'white'}}>
            Email id
          </Title>
        </Button>

        <Button onPress={this.props.toggleModalPhone}
        style={{borderRadius:19, backgroundColor:'#732C7B', width:'40%', marginLeft:'10%'}}>
          <Title style={{color:'white'}}>
            Phone no
          </Title>
        </Button>
        </View>

        <Button onPress={this.props.navigatetoLogin}
        style={{width:'50%',borderRadius:19, backgroundColor:'#732C7B', marginLeft:'25%', marginTop:'2%'}}>
          <Title style={{color:'white'}}>
            Back</Title>
            </Button>       

         <Modal isVisible={this.props.isModalEmailVisible}>
         <Card style={{marginTop:'-35%'}}>
           <CardItem style={{backgroundColor:'#421C52',}}>
         <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>Please enter your registered email id here..</Text>
         </CardItem>
          <CardItem style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
            <View>
              <Text style={{fontSize:18, color:'black'}}>Email :</Text>
              <View style={{padding: 2, flexDirection:'row'}}>
        <View style={{width:"100%", marginTop:'3%', color:'white',borderWidth:1,borderColor:'black',flexDirection:'row'}}>
       <Icon name='envelope-o' size={20} color="#9C8AA5" style={{marginLeft:'3%', marginTop:'5%'}} />
        <TextInput
        placeholder='Enter your email id'
        placeholderTextColor="#9C8AA5"
        keyboardType='email-address'
      style={{ height:50, color:'black',width:"90%", marginLeft:'3%'}}
      onChangeText={(text)=>this.props.handleEmailChange(text)}
      />
      </View>
      </View>

          <Text style={{color:'black', marginTop:'3%', fontStyle:'italic'}}>A link will be sent to the email to reset your password.</Text>
          </View>
          </CardItem>        
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Button onPress={this.props.CheckEmailInput} 
         style={{width:'70%',borderRadius:19, backgroundColor:'#732C7B', marginLeft:'15%'}}>
           <Title style={{color:'white'}} >Finish</Title>
         </Button>
         </CardItem>
         </Card>
     </Modal>        

        <Modal isVisible={this.props.isModalPhoneVisible}>
            <Card style={{marginTop:'-35%'}}>
              <CardItem style={{backgroundColor:'#421C52', }}>
              <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>Please enter your registered phone number here..</Text>
              </CardItem>         
                       
       <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
         <View>
           <Text style={{fontSize:18, color:'black'}}>Phone Number :</Text>
           <View style={{padding: 2, flexDirection:'row'}}>
        <View style={{width:'100%',marginTop:'3%', color:'white',borderWidth:1,borderColor:'black',flexDirection:'row'}}>
       <Icon name='mobile' size={25} color="#9C8AA5" style={{marginLeft:'4%', marginTop:'4%'}} />
       <Picker style={{width:"30%",color:"black"}} selectedValue={this.props.code} onValueChange={(item)=>this.props.onCodeChange(item)}>
       {this.props.Pvalue.map((item, index) => {
            return (
            <Picker.Item label={item.dial_code+' '+item.name} value={item.dial_code} key={index}/>
        ) })}
       </Picker>
        <TextInput
        placeholder='Enter your phone no'
        placeholderTextColor="#9C8AA5"
        keyboardType='phone-pad'
        maxLength={10}
      style={{ height:50, color:'black',width:"90%", marginLeft:'3%'}}
      onChangeText={(text)=>this.props.handlePhoneChange(text)}
      />
      </View>
      </View>

           <Text style={{color:'black', fontStyle:'italic', marginTop:'3%'}}>An OTP will be sent to the number to reset your password.</Text>
           </View>
           </CardItem>
       
       <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
            <Button onPress={this.props.CheckPhoneInput}
            style={{backgroundColor:'#732C7B', borderRadius:19, width:'70%', marginLeft:'15%'}}>
           <Title style={{color:'white'}}>Get OTP</Title>
         </Button>
         </CardItem>
         </Card>
        </Modal>

        <Modal isVisible={this.props.isModalOtpVisible}>
         <Card style={{marginTop:'-25%'}}>
           <CardItem style={{backgroundColor:'#421C52',height:60}}>
         <Text style={{fontSize:18,fontWeight:'bold', color:'white'}}>Please enter your 6 digit OTP here..</Text>
         </CardItem> 
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           <View>
           <Text style={{color:'black', fontSize:15, }}>An OTP has been sent to :</Text>
           <Text style={{color:'black', fontSize:17, marginTop:'3%'}}> {this.props.mobileNo}</Text>
           </View>
         </CardItem>
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
         <View>
         <Text style={{fontSize:18, color:'black', }}>OTP :</Text>   
           <View >
           <SmoothPinCodeInput
           codeLength={6}
           cellSize={40}
           textStyle={{color:'black', fontSize:18}}
           cellStyle={{
           borderBottomWidth: 2,
           borderColor: 'black',
           }}
           cellStyleFocused={{
           borderColor: 'white',
           }}
           value={this.props.otp}
           onTextChange={(item)=> this.props.otpInput(item)}
           onChangeText={(text)=>this.props.handleOtpChange(text)}
          />
          </View>
           </View>
           </CardItem>
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           <TouchableOpacity onPress={this.props.clearOtp}>
             <Title style={{fontSize:15, color:'#732C7B', marginLeft:'62%', }}>Resend OTP?</Title>
           </TouchableOpacity>
         </CardItem>
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           <View style={{flexDirection:'row',}}>
         <Button onPress={this.props.toggleModalPhone}
         style={{backgroundColor:'#732C7B', borderRadius:19, width:'35%', marginRight:'20%', marginLeft:'5%'}}>
           <Title style={{color:'white'}}>Back</Title>
         </Button>
         <Button  onPress={this.props.CheckOtpInput} 
         style={{backgroundColor:'#732C7B', borderRadius:19, width:'35%', marginRight:'5%'}}>
           <Title style={{color:'white'}}>Next</Title>
         </Button>
         </View>
         </CardItem>
         </Card>
     </Modal> 

     <Modal isVisible={this.props.isModalPasswordVisible}>
         <Card style={{marginTop:'-25%'}}>
           <CardItem style={{backgroundColor:'#421C52', height:60}}>
         <Text style={{fontSize:18,fontWeight:'bold', color:'white',}}>Please reset your password here..</Text>
         </CardItem>
         <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           <View>
         <Text style={{fontSize:20, color:'black'}}>New password :</Text>
         <View style={{borderColor:'black',borderWidth:1, height:50, marginTop:'3%',flexDirection:'row'}}>
         <TextInput
           placeholder='New Password...'
           placeholderTextColor='#9C8AA5'
           maxLength={15}
           secureTextEntry={this.props.hidden1}
           style={{width:'90%',color:'black', fontSize:18, marginTop:'-2%'}}
           onChangeText={(text)=>this.props.handlePasswordChange(text)}
           ></TextInput>
           <TouchableOpacity onPress={this.props.onInputLabel1Pressed}>
          <Icon name='eye' size={20} style={{ color:'black', marginTop:'60%'}}/>          
          </TouchableOpacity>
          </View>
          
           </View>
           </CardItem>
          
           <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           <View >
         <Text style={{fontSize:20, color:'black'}}>Confirm New password :</Text>
         <View style={{borderColor:'black',borderWidth:1, height:50, marginTop:'3%', flexDirection:'row'}}>
         <TextInput
           placeholder='Confirm New Password...'
           placeholderTextColor='#9C8AA5'
           maxLength={15}
           secureTextEntry={this.props.hidden2}
           style={{width:'90%', fontSize:18, color:'black', marginTop:'-2%'}}
           onChangeText={(text)=>this.props.handlePassword1Change(text)}
           ></TextInput>
           <TouchableOpacity onPress={this.props.onInputLabel2Pressed}>
          <Icon name='eye' size={20} style={{color:'black', marginTop:'60%'}}/>          
          </TouchableOpacity>
          </View>
           </View>
           </CardItem>

           <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
             <Button onPress={this.props.CheckPasswordInput}
             style={{backgroundColor:'#732C7B', borderRadius:19, width:'70%', marginLeft:'15%'}}>
               <Title style={{color:'white'}}>Okay</Title>
             </Button>
           </CardItem>
       </Card>
       </Modal>
       
      </View>
    );
  }
}