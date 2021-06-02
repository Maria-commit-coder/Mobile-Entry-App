import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Button, Body, Right, Card, CardItem } from 'native-base';
import {Icon, CheckBox} from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import SearchHeader from 'react-native-search-header';

export default class EventHomeComponent extends Component {
  render() {
    return (
      <Container>
           <SearchHeader
                ref = {(searchHeader) => {
                  this.searchHeader = searchHeader;
              }}
                placeholder = 'Search...'
                placeholderColor = 'gray'
                pinnedSuggestions = {[ `arijit singh`, `mirchi lol`, `alcohol ink` ]}
                onClear = {() => {
                    console.log(`Clearing input!`);
                }}
                />

              <Header style={{backgroundColor:"#421C52", marginBottom:'3%'}}>
                
                <Body style={{ MarginLeft:'15%' }}>
                <Text style={{fontSize:20,color:"white"}}>Mobile Entry</Text>
                <TouchableOpacity onPress={this.props.toggleModalLocation}>
                  <View style={{flexDirection:'row'}}>
                  <Text style={{color:'white',marginBottom:'5%'}}>Bengaluru</Text>
                  <Icon name='navigate-next' color={'white'} size={20}/>
                  </View>
                </TouchableOpacity>
                </Body>
                <Right>
                <Button transparent onPress = {() => this.searchHeader.show()}
                style={{marginTop:'-3%'}}>
                <Icon name="search" color='white'/>
                </Button>
                  <Button transparent onPress={this.props.navigatetoNotificationComponent}
                  style={{marginTop:'-3%'}}>
               <Icon name="notifications" color="white"/>
               </Button>
                    </Right>
                    </Header>

                 
{/* 
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'rgba(189,174,198,0.2)'}}>
      <Icon name="event-busy" size={150} color={'grey'} style={{}}/>
        <Text style={{fontSize:25, fontWeight:'bold', color:'grey'}}>No Events</Text>
                
      </View>

      </Container> */}

            <ScrollView style={{backgroundColor:'rgba(189,174,198,0.2)'}}>
            <Card style={{height:120, width:'95%', marginLeft:'2.5%'}}>
            <ImageSlider 
            loopBothSides
            autoPlayWithInterval={3000}
            images={[
           'https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-mirchi-lol-with-vir-das-at-shantiniketan-2020-2-7-t-16-9-58.jpg',
           'https://in.bmscdn.com/showcaseimage/eventimage/arijit-singh-live-in-concert-bengaluru-21-02-2020-06-50-13-444.jpg',
           'https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-alcohol-ink-painting-workshop-2020-2-6-t-11-52-38.jpg',
           
           ]}
           />
          </Card>

          <TouchableOpacity onPress={this.props.navigatetoEventDetailsContainer} style={{marginTop:'5%'}}>        
        <Card style={{width:'95%', marginLeft:'2.5%', flexDirection:'row',borderRadius:5, }}>
        <View style={{width:'60%'}}>
          <Text style={{fontStyle:'italic', marginLeft:'3%', marginTop:'5%', fontSize:16}}>Music Show</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', marginTop:'4%', fontSize:17}}>Arijit Singh Live in Concert Bengaluru</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>21 March, 2020</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>7:00 PM</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>Chamara Vajra, Bengaluru</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey', marginBottom:'3%'}}>2,499 onwards</Text>
          </View>
         <View style={{justifyContent:'center',}}>
         <Image style={{height:140, width:130, alignSelf:'flex-end',  }}
          source={{uri:'https://in.bmscdn.com/Events/moviecard/arijit-singh-live-in-concert-bengaluru-et00118855-2020-2-21-t-18-44-43.jpg'}}/>
       </View>
       </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={this.props.navigatetoEventDetailsContainer}>        
        <Card style={{width:'95%', marginLeft:'2.5%', flexDirection:'row',borderRadius:5}}>
        <View style={{width:'60%'}}>
          <Text style={{fontStyle:'italic', marginLeft:'3%', marginTop:'5%', fontSize:16}}>Comedy Show</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', marginTop:'4%', fontSize:17}}>Mirchi Lol with Vir Das -the World Tour</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>07 March, 2020</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>7:30 PM</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>Forum Shantiniketan Mall, Bengaluru</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey', marginBottom:'3%'}}>999 onwards</Text>
          </View>
         <View style={{justifyContent:'center',}}>
         <Image style={{height:140, width:130, alignSelf:'flex-end',  }}
          source={{uri:'https://in.bmscdn.com/Events/moviecard/mirchi-lol-with-vir-das-at-shantiniketan-et00126134-2020-2-7-t-16-10-17.jpg'}}/>
       </View>
       </Card>
       </TouchableOpacity>

       <TouchableOpacity onPress={this.props.navigatetoEventDetailsContainer}>        
        <Card style={{width:'95%', marginLeft:'2.5%', flexDirection:'row',borderRadius:5}}>
        <View style={{width:'60%'}}>
          <Text style={{fontStyle:'italic', marginLeft:'3%', marginTop:'5%', fontSize:16}}>Art Workshop</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', marginTop:'4%', fontSize:17}}>Alcohol Ink Painting Workshop</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>29 Feb, 2020</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>11:00 AM</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey'}}>YoMama, Bengaluru</Text>
          <Text style={{fontWeight:'bold', marginLeft:'3%', color:'grey', marginBottom:'3%'}}>500 onwards</Text>
          </View>
         <View style={{justifyContent:'center',}}>
         <Image style={{height:140, width:130, alignSelf:'flex-end',  }}
          source={{uri:'https://in.bmscdn.com/Events/moviecard/alcohol-ink-painting-workshop-et00125809-2020-2-6-t-11-53-12.jpg'}}/>
       </View>
       </Card>
       </TouchableOpacity>

       </ScrollView>

       <ActionButton buttonColor='#732C7B' 
       icon={<Icon name='format-list-bulleted' color={'white'}/>}
       onPress={this.props.toggleModalFilter}
       >
       </ActionButton>

       <Modal isVisible={this.props.isModalFilterVisible}
       onBackdropPress={this.props.toggleModalFilter}
       style={{width:'90%', marginLeft:'5%'}}>
        <ScrollView>
        <CardItem bordered  style={{backgroundColor: '#732C7B' }}>
        <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Price Range :</Text>
        </CardItem>

           <CardItem>
             <View style={{flexDirection:'column'}}>
        <CheckBox
        title='0-500'
        checked={this.props.pchecked1}
        onPress={this.props.pcheck1}
        checkedColor='#732C7B'/>
               
        <CheckBox
        title='500-1000'
        checked={this.props.pchecked2}
        onPress={this.props.pcheck2}
        checkedColor='#732C7B'/>

        <CheckBox
        title='1000-200'
        checked={this.props.pchecked3}
        onPress={this.props.pcheck3}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Above 2000'
        checked={this.props.pchecked4}
        onPress={this.props.pcheck4}
        checkedColor='#732C7B'/>
        </View>
        </CardItem>

        <CardItem bordered style={{backgroundColor: '#732C7B' }}>
        <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Date :</Text>
        </CardItem>

             <CardItem>
               <View style={{flexDirection:'column'}}> 
        <CheckBox
        title='Today'
        checked={this.props.dchecked1}
        onPress={this.props.dcheck1}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Tomorrow'
        checked={this.props.dchecked2}
        onPress={this.props.dcheck2}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Weekend'
        checked={this.props.dchecked3}
        onPress={this.props.dcheck3}
        checkedColor='#732C7B'/> 

        <CheckBox
        title='Events in next 10 days'
        checked={this.props.dchecked4}
        onPress={this.props.dcheck4}
        checkedColor='#732C7B'/> 
         
        </View>  
        </CardItem>

        <CardItem bordered style={{backgroundColor: '#732C7B' }}>
        <Text style={{fontSize:17, fontWeight:'bold', color:'white'}}>Category :</Text>
        </CardItem>
       
       <CardItem>
         <View style={{flexDirection:'column'}}>
        <CheckBox
        title='Comedy Shows'
        checked={this.props.cchecked1}
        onPress={this.props.ccheck1}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Music Shows'
        checked={this.props.cchecked2}
        onPress={this.props.ccheck2}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Performances'
        checked={this.props.cchecked3}
        onPress={this.props.ccheck3}
        checkedColor='#732C7B'/> 

        <CheckBox
        title='Exhibitions'
        checked={this.props.cchecked4}
        onPress={this.props.ccheck4}
        checkedColor='#732C7B'/>

        <CheckBox
        title='Workshops'
        checked={this.props.cchecked5}
        onPress={this.props.ccheck5}
        checkedColor='#732C7B'/>
        </View>
        </CardItem>

        <CardItem>
        <Button onPress={this.props.toggleModalFilter}
        style={{borderRadius:19, backgroundColor:'#732C7B', marginLeft:'30%', width:'40%'}} >
          <Text style={{fontWeight:'bold', marginLeft:'35%', color:'white'}}>Apply</Text>
        </Button>
        </CardItem>

        </ScrollView>
        </Modal>

        <Modal isVisible={this.props.isModalLocationVisible}
        onBackdropPress={this.props.toggleModalLocation}
        style={{width:'90%', marginLeft:'5%'}}>

          <TouchableOpacity onPress={this.props.toggleModalLocation}>
         <CardItem bordered style={{flexDirection:"row"}}>                      
                      <Icon name="place" color={'#732C7B'}/>
                      <Text style={{color:'#732C7B', marginLeft:'3%'}}>Detect my location</Text>
                      </CardItem>
                      </TouchableOpacity>
                  

                  <CardItem bordered style={{backgroundColor:'#732C7B'}}>
                     
                     <Text style={{fontWeight:'bold', color:'white'}}>
                        POPULAR CITIES
                    </Text>
                   
                     
                    </CardItem>
                    <CardItem bordered>
                       
                        <View style={{flexDirection:'column'}}>
                          <View style={{flexDirection:'row'}}>
                        <View style={{borderWidth: 1,borderColor: "black",width:"25%", alignItems:'center'}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Mysuru</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,alignItems:'center',borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Delhi</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,alignItems:'center',borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Kolkata</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1 ,alignItems:'center',borderLeftWidth: 0,borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Chennai</Text>
                        </TouchableOpacity>
                        </View>                       
                        </View>
                                        
                        <View>
                       
                        <View style={{flexDirection:'row'}}>
                        <View style={{borderWidth:1,borderColor: "black",borderTopWidth:0,alignItems:'center', width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Pune</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Kochi</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Lucknow</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1 ,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Goa</Text>
                        </TouchableOpacity>
                        </View>
                        </View>
                        </View>
                    
                       
                        <View style={{flexDirection:'row'}}>
                        <View style={{borderWidth: 1,borderColor: "black",borderTopWidth:0,alignItems:'center', width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Ahmedbad</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Chandigarh</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Hyderabad</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{borderWidth: 1,borderLeftWidth: 0,borderTopWidth:0,alignItems:'center',borderColor: "black",width:"25%"}}>
                        <TouchableOpacity onPress={this.props.toggleModalLocation}>
                        <Icon name="home" style={{marginTop: "20%",}}/>
                        <Text style={{marginBottom: "15%",}}>Bengaluru</Text>
                        </TouchableOpacity>
                        </View>
                        </View>           
                        </View>
                                            
                    </CardItem>
                    
                    <ScrollView >
                    <CardItem style={{backgroundColor:'#732C7B'}} >                     
                  <Text style={{fontWeight:'bold', color:'white'}}>
                      OTHER CITIES
                  </Text>              
                   </CardItem>

                    <TouchableOpacity onPress={this.props.toggleModalLocation}>  
                    <CardItem bordered>                    
                     <Text style={{color:"black"}}>
                        Ranchi
                    </Text>    
                    </CardItem>               
                    </TouchableOpacity>                   
                                                           
                    <TouchableOpacity onPress={this.props.toggleModalLocation}>
                    <CardItem bordered>  
                    <Text style={{color:"black"}}>
                        Udaipur
                    </Text>
                    </CardItem>
                    </TouchableOpacity>                 
                                        
                   <TouchableOpacity onPress={this.props.toggleModalLocation}>
                   <CardItem bordered>                       
                   <Text style={{color:"black"}}>
                        Shimla
                    </Text>    
                    </CardItem>               
                   </TouchableOpacity>                     
                                        
                   <TouchableOpacity onPress={this.props.toggleModalLocation}> 
                   <CardItem bordered>                     
                   <Text style={{color:"black"}}>
                        Trivandrum
                    </Text>  
                    </CardItem>                 
                   </TouchableOpacity>                     
                                       
                   <TouchableOpacity onPress={this.props.toggleModalLocation}>
                   <CardItem bordered>                       
                   <Text style={{color:"black"}}>
                        Tumakuru
                    </Text> 
                    </CardItem>                  
                   </TouchableOpacity>                     
                                        
                   <TouchableOpacity onPress={this.props.toggleModalLocation}>   
                   <CardItem bordered>                   
                   <Text style={{color:"black"}}>
                        Calicut
                    </Text> 
                    </CardItem>                  
                   </TouchableOpacity>                     
                    
                    </ScrollView>
       </Modal>

        </Container>

      
    );
  }
}
