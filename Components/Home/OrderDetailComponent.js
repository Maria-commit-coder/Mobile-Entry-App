import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import { Card, CardItem } from 'native-base';

export default class OrderHistoryComponent extends Component {
  render() {
    return (
      
        <View style={{flex:1}}>
        <Image source={{uri: 'https://in.bmscdn.com/showcaseimage/eventimage/arijit-singh-live-in-concert-bengaluru-21-02-2020-06-50-13-444.jpg'}}
                style={{width:'95%', marginLeft:'2.5%', marginTop:'3%', height:'25%', borderRadius:5}}/>
      <ScrollView >
      <Card style={{width:'95%', marginLeft:'2.5%'}}>
        <CardItem>
          <View style={{flexDirection:'column'}}>
          <Text style={{fontSize:16, fontWeight:'bold', marginLeft:'6%', marginBottom:'3%'}}>Arijit Singh Live in Concert Bengaluru</Text>
        <Text>21 March, 2020</Text>
        <Text>7:00 PM</Text>
        <Text>Chamara Vajra, Bengaluru</Text>
        </View>
        </CardItem>
      </Card>

      <Card style={{width:'95%', marginLeft:'2.5%'}}> 
        <CardItem>
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}>Order Id: </Text>
            <Text >#OID12345</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}>Order No: </Text>
            <Text>123</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text style={{fontWeight:'bold'}}>Date of Order: </Text>
            <Text>12/02/2020</Text>
          </View>
          </View>
        </CardItem>
      </Card>

      <Card style={{width:'95%', marginLeft:'2.5%'}}>
        <CardItem>
          <View style={{flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
            <Text>Price: </Text>
            <Text  style={{marginLeft:"78%"}}>1950</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text>GST (SGST + CGST): </Text>
            <Text  style={{marginLeft:"51%"}}>100</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <Text>Discount: </Text>
            <Text style={{marginLeft:"75.5%"}}>50</Text>
          </View>
          </View>
        </CardItem>
      </Card>

      <Card style={{width:'95%', marginLeft:'2.5%'}}>
        <CardItem>
          <View style={{flexDirection:'row'}}>
          <Text style={{fontWeight:'bold', fontSize:16}}>Total: </Text>
          <Text style={{fontWeight:'bold', fontSize:16,marginLeft:"74.5%"}}>2000</Text>
          </View>
        </CardItem>
      </Card>
      </ScrollView>
      </View>
     
    );
  }
}