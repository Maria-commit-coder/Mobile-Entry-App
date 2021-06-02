import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ScanQRCodeComponent from '../../Components/Pass/ScanQRCodeComponent';

class ScanQRCodeContainer extends Component {
     constructor(props) {
    super(props);
    this.state = {
      barcodeData:'',
      time: '',
      isBarcodeScannerEnabled: true
    };
  }

     barcodeRecognized = ({barcodes}) => 
     {this.props.navigation.navigate('PassVerifyContainer');
            
     }
     
     
    render() {
        return (

            <ScanQRCodeComponent
            navigateToPassVerifyContainer={this.navigateToPassVerifyContainer}
            barcodeRecognized={(barcodes)=>this.barcodeRecognized(barcodes)}
            barcodeData={this.state.barcodeData}
            time={this.state.time}
            />
        );
    }
}
export default ScanQRCodeContainer;