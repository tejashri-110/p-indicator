import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight ,Image} from 'react-native';
import As from './AuthServices';
import firebase from "../config";

export default class forgotpass extends React.Component {
    constructor(props) {
        super(props);
        this.buttonforgot = this.buttonforgot.bind(this);
        this.dbRef = firebase.firestore().collection('Users');
    }
    state = {
        email:'',
        password:'',
    }
    buttonforgot(){
        alert("Please check Your Email");
        this.props.navigation.navigate('loginpg');
        As.ForgotPassword(this.state.email).then(function () {
            // Email sent.
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }
    // state = {
    //     email: "",
    //     password: ""
    // }
    render() {

        const button= {
            height: 45,
            alignItems: "center",
            justifyContent: "center",
            width:"35%",
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: 8,
            marginBottom: 10,
            marginTop: 40,
            borderWidth: 6,
            borderColor: "#FFFFFF",
            color: '#008484',
        }

        return (
        <View style={styles.container}>
                {/* <Text style={styles.logo}>P-Indicator</Text> */}
                <Image style={styles.image} source={require('../assets/LOGO.png')} />
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#808080"
                        placeholderBorderColor="#ffffff"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                </View>
            <View>
            <TouchableHighlight
                           style={styles.button}
                           
                            underlayColor="white"
                            onPress={this.buttonforgot}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableHighlight>
                {/* <button style={buttonStylesubmit} onClick={this.buttonforgot}>Submit</button> */}
            </View>
        </View>    
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b77e8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        //fontFamily: "calibri",
        color: "#ffffff",
        marginBottom: 70,
        //marginTop:50
    },
    inputView: {
        width: "75%",
        backgroundColor: "#ffffff",
        height: 40,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "center",
        padding: 10
    },
    inputText: {
        height: 20,
       // fontFamily: "calibri",
        fontSize: 16,
    //    fontStyle: "italic",
        color: "#000000"
    },
    image:
    {
      width: 170,
      height:175,
      marginBottom:10,
     // marginTop:100
    },
    EText: {
        height: 20,
        //fontFamily: "calibri",
        fontSize: 26,
        marginRight: 600,
        fontStyle: "italic",
        color: "#e1e1e1",
        alignItems: 'center',
        padding: 10,
        marginLeft:10,
        color:"#FFFFFF",
        marginBottom:15
    },
    button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"35%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginTop: 30,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#5b77e8',
        alignItems: "center",
        justifyContent: "center",
        marginRight:24,
    },
});