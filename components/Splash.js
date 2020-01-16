import React from 'react'
import{View, Text, StyleSheet, Image} from 'react-native'

export default class Splash extends React.Component{
    render(){
        return(
            <View style={styles.view}>
                <Image
                    style={styles.logo} 
                    source={require("../assets/bicycle.jpg")}
                />
                <Text style={styles.title}>Uncle Nick's Bites on Bikes</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color:"#eee",
        fontSize:42,
        padding: 15,
        textAlign:'center',
        fontFamily: 'open-sans'
    },
    view:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
        width:150,
        height:150,
        borderRadius:25,
        padding: 15
    },
})