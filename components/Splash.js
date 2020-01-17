import React from 'react'
import { StyleSheet, View, StatusBar} from 'react-native'

import * as Font from 'expo-font'

import Logo from './Logo.js'
import LetsGo from './LetsGo'

export default class Splash extends React.Component{
    constructor(){
        super()
        this.state = {
            fontLoaded:false
        }
    }
        
    async componentDidMount(){
    await Font.loadAsync({
        'open-sans' : require('../assets/fonts/OpenSans-Regular.ttf')
    })

    this.setState({fontLoaded: true})
    }

    render(){
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                {this.state.fontLoaded ? <Logo /> : null}
                {this.state.fontLoaded ? <LetsGo clickToGo={() => this.props.navigation.navigate('Login')}/> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#820',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });