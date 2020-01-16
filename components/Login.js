import React from 'react'
import {Image, StyleSheet, View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView} from 'react-native'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            phoneNumber : "",
            password : ""
        }
    }

    updateState(value, name){
        this.setState({[name]:value})
    }
    
    onSubmit(){

    }
    
    render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo} 
                        source={require("../assets/bicycle.jpg")}
                    />
                    <Text style={styles.title}>Uncle Nick's Bites on Bikes</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.input}
                        keyboardType="phone-pad"
                        placeholder="Phone #"
                        textContentType="telephoneNumber"
                        returnKeyType="next"
                        value={this.state.phoneNumber}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        onChangeText={(value) => this.updateState(value, "phoneNumber")}
                        />
                    <TextInput 
                        style={styles.input}
                        placeholder="Password"
                        textContentType="password"
                        secureTextEntry={true}
                        returnKeyType="go"
                        value={this.state.password}
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(value) => this.updateState(value, "password")}
                        />
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={this.onSubmit}
                        >
                            <View>
                                <Text style={styles.buttonText}>Login</Text>
                            </View>
                    </TouchableHighlight>
                </View>  
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:100
    },
    logoContainer: {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    formContainer: {
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
        fontSize:22,
        textAlign:'center',
        fontFamily: 'open-sans',
        marginTop: 10,
        width: 200
    },
    button: {
        width: 150,
        height: 75,
        backgroundColor:"#333",
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        fontFamily: 'open-sans',
        color: "#eee",
        fontSize:18
    },
    input:{
        color: "#000",
        width:200,
        height:50,
        padding:10,
        margin:10,
        backgroundColor:"#ffd3"
    }
})