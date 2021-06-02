import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity,Image } from 'react-native';
import { Card, Title, CardItem,Picker, Container} from 'native-base';
import Modal from "react-native-modal";
import {Button, } from 'react-native-paper'
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import Icon from "react-native-vector-icons/FontAwesome";
import StepIndicator from 'react-native-step-indicator';
export default class SignUpVerifyComponent extends Component {
  render() {
    const labels = ["Email Address","Mobile Number"];
    const customStyles = {
      stepIndicatorSize: 25,
      currentStepIndicatorSize:30,
      separatorStrokeWidth: 2,
      currentStepStrokeWidth: 3,
      stepStrokeCurrentColor: "#BDAEC6",
      stepStrokeWidth: 3,
      stepStrokeFinishedColor: 'green',
      stepStrokeUnFinishedColor: "#BDAEC6",
      separatorFinishedColor: 'green',
      separatorUnFinishedColor: 'grey',
      stepIndicatorFinishedColor: 'green',
      stepIndicatorUnFinishedColor: 'grey',
      stepIndicatorCurrentColor: 'white',
      stepIndicatorLabelFontSize: 13,
      currentStepIndicatorLabelFontSize: 13,
      stepIndicatorLabelCurrentColor: 'black',
      stepIndicatorLabelFinishedColor: 'white',
      stepIndicatorLabelUnFinishedColor: 'grey',
      labelColor: '#732C7B',
      labelSize: 15,
      currentStepLabelColor: "#BDAEC6"
    }

    return (

        <View style={{backgroundColor:'rgba(189,174,198,0.2)',flex:1,borderWidth:2,borderColor:"white",}}>
        <View style={{height:'40%'}}>
        <Image style={{ height: '80%', width: '100%', marginTop: "5%",alignSelf:'center',resizeMode:"contain" }} 
        source={require('../../Assets/Images/MobileEntry.png')} />
        <Text style={{color:'#732C7B',fontSize:24,textAlign:'center',fontWeight:'bold',marginBottom:'10%',marginTop: "-5%"}}>Verification</Text>
        </View>
        <View style={{height:'60%',alignContent:'center', marginTop: "5%"}}> 
        <StepIndicator
        customStyles={customStyles}
        currentPosition={this.props.initialPosition}
        labels={labels}
        stepCount={2}
        direction={'horizontal'}
        />
        {this.props.emailvarified?
        <Card style={{marginLeft:"10%",marginBottom:"70%" , marginTop:'5%',width:"80%"}}>
        <CardItem>
          <View>

                {/* email */}
                <Text>An email has been sent to {this.props.email}</Text>
                {/* icon */}
                <Icon size={30} name={this.props.name1} color={this.props.color1} style={{alignSelf:'center'}} />
                {/* email verified message */}
                <Text style={{alignSelf:'center'}}>{this.props.text1}</Text>

                <View style={{ flexDirection: 'row',justifyContent:'space-between' }}>

                {/* edit button */}
                <TouchableOpacity onPress={this.props.toggleModalEmail} >
                <Text style={{ marginLeft: '1%', color: "#732C7B", fontSize: 13 }}>Edit</Text>
                </TouchableOpacity>
                {/* resend button */}
                <TouchableOpacity  onPress={this.props.resendLink}>
                <Text style={{ color: "#732C7B", fontSize: 13 }}>Resend Link?</Text>
                </TouchableOpacity>
                </View>

             </View>          
        </CardItem>
        </Card>
        :
        <Card style={{marginLeft:"10%",marginBottom:"15%", marginTop:'5%', width:"80%",height:'40%'}}>
          <CardItem>
            <View>

          <View style={{flexDirection:'column',alignItems:'center'}}>
             <Text style={{marginBottom:'3%',justifyContent:'flex-start',marginTop:'15%'}}>An OTP has been sent to {this.props.phoneno}</Text>
             
            <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:'8%',}}>
            {/* edit button */}
            <TouchableOpacity onPress={this.props.toggleModalPhone} >
              <Text style={{color:"#732C7B", fontSize:13,}}>
                Edit
              </Text>
            </TouchableOpacity>
            {/* verify button */}
            <TouchableOpacity onPress={this.props.toggleModalOtp} >
            <Text style={{color:"#732C7B", fontSize:13,marginLeft:'82%',}}>
              Verify
            </Text>
            </TouchableOpacity>
            </View>
            </View>

            </View>

          </CardItem>
        </Card>    
        }   

     

       <Modal isVisible={this.props.isModalEmailVisible}>
       
       <Card style={{ marginTop:'-50%'}}>
         <CardItem style={{backgroundColor:"#421c52", height:60}}>
       <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>Email Address Verification</Text>
       </CardItem>
       <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Text style={{fontStyle:"italic",fontSize:15,color:"black",marginTop:"5%", marginBottom:"5%" ,marginLeft:"5%"}}>
           Please enter your Email Address:
         </Text>
         </View>
         <View style={{padding: 2, flexDirection:'row', backgroundColor:'rgba(189,174,198,0.2)'}}>
        <View style={{width:"95%",marginLeft:"2.5%",color:'white',borderWidth:1,borderColor:"black",flexDirection:'row'}}>
       <Icon name='envelope-o' size={20} color="#9C8AA5" style={{margin:"5%"}} />
        <TextInput
        placeholder='Enter your email id'
        placeholderTextColor="#9C8AA5"
        keyboardType='email-address'
      style={{ height: 50, color:'black',width:"90%",}}
      onChangeText={(text)=>this.props.handleEmailChange(text)}
        />
        </View>
        </View>
        <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Text style={{fontStyle:"italic",marginBottom: "5%",marginLeft:"4%",marginTop:"3%", color:"black"}}>
          * We'll send you an Email to verify your account *
         </Text>
         </View>
         <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Button onPress={this.props.CheckEmailInput} style={{borderRadius:19, marginBottom:'5%', backgroundColor:'#732C7B', width:'60%', marginLeft:'20%'}}>
           <Title>Send Link</Title>
         </Button>
         </View>
         </Card>
       
