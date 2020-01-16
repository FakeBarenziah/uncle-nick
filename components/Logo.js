import React from 'react'
import {Image, StyleSheet, View, Text} from 'react-native'

export default function Logo() {
    return(
        <View style={styles.logoContainer}>
            <Image
                style={styles.logo} 
                source={require("../assets/bicycle.jpg")}
            />
            <Text style={styles.title}>Uncle Nick's Bites on Bikes</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logoContainer: {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
        width:150,
        height:150,
        borderRadius:25
    },
    title: {
        color:"#eee",
        fontSize:30,
        textAlign:'center',
        fontFamily: 'open-sans',
        marginTop: 10,
        width: 300
    }
})

