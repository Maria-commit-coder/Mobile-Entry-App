import React, { Component } from 'react';
import { Platform, StyleSheet, View,  Image, TouchableOpacity, Alert,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,withNavigation  } from 'react-navigation';
import BuyPassContainer from './BuyPassContainer';
import PassContainer from './PassContainer';
import PassHomeContainer from './PassHomeContainer';
import PassVerifyContainer from './PassVerifyContainer';
import ScanQRCodeContainer from './ScanQRCodeContainer';
import HomeNavigation from '../Home/HomeNavigation'

const NavStack = createStackNavigator(
{
   BuyPassContainer : { screen: BuyPassContainer,  
        navigationOptions:{
            title: 'BuyPass',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
    },
        PassVerifyContainer: { screen: PassVerifyContainer,
        navigationOptions:{
            title: 'Pass Verify',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
        ScanQRCodeContainer: { screen: ScanQRCodeContainer,
        navigationOptions:{
            title: 'ScanQRCode',
            headerStyle: {
                backgroundColor:'#421C52'
            },
            headerTitleStyle: {
                color:'white',
                right: 12,
                fontSize:16
            },headerTintColor:'#fff'
        }
        },
}
);

const PassNavigation = createAppContainer(NavStack);

export default PassNavigation;