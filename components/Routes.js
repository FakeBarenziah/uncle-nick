import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

// Component Imports:
import Login from './Login.js'
import SignUp from './SignUp.js'
import Splash from './Splash.js'

export default Routes = createStackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    SignUp: {screen: SignUp}
}, {
    initialRouteName: 'Splash',
    headerMode: "none"
})