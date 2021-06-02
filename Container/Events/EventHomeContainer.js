import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventHomeComponent from '../../Components/Events/EventHomeComponent';
export default class EventHomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalFilterVisible: false,
      isModalSearchVisible: false,
      isModalLocationVisible: false,
      edate:'',
      search: '',
      searchHeaderRef:'',
      pchecked1:'',
      pchecked2:'',
      pchecked3:'',
      pchecked4:'',
      dchecked1:'',
      dchecked2:'',
      dchecked3:'',
      dchecked4:'',
      cchecked1:'',
      cchecked2:'',
      cchecked3:'',
      cchecked4:'',
      cchecked5:'',
    };
  }
  navigatetoEventContainer = () => {
    this.props.navigation.navigate('EventContainer');
  };

  navigatetoEventDetailsContainer = () => {
    this.props.navigation.navigate('EventDetailsContainer');
  };

  navigatetoNotificationComponent = () => {
    this.props.navigation.navigate('NotificationContainer');
  };

  toggleModalFilter = () => {
    this.setState({ isModalFilterVisible: !this.state.isModalFilterVisible });
  }

  toggleModalSearch = () => {
    this.setState({ isModalSearchVisible: !this.state.isModalSearchVisible });
  }

  toggleModalLocation = () => {
    this.setState({ isModalLocationVisible: !this.state.isModalLocationVisible });
  }

  handleDateChange=(date)=>{
    this.setState({edate: date})
  }

 pcheck1=()=>{
   this.setState({pchecked1: !this.state.pchecked1})
 }

 pcheck2=()=>{
  this.setState({pchecked2: !this.state.pchecked2})
}

pcheck3=()=>{
  this.setState({pchecked3: !this.state.pchecked3})
}

pcheck4=()=>{
  this.setState({pchecked4: !this.state.pchecked4})
}

dcheck1=()=>{
  this.setState({dchecked1: !this.state.dchecked1})
}

dcheck2=()=>{
  this.setState({dchecked2: !this.state.dchecked2})
}

dcheck3=()=>{
  this.setState({dchecked3: !this.state.dchecked3})
}

dcheck4=()=>{
  this.setState({dchecked4: !this.state.dchecked4})
}

ccheck1=()=>{
  this.setState({cchecked1: !this.state.cchecked1})
}

ccheck2=()=>{
  this.setState({cchecked2: !this.state.cchecked2})
}

ccheck3=()=>{
  this.setState({cchecked3: !this.state.cchecked3})
}

ccheck4=()=>{
  this.setState({cchecked4: !this.state.cchecked4})
}

ccheck5=()=>{
  this.setState({cchecked5: !this.state.cchecked5})
}

  render() {
    return (
     <EventHomeComponent
     navigatetoNotificationComponent={this.navigatetoNotificationComponent}
     navigatetoEventContainer={this.navigatetoEventContainer}
     navigatetoEventDetailsContainer={this.navigatetoEventDetailsContainer}
     isModalFilterVisible={this.state.isModalFilterVisible}
     isModalSearchVisible={this.state.isModalSearchVisible}
     isModalLocationVisible={this.state.isModalLocationVisible}
     edate={this.state.edate}
     search={this.state.search}
     pchecked1={this.state.pchecked1}
     pchecked2={this.state.pchecked2}
     pchecked3={this.state.pchecked3}
     pchecked4={this.state.pchecked4}
     dchecked1={this.state.dchecked1}
     dchecked2={this.state.dchecked2}
     dchecked3={this.state.dchecked3}
     dchecked4={this.state.dchecked4}
     cchecked1={this.state.cchecked1}
     cchecked2={this.state.cchecked2}
     cchecked3={this.state.cchecked3}
     cchecked4={this.state.cchecked4}
     cchecked5={this.state.cchecked5}
     searchHeaderRef={this.state.searchHeaderRef}
     toggleModalFilter={this.toggleModalFilter}
     toggleModalSearch={this.toggleModalSearch}
     toggleModalLocation={this.toggleModalLocation}
     handleDateChange={(date)=>this.handleDateChange(date)}
     pcheck1={this.pcheck1}
     pcheck2={this.pcheck2}
     pcheck3={this.pcheck3}
     pcheck4={this.pcheck4}
     dcheck1={this.dcheck1}
     dcheck2={this.dcheck2}
     dcheck3={this.dcheck3}
     dcheck4={this.dcheck4}
     ccheck1={this.ccheck1}
     ccheck2={this.ccheck2}
     ccheck3={this.ccheck3}
     ccheck4={this.ccheck4}
     ccheck5={this.ccheck5}
     />
    );
  }
}
