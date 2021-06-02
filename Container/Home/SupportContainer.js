import React, { Component } from 'react';
import { View, Text ,Linking, Keyboard} from 'react-native';



import SupportComponent from '../../Components/Home/SupportComponent';
export default class SupportContainer extends Component {
 constructor(props) {
   super(props);
   this.state = {
    
     text:'',
     
     

      dataArray :[
       { title: "What is your name? ", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet What is your name? What is your name? What is your name?What is your name?What is your name?" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
       { title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" },{ title: "What is your name?", content: "Sagar" },
       { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
       { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
     ],
    //  onChangeText:false
    destinationArray:[
      { title: "What is your name? ", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet What is your name? What is your name? What is your name?What is your name?What is your name?" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },
      { title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" },{ title: "What is your name?", content: "Sagar" },
      { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
      { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
    ]
 
     ,
};

}


 filterSearch=(text)=>{
   
   if(text){ 
     
    const newData = this.state.dataArray.filter(function(item){
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
  })
  this.setState({
      dataArray: newData,
      text: text
  })}else{
    this.setState({dataArray:this.state.destinationArray,text:''
    })
  }
}


 
 render() {
 
   return (
    <SupportComponent
     dataArray={this.state.dataArray}
     text={this.state.text}
     filterSearch={(text)=>this.filterSearch(text)} 
  
     />
   );
 }
}