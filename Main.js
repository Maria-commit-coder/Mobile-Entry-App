import React, { Component } from 'react';
import HomeNavigation from './Container/Home/HomeNavigation';
import SignUpNavigation from './Container/SignUp/SignUpNavigation'
import Splashscreen  from './Splashscreen'
class Main extends Component {
    constructor(props){
        super(props);
            this.state={
                currentScreen:'Splash',
                isLoggedIn:false
            }
            
        }
        
    UNSAFE_componentWillMount() {
        setTimeout(() => { this.setState({ currentScreen: "Home" }) }, 3000);
    }

    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splashscreen/> : this.state.isLoggedIn ? <HomeNavigation/> : <SignUpNavigation/>
        return mainScreen
    }
}
 
export default Main;