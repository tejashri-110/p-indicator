// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight,Image,ImageBackground} from 'react-native';
import firebase from "../config";
import As from './AuthServices';
import { auth, provider } from '../config';

// let addItem = item => {
//     db.ref('/items').push({
//         name: item
//     });
// };

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.buttonlogin = this.buttonlogin.bind(this);
        this.buttonClick = this.buttonClick.bind(this);
        // this.buttongoogle = this.buttongoogle.bind(this);
        this.buttonforgot = this.buttonforgot.bind(this);
        //this.buttonLogin = this.buttonlogin.bind(this);
        this.dbRefBook = firebase.firestore().collection('Users');
    }
    state = {
        email: "",
        password: "",
        Name:'',
    }    


    buttonlogin =()=>  {
        console.log('called');
        // this.props.navigation.navigate('homepg');

        As.signIn(this.state.email, this.state.password)
            .then((userCredential) => {
                // Signed in
                this.props.navigation.navigate('Home' ,{ n1: this.state.email});
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }
    // buttongoogle() {
    //     auth.signInWithPopup(provider);
    //     this.props.navigation.navigate('homepg');
    // }


    buttonClick() {
        console.log('called');
        this.props.navigation.navigate('Registration');
    }
    buttonforgot() {
        console.log('called');
        this.props.navigation.navigate('ForgotPassword');
    }

    
    // handleChange = e => {
    //     this.setState({
    //         name: e.nativeEvent.text
    //     });
    // };
    // handleSubmit = () => {
    //     addItem(this.state.name);
    //     console.log('Item saved successfully');
    // };

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
            marginBottom: 40
        }

        const loginText = {
            //fontFamily: "calibri",
            fontSize: 18,
            backgroundColor: "#FFFFFF",
            borderColor: "#FFFFFF",
            color: "#008484"
        }

        return (
            // <View style={styles.container}>
                <ImageBackground source={require('../assets/back.png')} style={styles.container}>
                {/* <Text style={styles.logo}>P-Indicator</Text> */}
                <Image style={styles.image} source={require('../assets/LOGO.png')} />
                {/* <Text style={styles.EText}>E-mail Id</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ email: text })} />
                </View>

                {/* <Text style={styles.EText}>Password{"\n\n"}</Text> */}
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#808080"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity
                onPress={this.buttonforgot}>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={styles.buttonlogin}
                    underlayColor="white"
                    onPress={this.buttonlogin}
                >
                    <Text style={styles.buttonTextlogin}>Login</Text>
                </TouchableHighlight>
                {/* <TouchableHighlight
                    style={styles.buttonSignGoogle}
                    underlayColor="white"
                    onPress={this.buttongoogle}
                >
                    <Text style={styles.buttonText}>Sign in With Google</Text>
                </TouchableHighlight> */}

                <Text style={styles.account}>Don't have an account?</Text>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.buttonClick}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableHighlight>
                </ImageBackground>
            // </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#008484",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        resizeMode:"cover",
        //marginLeft:100,
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        width: 250,
        height:50,
        //fontFamily: "calibri",
        color: "#ffffff",
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:15,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#5b77e8',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonTextlogin:
    {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
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
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
    buttonlogin:
    {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"35%",
        flexDirection: 'row',
        backgroundColor: '#5b77e8',
        borderColor: '#5b77e8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 40,
        borderWidth: 6,
        //borderColor: "#008484",
        color: '#008484',
    },
    buttonSignGoogle: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width:"45%",
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
    },
    inputView: {
        width: "75%",
        backgroundColor: "#FFFFFF",
        height: 40,
        marginBottom: 20,
        marginTop: 10,
        justifyContent: "center",
        // borderColor: "#e1e1e1",
        padding: 10
    },
    inputText: {
        height: 20,
        //fontFamily: "calibri",
        fontSize: 20,
        //marginRight: 250,
        fontStyle: "italic",
        color: "#000000",
        alignItems: 'center',
        //padding: 10
    },

    EText: {
        height: 20,
        //fontFamily: "calibri",
        fontSize: 18,
        marginRight: 240 ,
        fontStyle: "italic",
        //color: "#e1e1e1",
        alignItems: 'flex-start',
        //padding: 10,
        color:"#FFFFFF",
        //marginBottom: 10,
    },
    forgot: {
        marginLeft: 220,
        color: "#e1e1e1",
        //fontFamily: "calibri",
        fontSize: 14,
        marginTop:5,
    },
    account: {
        color: "#e1e1e1",
        //fontFamily: "calibri",
        fontStyle: "italic",
        fontSize: 14,
        marginTop:40,
        marginBottom:-20,
    },
    loginBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 20,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 30,
        color: "#008484"
    },
    signUpBtn: {
        width: "20%",
        backgroundColor: "#e1e1e1",
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        marginBottom: 20,
        color: "#008484"
    },
    image:
    {
      width: 165,
      height:170,
      marginBottom:195,
    
    },
        
});