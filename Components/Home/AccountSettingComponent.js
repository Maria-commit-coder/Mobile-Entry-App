import React, { Component } from 'react';
import { View, Text, Switch, TouchableOpacity, Image } from 'react-native';
import { Card, CardItem, Picker } from 'native-base';
import { Icon,} from 'react-native-elements';
import Modal from "react-native-modal";

export default class EditProfileComponent extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgba(189,174,198,0.2)',flex:1}}>
      <Card>
        <CardItem bordered >
          <View style={{flexDirection:'row'}}>
        <Text>Allow Notificatons</Text>
        <Switch style={{marginLeft:'51%'}}
        value={this.props.switch}
        onValueChange={this.props.switchChange}></Switch>
        </View>
        </CardItem>
        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}>
          <Text style={{marginRight:'59%'}}>Update password</Text>
          <Icon name="navigate-next"/>
        </TouchableOpacity>
        </CardItem>
        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={this.props.deleteAccount}>
        <Text style={{marginRight:'60%'}}>Delete Account</Text>
        </TouchableOpacity>
        </CardItem>
        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}
        onPress={this.props.toggleModalLanguage}>
        <Text style={{marginRight:'65%'}}>App Language</Text>
        <Icon name="navigate-next"/>
        </TouchableOpacity>
        </CardItem>
        <CardItem bordered>
        <TouchableOpacity style={{flexDirection:'row'}}>
        <Text style={{marginRight:'70%'}}>About Us</Text>
        </TouchableOpacity>
        </CardItem>
      </Card>

      <View style={{marginTop:"20%",alignItems:"center",}}>                 
      <Text style={{fontSize:12}}>
      Powered by:
      </Text>
      <Image source={require('../../Assets/Images/DD5.png')} style={{width:'50%', height:'45%'}}/>
      <Text style={{fontSize:12}}>
      App Version 1.0.1
      </Text>
      </View>
      
      <Modal isVisible={this.props.isModalLanguageVisible}>
        
          <TouchableOpacity onPress={this.props.toggleModalLanguage}>
          <CardItem bordered>
          <Text>English</Text>
          </CardItem>
          </TouchableOpacity>       
       
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Kannada</Text>
          </CardItem>
        </TouchableOpacity>        
        
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Hindi</Text>
          </CardItem>
        </TouchableOpacity>        
        
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Tamil</Text>
          </CardItem>
        </TouchableOpacity>      

        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Telugu</Text>
          </CardItem>
        </TouchableOpacity>
               
        <TouchableOpacity onPress={this.props.toggleModalLanguage}>
        <CardItem bordered>
          <Text>Malayalam</Text>
          </CardItem> 
        </TouchableOpacity>
                      
        </Modal>

        </View>
    );
  }
}
