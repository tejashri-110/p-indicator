import React from 'react';
import { StyleSheet, Text, View ,ScrollView } from 'react-native';
import firebase from '../config';
import As from './AuthServices';
var user1, user2, user3, user4, user5, user6;

export default class Bookings extends React.Component {


    state = {
        promiseIsResolved: false,
    }
    constructor(props) {
        super(props);
        this.dbRefBook = firebase.firestore().collection('BookingDet');
    }

    componentDidMount() {
        this.getRestaurants().then((res) => { this.setState({ promiseIsResolved: true }) })
    }

    getRestaurants = async () => {
        try {
            const userArrslot = [];
            const userArrslotNo = [];
            const userArrStart = [];
            const userArrDuration = [];
            const userArrAmount = [];
            const userArrVehi = [];
            var snapshot = await this.dbRefBook.get();
            console.log("Here");
            snapshot.forEach((doc) => {
                userArrslot.push(doc.data().UID);
                userArrslotNo.push(doc.data().SlotNo);
                userArrStart.push(doc.data().Start);
                userArrDuration.push(doc.data().Duration);
                userArrAmount.push(doc.data().Paid);
                userArrVehi.push(doc.data().TypeOFVehi);
            });
            user1 = userArrslot;
            user2 = userArrslotNo;
            user3 = userArrStart;
            user4 = userArrDuration;
            user5 = userArrAmount;
            user6 = userArrVehi;
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        if (!this.state.promiseIsResolved) {
            return null
        }
        else {
            var payments = [];

            if (user1.length === 0) {
                payments.push("No Current Bookings");
            }
            else {
                for (let i = 0; i < user1.length; i++) {
                    if (user1[i] === As.Current().uid) {
                        payments.push(
                            <View key={i} style={styles.background}>
                                {/* // <View style={styles.background}> */}
                                <Text style={styles.contents}>Booking {i + 1}</Text>
                                <Text>Vehicle: {user6[i]}</Text>
                                <Text>Slot NO: {user2[i]}</Text>
                                <Text>Entry: {user3[i]}</Text>
                                <Text>Duration: {user4[i]}</Text>
                                <Text>Amount: {user5[i]}</Text>
                                <Text></Text>
                                {/* // </View> */}
                            </View>
                        )
                    }
                }
            }


            return (
                <ScrollView>
                <View style={styles.container}>
                <View>
                <Text style={styles.head}>Your Bookings</Text>
            </View>
                    <View style={styles.selectText}>{payments}</View>
                </View>
                </ScrollView>
            )

        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5b77e8",
        //justifyContent:"center",
        alignItems: "center",
        flexDirection: "column",
    },
    contents: {
        // marginTop:10,
         fontWeight: "bold",
         fontSize: 20,
         alignSelf: 'center',
         color: "#000000",
         justifyContent:"center",
         
     },
    selectText: {
        color: "#FFFFFF",
        // fontFamily: "calibri",
        fontSize: 30,
        //borderColor: "#000000",
        //borderWidth: 2,
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
        //marginRight: 65,
        alignItems: "center",
        justifyContent: "center"
    },
    head: {
        fontSize: 35,
        //fontFamily: "calibri",
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop:15
    },
    background:
    {
        marginTop: 25,
       // width: 400,
        //height: 00,
        alignSelf: "stretch",
        backgroundColor: '#FFFFFF',
        //marginBottom: 1000,
        marginLeft:20,
        marginRight:20,
        //alignContent: "center",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-evenly",
        

    }
});