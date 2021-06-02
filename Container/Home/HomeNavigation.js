import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer,withNavigation  } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import ProfileContainer from './ProfileContainer';
import EditProfileContainer from './EditProfileContainer';
import AccountSettingContainer from './AccountSettingContainer';
import NotificationContainer from './NotificationContainer';
import SupportContainer from './SupportContainer';
import OrderHistoryContainer from './OrderHistoryContainer';
import OrderDetailContainer from './OrderDetailContainer';
import PassNavigation from '../Pass/PassNavigation'
import PassHomeContainer from '../Pass/PassHomeContainer'
import EventHomeContainer from '../Events/EventHomeContainer';
import EventDetailsContainer from '../Events/EventDetailsContainer'

const Tabs = createMaterialBottomTabNavigator(
{
     PassHomeContainer: { screen: PassHomeContainer,  
            navigationOptions:{  
                tabBarLabel:'MyPass',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={22} name='shopping-cart'/> 
                    </View>),
                activeColor: '#fff',  
                inactiveColor: '#BDAEC6'  
            }  
        },

   EventHomeContainer : { screen: EventHomeContainer,  
            navigationOptions:{  
                tabBarLabel:'HOME',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={22} name={'home'}/> 
                    </View>),
                activeColor: '#fff',  
                inactiveColor:'#BDAEC6' 
            }  
        }, 
    ProfileContainer: { screen: ProfileContainer,  
            navigationOptions:{  
                tabBarLabel:'PROFILE',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon name='user' style={[{color: tintColor}]} size={22}/> 
                    </View>),
                activeColor: 'white',  
                inactiveColor: '#BDAEC6' 
            }  
        }, 
},
        {  
      initialRouteName: "EventHomeContainer",   
      barStyle: { backgroundColor: '#421C52' },  
    }
);

const NavStack = createStackNavigator(
{
     Tabs : { screen: Tabs,
     navigationOptions:{
           headerShown:false
        }
     },
     PassNavigation:{
         screen: PassNavigation,
          navigationOptions:{
           headerShown:false
        }
     },
    EventDetailsContainer: { screen: EventDetailsContainer,
        navigationOptions:{
            title: 'EventDetails',
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
    NotificationContainer: { screen: NotificationContainer,
        navigationOptions:{
            title: 'Notifications',
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
        OrderHistoryContainer: { screen: OrderHistoryContainer,
        navigationOptions:{
            title: 'Order History',
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
        SupportContainer: { screen: SupportContainer,
        navigationOptions:{
            title: 'Support',
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
        EditProfileContainer : { screen: EditProfileContainer,  
        navigationOptions:{
            title: 'Edit Profile',
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
    AccountSettingContainer : { screen: AccountSettingContainer,  
        navigationOptions:{
            title: 'Account Setting',
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
    OrderDetailContainer : { screen: OrderDetailContainer,  
        navigationOptions:{
            title: 'Order Details',
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

const HomeNavigation = createAppContainer(NavStack);

export default HomeNavigation;
