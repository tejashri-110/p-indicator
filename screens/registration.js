import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,TouchableHighlight,ImageBackground,Image} from 'react-native';
import firebase from "../config";
import ValidationComponent from 'react-native-form-validator';
import firestore from '@react-native-firebase/firestore';
import As from './AuthServices';

export default class registration extends ValidationComponent {
    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.dbRef = firebase.firestore().collection('Users');
    
    this.state = {
        username: "",
        email: "aaa@gmail.com",
        password: "",
        contact: "",
        UID: ''};
    }

    buttonPress() {
        // this.validate(
        //     // alert("error!!!"),
        //     {
        //     username: {minlength:3, maxlength:7, required: true},
        //     email: {email: true},
        //     password: {password: true},
        //     contact: {numbers: true},
        //   });
        if(this.state.username==='' || this.state.email=== '' || this.state.password==='' || this.state.contact==='')
        {
            alert("Please ,fill up all the fields")
        }
        else
        {
        As.signUp(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                console.log("successed!!");
                var user = userCredential.user;
                this.dbRef.doc(As.Current().uid).set({
                    UserName: this.state.username,
                    Email: this.state.email,
                    contact: this.state.contact,
                }).then(() => {
                    console.log('User addedd!!!!');
                    this.props.navigation.navigate('Login');
                }).catch((error) => {
                    console.log(error);
                    alert(error);
                });
              
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
        console.log(this.state.username + " " + this.state.email + " " + this.state.password + " " + this.state.contact);
    }}

    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: 17,
            paddingTop: 3,
            paddingRight: 18,
            paddingLeft: 18,
            //fontFamily: "calibri",
            fontSize: 35,
            marginRight: 80,
            height: 60,
            width: 350,
            borderWidth: 6,
            borderColor: "#FFFFFF",
            marginLeft: 55,
            marginBottom: 40,
            marginTop: 20
        }

        const register = {
            //fontFamily: "calibri",
            fontWeight: "bold",
            fontSize: 20,
            color: "#008484"
        }

        return (
            
                <ImageBackground source={require('../assets/back.png')} style={styles.container}>
                {/* <Text style={styles.logo}>P-Indicator</Text> */}
                <Image style={styles.image} source={require('../assets/LOGO.png')} />
                
                {/* <Text style={styles.EText}>Username</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your username..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ username: text })} />
                </View>
                {/* <Text style={styles.EText}>E-mail Id</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Email..."
                        placeholderTextColor="#808080"
                        name='email'
                        onChangeText={text => this.setState({ email: text })} />
                         {this.isFieldInError('email') && this.getErrorsInField('email').map(errorMessage => <Text>{errorMessage}</Text>) }
                </View>
                {/* <Text style={styles.EText}>Password</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Password..."
                        placeholderTextColor="#808080"
                        name='password'
                        secureTextEntry
                        onChangeText={text => this.setState({ password: text })}
                        // {this.getErrorMessages()}
                         />
                        {this.isFieldInError('confirmPassword') && this.getErrorsInField('confirmPassword').map(errorMessage => <Text>{errorMessage}</Text>) }
                        
                </View>
                {/* <Text style={styles.EText}>Contact No</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Enter your Contact number..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ contact: text })} />
                        {this.isFieldInError('contact') && this.getErrorsInField('contact').map(errorMessage => <Text>{errorMessage}</Text>) }
                </View>
                <View>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttonPress}
                >
                    <Text style={styles.buttonTextRegis}>Register</Text>
                </TouchableHighlight>
                <Text>
            {this.getErrorMessages()}
          </Text>
                <Text style={styles.account}>Already have an account?</Text>
                <TouchableHighlight
                    style={styles.buttonSign}
                    underlayColor="white"
                    onPress={this.buttonClick}
                >
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableHighlight>
                </View>
                </ImageBackground>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#008484",
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        //fontFamily: "calibri",
        color: "#ffffff",
        marginBottom: -50,
        marginTop:30,
    },
    inputView: {
        width: "80%",
        backgroundColor: "#ffffff",
        height: 40,
        marginBottom: 20,
        marginTop: 20,
        justifyContent: "center",
        padding: 10
    },
    EText: {
        height: 20,
        fontFamily: "calibri",
        fontSize: 26,
        marginRight: 600,
        fontStyle: "italic",
        color: "#e1e1e1",
        alignItems: 'center',
        padding: 10,
        marginLeft: 10,
        color: "#FFFFFF",
        marginBottom: 15
    },
    inputText: {
        height: 20,
        //fontFamily: "calibri",
        fontSize: 16,
        //    fontStyle: "italic",
        color: "#000000"
    },
    registerBtn: {
        width: "20%",
        backgroundColor: "#5b77e8",
        borderRadius: 10,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 30
    },
    buttonTextRegis:
    {
    fontSize: 20,
    fontWeight: "bold",
    color: '#111',
    alignSelf: 'center',
    color: '#FFFFFF',
    alignItems: "center",
    justifyContent: "center",
    marginRight:44
},

    account: {
        color: "#ffffff",
        //fontFamily: "calibri",
        fontStyle: "italic",
        fontSize: 14,
        marginTop:30,
        marginRight:-15,
        marginBottom:-28,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#5b77e8',
        alignItems: "center",
        justifyContent: "center",
        marginRight:44
    },
    button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"50%",
        flexDirection: 'row',
        backgroundColor: '#5b77e8',
        //borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 6,
        borderColor: "#5b77e8",
        //color: '#008484',
    },
    image:
    {
        width: 165,
        height:170,
        //marginBottom:195,
      marginBottom:55,
      //marginTop:100
    },
    buttonSign:
    {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"50%",
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        //borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 6,
        borderColor: "#FFFFFF", 
    }
});