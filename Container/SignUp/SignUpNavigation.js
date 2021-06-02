import React, { Component } from 'react';
import LoginContainer from '../../Container/SignUp/LoginContainer';
import SignUpContainer from '../../Container/SignUp/SignUpContainer';
import SignUpVerifyContainer from '../../Container/SignUp/SignUpVerifyContainer';
import ForgotPasswordContainer from '../../Container/SignUp/ForgotPasswordContainer';
import HomeNavigation from '../Home/HomeNavigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { createAppContainer } from 'react-navigation';
import { Transition } from 'react-native-reanimated'


const SignUp = createAnimatedSwitchNavigator(
{
    LoginContainer:LoginContainer,
    SignUpContainer: SignUpContainer,
    SignUpVerifyContainer: SignUpVerifyContainer,
    ForgotPasswordContainer:ForgotPasswordContainer,
    HomeNavigation:HomeNavigation
},
{
    transition: (
    <Transition.Together>
        <Transition.Out
        type="slide-left"
        durationMs={300}
        interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={400} />
    </Transition.Together>
    ),
},
{
    initialRouteName: 'LoginContainer',
}
);

const SignUpNavigation = createAppContainer(SignUp);

export default SignUpNavigation;
