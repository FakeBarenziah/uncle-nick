import React from 'react'
import {Image, StyleSheet, View, Text} from 'react-native'

export default class Logo extends React.Component{
    constructor(props){
        super(props)
        this.size = this.props.logoSize
    }
    render(){
        return(
            <View style={styles.logoContainer}>
                <Image
                    style={{width: this.size, height: this.size, borderRadius:25}} 
                    source={require("../assets/bicycle.jpg")}
                />
                <Text style={{...styles.title, fontSize:(Math.floor(this.size/5))}}>Uncle Nick's Bites on Bikes</Text>
            </View>
        )
    }
}

Logo.defaultProps = {
    logoSize: 150
}

const styles = StyleSheet.create({
    logoContainer: {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        color:"#eee",
        textAlign:'center',
        fontFamily: 'open-sans',
        marginTop: 10,
        width: 300
    }
})