   </Modal>
    <Modal isVisible={this.props.isModalPhoneVisible}>
      
       <Card style={{marginTop:'-50%'}}>
         <CardItem style={{backgroundColor:"#421c52", height:60}}>
       <Text style={{fontWeight:"bold",fontSize:20,color:"white",}}>Mobile Number Verification</Text>
       </CardItem>
        <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Text style={{fontStyle:"italic",fontSize:15,color:"black",marginLeft:"5%",marginTop:"5%", marginBottom:'5%'}}>
           Please enter your Mobile Number:</Text>   
           </View>   
          <View style={{flexDirection:"row"}}>
    <View style={{padding: 2, flexDirection:'row', backgroundColor:'rgba(189,174,198,0.2)'}}>
        <View style={{width:"95%",marginLeft:"2.5%",color:'black',borderWidth:1,borderColor:"black",flexDirection:'row'}}>
       <Icon name='mobile' size={20} color="#9C8AA5" style={{margin:"5%"}} />
          <View style={{width:"90%"}}>
       <Picker style={{width:"40%",color:"black"}} selectedValue={this.props.code} onValueChange={(item)=>this.props.onCodeChange(item)}>
       {this.props.Pvalue.map((item, index) => {
        return (
        <Picker.Item label={item.dial_code+' '+item.name} value={item.dial_code} key={index}/>
        ) })}
       </Picker>      
       </View>
        <TextInput
        placeholder='e.g. (99999-99999)'
        placeholderTextColor="#9C8AA5"
        keyboardType='phone-pad'
        maxLength={10}
      style={{ height: 50, color:'black',width:"90%",marginLeft:"-55%"}}
      onChangeText={(text)=>this.props.handlePhoneChange(text)}
    />
    </View>
   </View>
       </View>
       <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
       <Text style={{fontStyle:"italic",marginTop:"3%", color:"black", marginLeft:'2%'}}>   * We'll send you an OTP to verify your account*
         </Text>
         </View>
         <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Button onPress={this.props.CheckPhoneInput} style={{width:"60%", borderRadius:19, marginLeft:'20%', backgroundColor:"#732C7B",marginTop:"5%", marginBottom:'5%'}}>
           <Title>Send  OTP</Title>
         </Button>
         </View>
       </Card>
       
      </Modal>
    <Modal isVisible={this.props.isModalOtpVisible}>
      <View>
        <Card  style={{marginTop:'-50%'}}> 
        <CardItem style={{backgroundColor:"#421c52", height:60}}>        
        <Text style={{fontWeight:"bold",fontSize:20,color:"white"}}>OTP Verification</Text>
        </CardItem>
        <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
        <Text style={{fontStyle:"italic",fontSize:16,color:"black",marginBottom:'5%', marginLeft:"3%", marginTop:'5%'}}>
           An OTP has been sent to: {this.props.mobileNo}
         </Text>
         </View>
         <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
         <Text style={{fontStyle:"italic",fontSize:16,color:"black",marginLeft:"3%"}}>
           Please enter your 6-Digit OTP:
      </Text>
      </View>
      <View style={{ backgroundColor:'rgba(189,174,198,0.2)'}}>
      <View style={{marginLeft:"8%", marginBottom:'8%', marginTop:'8%',}}>
            <SmoothPinCodeInput
            keyboardType="phone-pad"
           cellStyle={{
           borderBottomWidth: 2,
           borderColor: 'black',
           }}
           textStyle={{color:"black",fontSize:18}}
           codeLength={6}
           cellStyleFocused={{
           borderColor: 'white',
           }}
           cellSize={40}
           value={this.props.otp}
           onTextChange={(item)=> this.props.otpInput(item)}
           onChangeText={(text)=>this.props.handleOtpChange(text)}
          />
          </View>
          </View>
          <TouchableOpacity onPress={this.props.clearOtp}>
        <View style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
        <Text style={{color:"#732C7B",marginLeft:"65%", marginBottom:'5%', marginTop:'5%'}}>
          Resend OTP?
        </Text>
        </View>
      </TouchableOpacity>
      <CardItem style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
        <View style={{flexDirection:"row"}}>
         <Button onPress={this.props.toggleModalOtp} style={{width:"40%", borderRadius:19, backgroundColor:"#732C7B",marginLeft: "5%"}}>
         <Text style={{color:"white"}}>
          Back
        </Text>
         </Button>
         <Button  onPress={this.props.CheckOtpInput} style={{width:"40%", borderRadius:19, backgroundColor:"#732C7B",marginLeft: "10%"}}>
        <Text style={{color:"white"}}>
          Verify
        </Text>
      </Button>
      </View>
      </CardItem>
    
      </Card>
      </View>
    </Modal>     
    </View>
    </View>      
    );
  }
}