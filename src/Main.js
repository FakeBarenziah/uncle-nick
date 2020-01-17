import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import RoutesContainer from './components/Routes'

function Main(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <RoutesContainer />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#820'
    }
})

export default connect(null, null)(Main)