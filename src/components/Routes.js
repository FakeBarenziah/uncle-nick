import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

// Component Imports:
import Login from './auth/Login.js'
import SignUp from './auth/SignUp.js'
import Splash from './splash/Splash.js'

export default Routes = createStackNavigator({
    Splash: {screen: Splash},
    Login: {screen: Login},
    SignUp: {screen: SignUp}
}, {
    initialRouteName: 'Splash',
    headerMode: "none"
})