import React, {Component} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
  KeyboardAvoidingView,
} from 'react-native';
import {Card} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';



export default class LoginComponent extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        
      <View style={styles.containerView}>
        <View>
          {/* LOGO */}
          <Image
            style={{height: '25%',width:'40%', resizeMode: 'contain', alignSelf: 'center'}}
            source={require('../../Assets/Images/MobileEntry.png')}
          />
          <Text style={{fontSize:26,fontWeight:'bold',textAlign:'center',bottom:'5%',fontFamily:'Didot-Italic'}}>MOBILE ENTRY</Text>
          <Card style={{height:'70%'}}>
          <Card.Content>
          {/* WELCOME MESSSAGE */}
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 25,
                color: 'black',
                fontWeight: 'bold',
                // marginTop: '3%',
              }}>
              WELCOME
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                color: 'black',
              }}>
              Sign into your Account
            </Text>
            <View style={{margin: '2%', marginTop: '3%',}}>
              {/* PHONE-NUMBER INPUT */}
              <Text style={styles.loginText}>Phone Number</Text>
              <View style={styles.InputContainer}>

              <Picker style={{width:"40%",color:"black"}} selectedValue={this.props.code} onValueChange={(item)=>this.props.onCodeChange(item)}>
              {this.props.Pvalue.map((item, index) => {
                return (
              <Picker.Item label={item.dial_code+' '+item.name} value={item.dial_code} key={index}/>
                ) })}
              </Picker>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.props.handlePhonenumber(text)}
                  maxLength={10}
                  placeholder="Enter your phone no."
                  placeholderTextColor="#9C8AA5"
                  keyboardType="phone-pad"
                />
                
              </View>


              {/* PASSWORD INPUT*/}
              <Text style={styles.loginText}>Password</Text>
              <View style={styles.InputContainer}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={text => this.props.handlePassword(text)}
                  maxLength={16}
                  autoCorrect={false}
                  secureTextEntry={this.props.hidden}
                  placeholderTextColor="#9C8AA5"
                  placeholder="Enter your password"
                />
                <TouchableOpacity onPress={this.props.onInputLabelPressed} style={{marginRight:'5%',}}>
                  
                <Icon size={25} color="black" name={this.props.hidden?"ios-eye":"ios-eye-off"} />

                </TouchableOpacity>
              </View>

              </View>
              

            {/* LOGIN BUTTON  */}
            <View
              style={{ width: '50%', alignSelf: 'center',  marginTop: '-15%',marginBottom: '5%',alignItems:'center'}}>
              <TouchableOpacity
              onPress={this.props.myFun}
              disabled={this.props.ButtonStateHolder}
              style={styles.loginButton}>
              <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Login</Text>
              </TouchableOpacity>
            </View>
            {/* FORGOT PASSWORD  */}
            <Text
              style={{color: '#9C8AA5', alignSelf: 'center'}}
              onPress={() => this.props.navigatetoForgotPassword()}>
              Forgot Password?
            </Text>
            {/* SIGNUP */}
            <View style={{flexDirection: 'row', alignSelf: 'center',alignItems:'center',marginTop:'5%',}}>
            <Text style={{fontSize: 13,color:'black'}}>Don't have an Account?</Text>
            <Text
              style={{
                color: 'black',
                alignItems: 'flex-start',
                marginLeft: '1%',
                marginLeft: '2%',
                fontSize: 15,
                fontWeight: 'bold',
              }}
              onPress={() => this.props.navigatetoSignUp()}>
              Register now
            </Text>
          </View>
            </Card.Content>
          </Card>

          
          </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

//Stylesheet for input fields
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '5%',
    borderWidth:2,
    // borderColor:"black",
    alignContent:'center'

  },
  loginText: {
    fontSize: 15,
    marginBottom:'3%',
    marginTop:'2%',
    color: 'black',
    
  },
  loginButton: {
    borderRadius:19,
    backgroundColor:'#732C7B',
    alignSelf:'center',
    padding:'5%',
    width:'80%'
  },
  InputContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth:1,
    borderColor: 'black',
    alignItems:'center',
    height:'21%',
    borderRadius:5
  },
  inputStyle: {
    flex: 1,
    color:'black'
  },
  

  
});