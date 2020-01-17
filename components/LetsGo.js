import React from 'react'
import {StyleSheet, Text, TouchableHighlight} from 'react-native'

export default function LetsGo(props){
        return(
            <TouchableHighlight 
                style={styles.container}
                onPress={props.clickToGo}
                >
                <Text style={styles.go}>Let's Go!</Text>
            </TouchableHighlight>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#820',
        alignItems: 'center',
        justifyContent: 'center',
      },
    go: {
        fontSize:30,
        color: '#fff',
        fontFamily: 'open-sans',
        textAlign: 'center',
        margin:20,
        paddingVertical:20
    }
})