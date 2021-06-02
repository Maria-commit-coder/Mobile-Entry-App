import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Icon,} from 'react-native-elements';
import { Container,Card, Header, Body, Right, Button, CardItem } from 'native-base';
import UserAvatar from 'react-native-user-avatar';
export default class Task3PP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <Container style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
           
           <Header style={{backgroundColor:"#421C52"}}>
          
          <Body style={{ MarginLeft:'15%' }}>
          <Text style={{fontSize:20,color:"white"}}>Profile</Text>
          
          </Body>
          <Right>
            <Button transparent onPress={this.props.navigatetoNotificationComponent}>
         <Icon name="notifications" color="white"/>
         </Button>
              </Right>
              </Header>

              <ScrollView>
              <View>
                <Card style={{height:"18%"}}>
                  <CardItem >
                 <TouchableOpacity onPress={this.props.navigatetoEditProfile} style={{marginLeft: "90%",flexDirection:"row"}}>
                   <Text style={{color:"#732C7B" }}>Edit </Text>
                 </TouchableOpacity>
                  </CardItem>
                  <CardItem>
                  
                    <View style={{marginTop:"-8%"}}>
                   
                  <UserAvatar size="90" name="xy zyn" color={'rgba(66,28,82,0.8)'}/>
                  </View>
                  
                  <View style={{ marginTop:"-5%",flexDirection:"column",marginLeft:"5%",marginBottom: "5%",}}>
                    <Text>
                      Name: Xyz
                    </Text>
                    <Text>
                      Mobile No: +91 99999 99999
                    </Text>
                    <Text>
                      Email ID: Xyz@gmail.com
                    </Text>
                  </View>
                  </CardItem>
                
                </Card>
                  <Card style={{marginTop:"12%"}}>
                      <CardItem bordered>
                      <TouchableOpacity onPress={this.props.navigatetoOrderHistory}>
                      <View style={{flexDirection:"row",alignItems:"center" }}> 
                          <Icon name="shopping-cart"/>
  <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "53.5%",}}>Order History</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity onPress={this.props.navigatetoSupport}>
                      <View style={{flexDirection:"row" ,alignItems:"center" }}> 
                          <Icon name="help-outline"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "64%",}}>Support</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity   onPress={this.props.navigatetoAccountSetting}>
                      <View style={{flexDirection:"row",alignItems:"center"  }}> 
                          <Icon name="settings"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "39%",}}>Accounts & Settings</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      

                      </Card>
                      <View style={{marginTop:"3%"}}>
                      <Card>
                      <CardItem bordered> 
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" ,alignItems:"center" }}> 
                          <Icon name="shop"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "60%",}}>Share App</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity>
                      <View style={{flexDirection:"row" ,alignItems:"center" }}> 
                          <Icon name="star"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "65.5%",}}>Rate Us</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                      <CardItem bordered>
                      <TouchableOpacity onPress={this.props.logout}>
                      <View style={{flexDirection:"row",alignItems:"center"  }}> 
                          <Icon name="power-settings-new"/>
    <Text style={{fontSize:15,color:"black",marginLeft: "5%", marginRight: "66.5%",}}>Logout</Text>
         <Icon name="navigate-next"/>
          </View>
                      </TouchableOpacity>

                      </CardItem>
                   
                  </Card>
                  </View>
                  <View style={{marginTop:"15%",alignItems:"center",}}>
                  
                
                     <Text style={{fontSize:12}}>
                     Powered by:
                     </Text>
                <Text style={{fontWeight:"bold",fontSize:13,color:"#732C7B"}}> Adihptham Technologies Pvt. Ltd.</Text>
                
                
                  <Text style={{fontSize:12,marginTop:"2%"}}>
                      App Version 1.0.1
                  </Text>
                  </View>
</View>    
</ScrollView>        
     </Container>
    );
  }
}