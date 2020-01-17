import React from 'react'
import {Image, StyleSheet, View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView} from 'react-native'

import Logo from './Logo.js'

export default class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            phoneNumber : "",
            password : "",
            confirmPassword: ""
        }
    }

    updateState(value, name){
        this.setState({[name]:value})
    }
    
    onSubmit(){

    }
    
    render(){
        return(
            <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <Logo logoSize={110} />
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
                        returnKeyType="next"
                        value={this.state.password}
                        ref={(input) => this.passwordInput = input}
                        onSubmitEditing={() => this.confPassInput.focus()}
                        onChangeText={(value) => this.updateState(value, "password")}
                        />
                    <TextInput 
                        style={styles.input}
                        placeholder="Confirm Password"
                        textContentType="password"
                        secureTextEntry={true}
                        returnKeyType="go"
                        value={this.state.confirmPassword}
                        ref={(input) => this.confPassInput = input}
                        onChangeText={(value) => this.updateState(value, "confirmPassword")}
                    />
                    <TouchableHighlight 
                        style={styles.button}
                        onPress={this.onSubmit}
                        >
                            <View>
                                <Text style={styles.buttonText}>Register</Text>
                            </View>
                    </TouchableHighlight>
                </View>  
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.signupText}>Already have an account? Log in here!</Text>
            </TouchableHighlight>
            </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#820',
        padding:100
    },
    formContainer: {
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center'
    },
    button: {
        paddingHorizontal:36,
        paddingVertical:18,
        margin: 10,
        backgroundColor:"#333",
        alignItems:'center',
        justifyContent:'center'
    },
    buttonText: {
        fontFamily: 'open-sans',
        color: "#eee",
        fontSize:16
    },
    input:{
        color: "#fff",
        fontFamily: 'open-sans',
        width:200,
        height:50,
        padding:10,
        margin:10,
        backgroundColor:"#0003",
        borderRadius:5
    },
    signupText: {
        color:'#fff',
        fontSize:13,
        textAlign:'center',
        fontFamily:'open-sans'
    }
})