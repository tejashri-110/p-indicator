import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthServices from './AuthServices';
import As from './AuthServices';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class homepage extends React.Component {
    state = {
        em: this.props.navigation.state.params.n1,
    }


    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
        this.buttonPressmyprof = this.buttonPressmyprof.bind(this);
        this.buttonPressabout = this.buttonPressabout.bind(this);
        this.buttonLogout = this.buttonLogout.bind(this);
        this.buttonbooking = this.buttonbooking.bind(this);
    }
    buttonPress() {
        this.props.navigation.navigate('Destination', { n2: this.state.em });
    }

    buttonPressmyprof() {
        console.log('called');
        this.props.navigation.navigate('MyProfile' , { n2: this.state.em });
    }
    buttonPressabout() {
        console.log('called');
        this.props.navigation.navigate('AboutUs');
    }
    buttonLogout() {
        As.logOut()
            .then(() => {
                console.log('Sign-out successful');
                this.props.navigation.navigate('Login');
            }).catch((error) => {
                console.log(error);
            });
    }
    buttonbooking() {
        console.log('called');
        this.props.navigation.navigate('Bookings');
    }

    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: 17,
            paddingTop: 3,
            paddingRight: 18,
            paddingLeft: 18,
            //fontFamily: "calibri",
            //textalign: 'center',
            fontSize: 200,
            fontWeight: 900,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 50,
            height: 80,
            width: 180,
            borderWidth: 10,
            borderColor: "#FFFFFF",
            marginLeft: 125,
            marginBottom: 40
        }


        return (
            <ImageBackground source={require('../assets/homebg.png')} style={styles.container}>


                
                    
                    <Text style={styles.textHeading}>Home</Text>
                

                <View style={styles.RectangleShapeout}>
                    <View style={styles.inputView} >
                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="white"
                            onPress={this.buttonPress}
                        >
                            <View style={{ flexDirection: "column" }}>
                                <Image style={styles.image} source={require('../assets/booking.png')} />
                                <Text style={styles.buttonText}>Book My Slot</Text>
                            </View>
                        </TouchableHighlight>
                        {/* <View style={styles.space} > */}


                        <TouchableHighlight
                            style={styles.button}

                            underlayColor="white"
                            onPress={this.buttonPressmyprof}
                        ><View style={{ flexDirection: "column" }}>
                                <Image style={styles.image} source={require('../assets/profile.png')} />
                                <Text style={styles.buttonText}>My Profile</Text>
                            </View>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.inputView} >


                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="white"
                            onPressIn={this.buttonPressabout}
                        >
                            <View style={{ flexDirection: "column" }}>
                                <Image style={styles.image} source={require('../assets/about.png')} />
                                <Text style={styles.buttonText}>About Us</Text>
                            </View>
                        </TouchableHighlight>
                        {/* <View style={styles.space} > */}




                        <TouchableHighlight
                            style={styles.button}
                            underlayColor="white"
                            onPress={this.buttonbooking}
                        >
                            <View style={{ flexDirection: "column" }}>
                                <Image style={styles.image} source={require('../assets/my.png')} />
                                <Text style={styles.buttonText}>My Booking</Text>
                            </View>
                        </TouchableHighlight>

                    </View>
                    </View>

                    {/* <View style={styles.RectangleShapedown}></View> */}
                </ImageBackground>
                

        );
    }
}

const styles = StyleSheet.create({
                    container: {
                    flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column"
    },
    RectangleShapeView: {

                    marginTop: -55,
        width: 400,
        height: 100,
        backgroundColor: '#008484',
        //marginBottom: 5,
        //textAlign: "center",
    },
    RectangleShapeout: {

                    marginTop: 130,
        //width: 400,
        //height: 400,
        //backgroundColor: '#',
        //marginBottom: 5,
        alignSelf: "stretch",
        flex:1,
        flexDirection:"column",
        //justifyContent:"
        //textAlign: "center",

        //borderWidth:6,
        //borderColor:'#008484'
    },
    inputView:
    {
        //borderWidth:3,
        borderColor:"#000000",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"stretch",
        //marginLeft: "20%",
        marginBottom:"20%",
        //padding:"2%",
        paddingLeft:"10%"

    },
    RectangleShapedown: {

        width: 400,
        height: 100,
        marginTop: 250,
        backgroundColor: '#008484',
        //textAlign: "center",
        //marginBottom:120
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: 80,
        //marginLeft: 145,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginTop:80,
        //fontFamily: "calibri",
        //paddingTop: 30,
    },
    buttonText: {
                    fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#000000',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        width: "80%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        //marginLeft: "20%",
        //borderColor: 'white',
        //borderWidth: 1,
        //borderRadius: 8,
        //marginBottom: 10,
        //marginTop: 20,
        //flex:2,
        //borderWidth: 6,
        //marginLeft: 100,
        //borderColor: "#FFFFFF",
        color: '#008484',
        //borderLeftWidth:3,
        borderRightWidth:4,
        borderBottomWidth:4,
        borderColor:"#ADADAD",
        //zIndex: 1,
        //position:"absolute"

    },
    space: {
                    width: 20,
        height: 20,
    },
    image:
                {
                    width: 120,
      height:30,
      //marginBottom:60,
      flex:2,
    },
});