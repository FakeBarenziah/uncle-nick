import React from 'react'
import {Image, StyleSheet, View, Text, TouchableHighlight, TextInput, KeyboardAvoidingView} from 'react-native'

import Logo from '../reusables/Logo.js/index.js.js'

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
            <View style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <Logo style={styles.logo} />
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
            <TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
                <Text style={styles.signupText}>Don't have an account? Sign up here!</Text>
            </TouchableHighlight>
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