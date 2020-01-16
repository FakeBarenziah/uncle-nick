import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import * as Font from 'expo-font'

import Splash from './components/Splash.js'
import Login from './components/Login.js'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      fontLoaded:false
    }
    
  }
  
  async componentDidMount(){
    await Font.loadAsync({
      'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf')
    })

    this.setState({fontLoaded: true})
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        {this.state.fontLoaded ? <Splash/> : null}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
