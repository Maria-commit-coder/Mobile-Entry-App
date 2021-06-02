import React, { Component } from 'react';
import { View, Text ,TouchableOpacity,StyleSheet ,TextInput,Image,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Header, Content, Card, CardItem, Body, Separator,Footer ,Button} from 'native-base';
import { Avatar} from 'react-native-elements';
import PhotoUpload from 'react-native-photo-upload'


export default class BuyPassComponent extends Component {
  render() {
    return (
      <Container>
      <ScrollView style={{backgroundColor:'rgba(189,174,198,0.2)',flex:1}}>
      <View style={{alignItems:'center',}}> 
        <Card style={{width:'95%'}}>
          <CardItem>
            <View style={{width:'60%',}}>
      
            <TextInput 
                            onChangeText={(text)=> this.props.onChangeName(text)}
                            value={this.props.name}
                            placeholder={'Name'}
                            placeholderTextColor='grey'
                            editable={this.props.edit}
                            // style={styles.inpt}
                        ></TextInput>
               <TextInput 
                            onChangeText={(text)=> this.props.onChangePhone(text)}
                            value={this.props.phone}
                            placeholder={'Phone Numnber'}
                            placeholderTextColor='grey'
                            editable={this.props.edit}
                            // style={styles.inpt}
                        ></TextInput>
               <TextInput 
                            onChangeText={(text)=> this.props.onChangeEmail(text)}
                            value={this.props.email}
                            placeholder={'Email'}
                            placeholderTextColor='grey'
                            editable={this.props.edit}
                            // style={styles.inpt}
                        ></TextInput>
            </View>
            <View>
            <PhotoUpload
                    onPhotoSelect={avatar => {
                      if (avatar) {
                        console.log('Image base64 string: ', avatar)
                      }
                    }}
                  >
                    <Image
                      style={{
                        paddingVertical: 30,
                        width: 140,
                        height: 140,
                        borderRadius: 75
                      }}
                      resizeMode='cover'
                      source={{
                        uri: 'https://cdn2.iconfinder.com/data/icons/rounded-white-basic-ui-set-3/139/Profile_AddFriend-RoundedWhite-512.png'
                      }}
                    />
             </PhotoUpload>
             <Text style={{marginLeft:'25%'}}>Add Photo</Text>
            </View>
          </CardItem>
        </Card>
          <Card  style={{width:'95%'}}>
            <CardItem >
              <View style={{width:'50%'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>
                   Arijit Singh Live in Concert Bengaluru
                </Text>
                <Text style={{top:5}}>1 Ticket      </Text>
                </View>
                <View style={{marginLeft:'30%'}}>
                  <Text >$300.00</Text>
                </View>
            </CardItem>
            <Separator style={{borderColor:'grey',borderWidth:0.5,width:'95%',marginLeft:'2.5%',height:"1%"}}/>
            <CardItem style={{flexDirection:'column',alignItems:'flex-start'}}>
                    <Text>{this.props.Day}{' '}</Text>
                    <Text>{this.props.Date}</Text>
            </CardItem>
            <Separator style={{borderColor:'grey',borderWidth:0.5,width:'95%',marginLeft:'2.5%',height:"0.5%"}}/>
            <CardItem style={{flexDirection:'column',alignItems:'flex-start'}}>
            <Text style={{color:'#abc'}}>Venue</Text>
              <Text>Malleshwaram</Text>
            </CardItem>
          </Card>
          <Card style={{width:'95%'}}>
            <CardItem>
            <View style={{width:'80%'}}>
                <Text style={{fontSize:16,fontWeight:'bold'}}>Price</Text>
                <Text style={{fontSize:16,fontWeight:'bold',}}>Discount</Text>
                <Text style={{fontSize:16,fontWeight:'bold',}}>Total</Text>
            </View>
            <View>
              <Text>$300.00</Text>
              <Text>$50.00</Text>
              <Text>$250.00</Text>
            </View>
            </CardItem>
          </Card>
          {/* <View style={{alignItems:'center',marginTop:'5%',width:'95%',height:'18%',marginBottom:'10%'}}>
          <TouchableOpacity style={{backgroundColor:'#732C7B',height:'55%',width:'100%',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>Procced to Pay</Text>
          </TouchableOpacity> */}
        {/* </View>    */}
      </View>
      </ScrollView>
       <Footer style={{backgroundColor:'#732C7B'}}>
       <TouchableOpacity style={{width:"100%",alignItems:"center"}} >
            <Text style={{fontSize:20,top:11,fontWeight:'bold',color:'white',}}>Procced to Pay</Text>
          </TouchableOpacity>
     </Footer>
     </Container>

    );
  }
}