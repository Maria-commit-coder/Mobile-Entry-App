import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Animated,
  StyleSheet,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';

export default class Splashscreen extends Component {
  state = {
    progressStatus: 0,

  };
  anim = new Animated.Value(0);
  componentDidMount() {
    this.onAnimate();
  }
  onAnimate = () => {
    this.anim.addListener(({value}) => {
      this.setState({progressStatus: parseInt(value, 10)});
    });
    Animated.timing(this.anim, {
      toValue: 100,
      duration: 3000,
    }).start();
  };

  render() {
    return (
      <LinearGradient colors={['#61045f', '#20011f']} style={{flex:1}}>
        <View>
          {/*  APP LOGO AND TITLE */}

          <View style={styles.top}>
            {/* style={{alignContent: 'center', alignItems: 'center', margin: 50}}> */}
            <Animatable.Image
              style={{height: '40%', width: '40%',}}// alignItems: 'flex-start'}}
              animation="slideInLeft"
              duration={1000}
              source={require('./Assets/Images/MobileEntry.png')}></Animatable.Image>

            <Animatable.Text
              animation="slideInRight"
              style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}
              duration={1000}>
              Mobile Entry
            </Animatable.Text>
          </View>

          {/* ADIHPTHAM-LOGO */}
          <View style={styles.bottom}>
          <View style={{alignItems: 'center',marginTop: '25%'}}>
            <Animatable.Text
              onPress={() => Toast.show('Adihptham')}
              animation="bounceInLeft"
              style={{color: 'white'}}
              duration={1000}>
              Powered by,
            </Animatable.Text>

            <Animatable.Text
              animation="bounceInRight"
              style={{fontWeight: 'bold', color: 'white'}}
              duration={1000}>
              Adihptham Technologies Pvt.Ltd
            </Animatable.Text>
          </View>

          {/* PROGRESS-BAR */}

          <View
            style={{marginTop: '2%', marginRight: '10%', marginLeft: '10%'}}>
            <View style={styles.container1}>
              <Animated.View
                style={[styles.inner, {width: this.state.progressStatus + '%'}]}
              />
              <Animated.Text style={styles.label}>
                {this.state.progressStatus}%
              </Animated.Text>
            </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    width: '100%',
    height: '25%',
    padding: 1,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor:'grey'
  },
  inner: {
    width: '100%',
    height:'100%',
    borderRadius: 15,
    backgroundColor: '#9C8AA5',
  },
  label: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  top:{
      height:'50%',
      alignContent: 'center',
      alignItems: 'center',
      margin: 50
  },
  bottom:{
      height:'50%',
      marginBottom:'-15%',
      //4287
  }
});
