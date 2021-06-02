import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { RNCamera } from 'react-native-camera';

class ScanQRCodeComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          onGoogleVisionBarcodesDetected={this.props.barcodeRecognized}
        >
        </RNCamera>
       
            </View>
        );
    }
}
export default ScanQRCodeComponent;

const styles = StyleSheet.create({
    container: {
         flex: 1,
        flexDirection: 'column',
    },
     SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius:5,
        borderWidth: 3,
        borderColor:"#000",
        height: 40,
        margin: 8,
        width:'96%',
        opacity:1
    },
});