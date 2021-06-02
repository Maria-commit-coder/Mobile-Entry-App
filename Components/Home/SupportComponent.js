import React, { Component } from 'react';
import { View, Text ,StyleSheet,TextInput,ScrollView,TouchableOpacity,Linking,Keyboard} from 'react-native';
// import Modal from "react-native-modal";
import { SearchBar} from 'react-native-elements';
import { Container, Header, Item, Icon,Input,  Button,Accordion,Content, Separator ,} from 'native-base';

export default class SupportComponent extends Component {

  render() { 
    return (
      
      <View style={{ flex:1,backgroundColor:'#732C7B',}}>
       
      <View >
          <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',marginTop:'2%',marginBottom:'2%',color:'white'}}>What can we help you with?</Text>
          <View >
          
            <View style={styles.searchBar}>
            <Icon name='search' size={20} style={{marginTop:'2%',marginLeft:'-2%',}} />
             <TextInput 
                        onChangeText={(text) => this.props.filterSearch(text)}
                        value={this.props.text}
                        placeholder=' Search for something' width={'95%'}
                        />     
            </View>
            {/* <View  style={{borderRadius:25,borderWidth:2,borderColor:'red'}}>
            <SearchBar
       placeholder="Search Here..."
       onChangeText={(text) => this.props.filterSearch(text)}
       value={this.props.text}
      //  value={this.props.search}
      //  lightTheme={true}
       platform="android"
      //  onCancel={() => {this.props.toggleModalSearch}}
     
       />
       </View> */}
             <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',marginTop:'2%',color:'white'}}>FAQ</Text>
          </View>  
          
      </View> 

      <Container style={{backgroundColor:'#d3d3d3',height:'100%'}}>
        <Content padder> 
          
          <Accordion dataArray={this.props.dataArray}
          
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green",  }}
            expandedIconStyle={{ color: 'red' }}
            headerStyle={{ backgroundColor: 'rgb(168, 163, 168)',borderWidth:1,marginBottom:'2%' ,color:'whites'}}
            contentStyle={{ backgroundColor: "#fff",borderColor:'black',borderWidth:1,padding:'5%',marginBottom:'2%', }}
            />
            
        </Content>
      </Container>

            <View style={{alignItems:'center',padding:'2%',height:'7%', marginBottom:'2%'}}>
            <Text style={{fontSize:10 ,textAlign:'center',color:'white'}}>For any queries</Text>
                <TouchableOpacity onPress={() => Linking. openURL('mailto:support@adihptham.com') } style={{flexDirection:'row'}} >
                <Icon name='mail' style={{fontSize: 10, color: 'white',padding:'1.8%'}}/>
                <Text style={{textAlign:'center',color:'white'}}>support@adihptham.com</Text>
                <Button onPress={() => Linking. openURL('mailto:support@example.com') } title="support@example.com" /> 
                </TouchableOpacity>
              </View>           
    </View>
  );
}
}

const styles=StyleSheet.create({
searchBar:{
  backgroundColor:'white',  
  paddingHorizontal:'5%',
  marginHorizontal:'5%',
  borderRadius:25,
  flexDirection:'row',
  alignItems:'center',
  borderWidth:2,
  // height:'33%'
},



})