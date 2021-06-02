import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ImageBackgroun} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { Icon,} from 'react-native-elements';
import CountDown from 'react-native-countdown-component';
import { Container, Header, Body, Right, Button} from 'native-base';


export default class PassHomeComponent extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
      <Header style={{backgroundColor:"#421C52"}}>
          
          <Body style={{ MarginLeft:'15%' }}>
          <Text style={{fontSize:20,color:"white"}}>Pass</Text>
          
          </Body>
          <Right>
            <Button transparent onPress={this.props.navigatetoNotificationComponent}>
         <Icon name="notifications" color="white"/>
         </Button>
              </Right>
              </Header>

      <TouchableOpacity onPress={this.props.navigatetoScanQRCodeContainer}>
      <View style={styles.continer}>
        
      {/* <ImageBackground source={require('../../Assets/Images/cart.png')}
      style={[styles.square]}> */}
        <Text style={styles.Event}>{this.props.Event}</Text>
        <Text style={styles.EventPass}>EVENT PASS</Text>
        {/* date|day|time*/}

        <Text style={styles.Event1}>
          {this.props.Date}|{this.props.Day}|{this.props.Time}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              style={styles.Image}
              source={require('../../Assets/Images/vlogo.png')}
            />
            <Text style={styles.Name}>{this.props.Name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Mobile}>Mobile:</Text>
              <Text style={styles.Mobile1}>{this.props.Mobile}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Age}>Age:</Text>
              <Text style={styles.Age1}>{this.props.Age}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.Pass}>Pass:</Text>
              <Text style={styles.Pass1}>{this.props.Pass}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.Eventvenue}>Eventvenue:</Text>
            <Text style={styles.Eventvenue}>{this.props.Eventvenue}</Text>
            <Text style={styles.Passvalidtill}>Pass Valid Till</Text>
            <CountDown
              until={2000}
              onFinish={() => alert('finished')}
              size={20}
            />
            <Text style={styles.Totalbill}>Totalbill</Text>
            <Text style={styles.Totalbill}>{this.props.Totalbill}</Text>
          </View>
        </View>
        {/* </ImageBackground> */}
        
    </View>
    </TouchableOpacity>
    </Container>
    );
  }
}
const styles=StyleSheet.create({
  continer:{
    marginTop:'5%',
    height:'85%',
    alignItems:'center',
    padding:'5%',
   borderWidth: 3,
     borderColor: 'black',
     
  },
  Event:{
    fontSize:30,
    textAlign:'center',
    fontWeight:'bold',
    
  },
  square:{
    height:'50%',
    width:'98%',
    opacity: 0.5,
    backgroundColor:'transparent',
   


  },
  EventPass:{
    fontSize:30,
    textAlign:'center'
  },
  Event1: {
    fontSize: 20,
    padding: 10,
    textAlign:'center'
  
  },
  Name:{
    fontSize:20,
    textAlign:'center'  
   

  },
  Mobile:{
    fontSize:15,
    marginLeft:'5%'    
   
    
  },
  Age:{
    fontSize:15,
    marginLeft:'5%'
    
  },
  Pass:{
    fontSize:18,
    marginLeft:'5%',
    marginTop: '5%',
    fontWeight:'bold'
    
    
  },
  Pass1:{
    fontSize:18,
    marginTop: '5%',
    fontWeight:'bold'
  

  },
  Eventvenue:{
   width:'80%'
   
  },
  Image:{
    height:'40%',
    width:'50%',
    resizeMode: 'stretch',
    alignSelf:'center',
    borderRadius:200

    
  },
  Passvalidtill:{
    fontSize:25,
    fontWeight:'bold'
  },
  Totalbill:{
    fontSize:15,
    fontWeight:'bold'
  
  }
});