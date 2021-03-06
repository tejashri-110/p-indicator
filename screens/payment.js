import { View, Button, Text, Animated, StyleSheet, TouchableHighlight, Share } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { WebView } from 'react-native-webview';
import firebase from '../config';
import React, { Component } from 'react'
import QRCode from 'react-native-qrcode-image';
import { Buffer } from 'buffer';


const util = require('util');
var userA,userD,userT,userS;
var barcode;
global.Buffer = Buffer;
function Home({ navigation }) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#5b77e8" }}>
            <Text style={{ fontWeight: "bold", fontSize: 30, color: "#e1e1e1", marginBottom: 30 }}>P-Indicator Payment</Text>
            <Text style={{ fontSize: 20, color: "#e1e1e1" }}> Total Parking charges of selected slot is </Text>
              <Text style={{ fontSize: 30, color: "#e1e1e1", fontWeight: "bold" }}>₹{userA}</Text>
              <Text style={{ fontSize: 25, color: "#e1e1e1", fontWeight: "bold" }}>Duration: {userD}</Text>
              <Text style={{ fontSize: 25, color: "#e1e1e1", fontWeight: "bold" }}>Entry Time: {userT}</Text>
              <Text style={{ fontSize: 25, color: "#e1e1e1", fontWeight: "bold" }}>Slot: {userS}</Text>
            <View>
                <TouchableHighlight
                    style={styles.Button}
                    underlayColor="white"
                    onPress={() => navigation.navigate('Razor Pay')}
                >
                    <Text style={styles.pay}>Pay Now</Text>
                </TouchableHighlight></View>

              <QRCode
                  value={barcode}
                  size={200}
                  bgColor='#FFFFFF'
                  fgColor='#000000' />

               <Text style={{ marginTop:25, fontSize: 20, color: "#e1e1e1", fontWeight: "bold" }}> Take a screenshot of above QR code</Text>
        </View>
    );
}

function Profile({ navigation }) {
    return <WebView source={{ uri: 'https://rzp.io/l/OqHNiG5lx3' }} />;
}

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: { opacity },
        rightButtonStyle: { opacity },
        titleStyle: { opacity },
        backgroundStyle: { opacity },
    };
};


const Stack = createStackNavigator();
export default class payment extends React.Component {

    state = {
        userAm: '',
        promiseIsResolved: false,
        Dur: this.props.navigation.state.params.p1,
        Time: this.props.navigation.state.params.p2,
        Vehi: this.props.navigation.state.params.p3,
        Slot: this.props.navigation.state.params.p4,
        LocNo: this.props.navigation.state.params.p6,
        Amo: this.props.navigation.state.params.p5,
        Bcode: this.props.navigation.state.params.p7,
        text: 'http://facebook.github.io/react-native/',

    }
    
    render() {
        userA = this.state.Amo;
        userD = this.state.Dur;
        userT = this.state.Time;
        userS = this.state.Slot;
        barcode = this.state.Bcode;

        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
        );
    }
}
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="P-Indicator Payment"
                component={Home}
                options={{
                    headerTintColor: '#5b77e8',
                    headerStyle: { backgroundColor: '#5b77e8' },
                }}
            />
            <Stack.Screen
                name="Razor Pay"
                component={Profile}
                options={{ headerTintColor: 'white', headerStyle: { backgroundColor: '#5b77e8' }, headerStyleInterpolator: forFade }}
            />   
        </Stack.Navigator>
             
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pay: {
        fontSize: 20,
        color: "#5b77e8",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 25,
        fontWeight: "bold",
    //    marginBottom:20,
    },
    Button: {
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        width: "35%",
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 20,
        borderWidth: 6,
        borderColor: "#FFFFFF",
        color: '#008484',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});