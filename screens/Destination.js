import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../config';

export default class Destination extends React.Component {

    state = {
        Number: '',
        UName: '',
        mName: '',
        SlotEmpty: '',
        priceC: '',
        priceB: '',
        locNo: '',
        Ema: this.props.navigation.state.params.n2,
    }
    buttoninfinity1 = () => {
        this.setState({
            Number: '1',
            mName: 'Infinity Mall',
            priceC: 50,
            priceB: 30,
            locNo: 1,
        });
    }
    buttonpublicPark2 = () => {
        this.setState({
            Number: '2',
            mName: 'Public Park',
            priceC: 60,
            priceB: 40,
            locNo: 2,
        });
    }
    buttonPhoenix3 = () => {
        this.setState({
            Number: '3',
            mName: 'Phoenix Mall',
            priceC: 45,
            priceB: 25,
            locNo: 3,
        });
    }

    constructor(props) {
        super(props);
        this.buttoninfinity1 = this.buttoninfinity1.bind(this);
        this.buttonpublicPark2 = this.buttonpublicPark2.bind(this);
        this.buttonPhoenix3 = this.buttonPhoenix3.bind(this);
        this.GO = this.GO.bind(this);
        this.dbRefName = firebase.firestore().collection('Users');
        this.dbRef = firebase.firestore().collection('Location');
        this.dbRefBook = firebase.firestore().collection('BookingDet');
        this.dbRefLoc = firebase.firestore().collection('Location');
    }

    // componentDidMount() {
    //     this.unsubscribe = this.dbRefBook.onSnapshot(this.getCollection);
    //     this.unsubscribe1 = this.dbRefName.onSnapshot(this.getCollection1);
    // }

    // getCollection = (querySnapshot) => {
    //     const userArrslot = [];
    //     querySnapshot.forEach((res) => {
    //         const { SlotNo } = res.data();
    //         userArrslot.push({
    //             SlotNo
    //         });
    //     });
    //     this.setState({
    //         SlotEmpty: (9 - userArrslot.length),
    //     });

    // }

    // getCollection1 = (querySnapshot) => {
    //     const userArrName = [];
    //     querySnapshot.forEach((res) => {
    //         const { UserName, Email } = res.data();
    //         userArrName.push({
    //             UserName, Email,
    //         });
    //     });
    //     for (i = 0; i < userArrName.length; i++) {
    //         if (userArrName[i].Email === this.state.Ema) {
    //             this.setState({
    //                 UName: userArrName[i].UserName,
    //             });
    //         }
    //     }
    // }
    GO = () => {
        if(this.state.Number==='')
        {
            alert("Please ,select Your Destination!!")
        }
        else{
            //alert("booking full at " + this.state.mName);
        // else {

        //     // console.log("outer"+this.state.UName);
        //     this.dbRef.add({
        //         Number: this.state.Number,
        //         SlotEmpty: this.state.SlotEmpty,
        //         Name: this.state.UName,
        //     }).then(() => {
            this.props.navigation.navigate('BookingDetails', { pr1: this.state.priceC, pr2: this.state.priceB, l1: this.state.locNo });
        //     }).catch((err) => {
        //         console.error("Error found: ", err);
        //         alert(error);
        //     });
        }

    }


    render() {

        const buttonStylesubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: 10,
            paddingRight: 18,
            paddingLeft: 18,
            //fontFamily: "calibri",
            fontSize: 25,
            // marginRight: "80px",
            height: 40,
            width: 450,
            // marginLeft: 55,
            marginBottom: 20
        }
        const buttonsubmit = {
            color: "#FFFFFF",
            backgroundColor: "#008484",
            paddingBottom: 10,
            paddingRight: 18,
            paddingLeft: 18,
            //fontFamily: calibri,
            fontSize: 30,
            // marginRight: "80px",
            height: 40,
            width: 450,
            marginBottom: 20,
            // marginLeft:155,
            alignItems: 'center',
        }
        const selectText = {
            color: "#5b77e8",
            //fontFamily: "calibri",
            justifyContent: 'center',
            fontSize: 25,
            marginTop:45,
            fontWeight:"bold",
        }
        return (

            <ImageBackground source={require('../assets/desti.png')} style={styles.container}>
                <View>
                    {/* style={styles.RectangleShapeView}> */}
                    <Text style={styles.textHeading}>Destination</Text>
                </View>
                <View >

                    <TouchableOpacity style={styles.button} underlayColor="white" onPress={this.buttoninfinity1}><Text style={styles.buttonText}>Infinity Mall,Malad</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} underlayColor="white"  onPress={this.buttonpublicPark2} ><Text style={styles.buttonText}>Public Park,Goregoan</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button} underlayColor="white"  onPress={this.buttonPhoenix3} ><Text style={styles.buttonText}>Phoenix Mall,Pune</Text></TouchableOpacity>
                </View >

                <Text style={selectText} >
                    Selected Destination:{this.state.mName}
                </Text>
                <View>
                    <TouchableOpacity style={styles.button} onPress={this.GO}><Text style={styles.buttonText}>Next</Text></TouchableOpacity>
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
        flexDirection: "column",
        marginBottom:20,
    },
    RectangleShapeView: {
        width: 400,
        height: 100,
        //marginTop: -55,
        //backgroundColor: '#008484',
        //marginBottom: 90,
        // textAlign: "center",
    },
    RectangleShapedown: {
        // width: "100%",
        // height: 120,
        // marginBottom: 0,
        // backgroundColor: '#008484',
        marginTop: 50,
        width: 400,
        height: 100,
        marginTop: 250,
        //backgroundColor: '#008484',
        //textAlign: "center",
    },
    textHeading: {
        color: "#FFFFFF",
        fontSize: 40,
        fontWeight: "bold",
        //fontFamily: "calibri",
        //paddingTop: 60,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:50,
    },
    buttonText: {
        fontSize: 22,
        fontWeight: "bold",
        alignSelf: 'center',
        color: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        width: "95%",
        flexDirection: 'row',
        backgroundColor: '#5b77e8',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 20,
        borderWidth: 5,
        marginLeft: 15,
        borderColor: "#FFFFFF",
    },
    space: {
        width: 20,
        height: 20,
    },
});