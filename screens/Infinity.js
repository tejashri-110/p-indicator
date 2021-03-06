import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity,ImageBackground } from 'react-native';
import firebase from '../config';
import As from './AuthServices';

export default class Infinity extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dbRef = firebase.firestore().collection('BookingDet');
        this.dbRefLoc = firebase.firestore().collection('Location');
        this.dbRefUID = firebase.firestore().collection('Users');
    }

    state = {
        dur: this.props.navigation.state.params.p1,
        time: this.props.navigation.state.params.p2 + ": " + this.props.navigation.state.params.p3 + "  " + this.props.navigation.state.params.p4,
        vehi: this.props.navigation.state.params.p5,
        pricebike: this.props.navigation.state.params.PR1,
        pricecar: this.props.navigation.state.params.PR2,
        LocationNo: this.props.navigation.state.params.L1,
        barc:'',
        UID:'',
        slot: '',
        amount: '',
        slot1: '',
        slot2: '',
        slot3: '',
        slot4: '',
        slot5: '',
        slot6: '',
        slot7: '',
        slot8: '',
        slot9: '',
        slot10: '',
        // colo:'',
        colo1:'',
        colo2:'',
        colo3:'',
        colo4: '',
        colo5: '',
        colo6: '',
        colo7: '',
        colo8: '',
        colo9: '',
        colo10:'',
    };

    Slot1 = () => {
        this.setState({
            slot: '1',
            slot1: true,
            // colo:'#000000',
        });
    }
    Slot2 = () => {
        this.setState({
            slot: '2',
            slot2: true,
        });
    }
    Slot3 = () => {
        this.setState({
            slot: '3',
            slot3: true,
        });
    }

    Slot4 = () => {
        this.setState({
            slot: '4',
            slot4: true,
        });
    }
    Slot5 = () => {
        this.setState({
            slot: '5',
            slot5: true,
        });
    }
    Slot6 = () => {
        this.setState({
            slot: '6',
            slot6: true,
        });
    }
    Slot7 = () => {
        this.setState({
            slot: '7',
            slot7: true,
        });
    }
    Slot8 = () => {
        this.setState({
            slot: '8',
            slot8: true,
        });
    }
    Slot9 = () => {
        this.setState({
            slot: '9',
            slot9: true,
        });
    }
    Slot10 = () => {
        this.setState({
            slot: '10',
            slot10: true,
        });
    }

    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.dbRef = firebase.firestore().collection('BookingDet');
    // }


    handleSubmit = () => {
        console.log('Item saved successfully');
        if (this.state.vehi === 'Car') {
            this.state.amount =  parseInt(this.state.pricecar) * parseInt(this.state.dur);
        }
        else {
            this.state.amount =parseInt(this.state.pricebike) * parseInt(this.state.dur);
        }

        //console.log(this.state.dur + "  and  " + this.state.time + "  and " + this.state.vehi + " and " + this.state.amount);

        this.dbRef.add({
            Duration: this.state.dur,
            Start: this.state.time,
            TypeOFVehi: this.state.vehi,
            SlotNo: this.state.slot,
            Paid: this.state.amount,
            LocationNo: this.state.LocationNo,
            UID: As.Current().uid,
        }).then((res) => {
            console.log(res.id);
            this.setState({
                barc:res.id,
            });
           this.dbRefLoc.doc("1").update({
               OccupiedSlots: firebase.firestore.FieldValue.arrayUnion(parseInt(this.state.slot)),
           }).then(() => {
            console.log('Item saved successfully');
            this.props.navigation.navigate('Payment', { p1: this.state.dur, p2: this.state.time, p3: this.state.vehi, p4: this.state.slot, p5: this.state.amount, p6: this.state.LocationNo,p7:this.state.barc});
        }).catch((err) => {
            console.error("Error found: ", err);
        });
    }).catch((err) => {
                console.error("Error found: ", err);
            });
    };
    componentDidMount() {
        //this.unsubscribe = this.dbRef.onSnapshot(this.getCollection);
        this.dbRefLoc.doc("1").get().then(res=> {
            console.log(res.data());
            const userArr = res.data().OccupiedSlots;
            for (let i = 0; i < userArr.length; i++) {
                if (userArr[i]=== 1) {
                    this.setState({
                        slot1: true,
                        colo1: '#000000',
                    });
                }
                else if (userArr[i]=== 2) {
                    this.setState({
                        slot2: true,
                        colo2: '#000000',
                    });
                }
                else if (userArr[i] === 3 ) {
                    this.setState({
                        slot3: true,
                        colo3: '#000000',
                    });
                }
                else if (userArr[i] === 4) {
                    this.setState({
                        slot4: true,
                        colo4: '#000000',
                    });
                }
                else if (userArr[i] === 5) {
                    this.setState({
                        slot5: true,
                        colo5: '#000000',
                    });
                }
                else if (userArr[i] === 6) {
                    this.setState({
                        slot6: true,
                        colo6: '#000000',
                    });
                }
                else if (userArr[i] === 7) {
                    this.setState({
                        slot7: true,
                        colo7: '#000000',
                    });
                }
                else if (userArr[i] === 8) {
                    this.setState({
                        slot8: true,
                        colo8: '#000000',
                    });
                }
                else if (userArr[i] === 9) {
                    this.setState({
                        slot9: true,
                        colo9: '#000000',
                    });
                }
                else if (userArr[i] === 10) {
                    this.setState({
                        slot10: true,
                        colo10: '#000000',
                    });
                }
            }
        }).catch((err) => {
            console.error("Error found: ", err);
        });
    }
        
    
        getCollection = (querySnapshot) => {
      //  const userArr = [];
          querySnapshot.forEach((res) => {
          const {SlotNo ,LocationNo} = res.data();
          userArr.push({
            SlotNo,LocationNo
          });
        });
        for (let i = 0; i < userArr.length; i++) {
            if (userArr[i].SlotNo === '1' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot1: true,
                    colo1: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '2' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot2: true,
                    colo2: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '3' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot3: true,
                    colo3: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '4' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot4: true,
                    colo4: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '5' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot5: true,
                    colo5: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '6' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot6: true,
                    colo6: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '7' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot7: true,
                    colo7: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '8' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot8: true,
                    colo8: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '9' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot9: true,
                    colo9: '#000000',
                });
            }
            else if (userArr[i].SlotNo === '10' && userArr[i].LocationNo === 1) {
                this.setState({
                    slot10: true,
                    colo10: '#000000',
                });
            }
        }
    }

        //   for(i=0;i<userArr.length;i++)
        //   {
        //     if(userArr[i].SlotNo === '1') {
        //         this.setState({
        //             slot1: true,
        //             colo1:'#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '2') {
        //         this.setState({
        //             slot2: true,
        //             colo2: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '3') {
        //         this.setState({
        //             slot3: true,
        //             colo3: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '4') {
        //         this.setState({
        //             slot4: true,
        //             colo4: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '5') {
        //         this.setState({
        //             slot5: true,
        //             colo5: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '6') {
        //         this.setState({
        //             slot6: true,
        //             colo6: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '7') {
        //         this.setState({
        //             slot7: true,
        //             colo7: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '8') {
        //         this.setState({
        //             slot8: true,
        //             colo8: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '9') {
        //         this.setState({
        //             slot9: true,
        //             colo9: '#000000',
        //         });
        //     }
        //     else if (userArr[i].SlotNo === '10') {
        //         this.setState({
        //             slot10: true,
        //             colo10: '#000000',
        //         });
        //     }
        //   }
        // }

    render() {

        const buttonStyle1= {
            color: "#5b77e8",
           // backgroundColor: "#5b77e8",
            backgroundColor: this.state.colo1,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle2 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo2,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle3 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo3,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle4 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo4,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle5 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo5,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle6 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo6,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle7 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo7,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle8 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo8,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyle9 = {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo9,
            padding: 22,
            paddingTop: 10,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        const buttonStyleten= {
            color: "#008484",
            // backgroundColor: "#FFFFFF",
            backgroundColor: this.state.colo10,
            padding: 22,
            paddingTop: 10,
            //paddingRight: 18,
            //paddingLeft: 18,
            //fontFamily: "calibri",
            fontSize: 30,
            marginRight: 80,
            height: 60,
            width: 160,
            borderWidth: 6,
            borderColor: "#707070"
        }
        // const buttonStyleten = {
        //     color: "#008484",
        //     backgroundColor: "#FFFFFF",
        //     padding: 17,
        //     paddingTop: 10,
        //     paddingRight: 18,
        //     paddingLeft: 18,
        //     //fontFamily: "calibri",
        //     fontSize: 30,
        //     marginRight: 80,
        //     height: 60,
        //     width: 160,
        //     borderWidth: 6,
        //     borderColor: "#FFFFFF"
        // }
        const buttonStyleentry = {
            color: "#008484",
            backgroundColor: "#008484",
            borderWidth: 6,
            borderColor: "#FFFFFF",
            // padding: 17,
            // paddingTop: 10,
            // paddingRight: 18,
            // paddingLeft: 18,
            // fontFamily: "calibri",
            fontSize: 25,
            marginRight: 80,
            height: 60,
            width: 200,
            marginTop:20
        }
        const buttonStyleGo = {
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                width:"35%",
                flexDirection: 'row',
                backgroundColor: '#5b77e8',
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 8,
                marginBottom: 110,
                marginTop: 20,
                borderWidth: 6,
                borderColor: "#5b77e8",
                color: '#008484',
                marginRight:80,
            }
        const selectText = {
            color: "#FFFFFF",
            //fontFamily: "calibri",
            fontWeight: "bold",
            justifyContent: 'center',
            fontSize: 35,
            //marginTop: 40,
            marginRight: 80,
            //marginBottom:20,
            alignSelf:"center",
            alignItems:"center"
        }
        const selectText2 = {
            color: "#5b77e8",
            //fontFamily: "calibri",
            fontWeight: "bold",
            justifyContent: 'center',
            fontSize: 35,
            //marginTop: 40,
            marginRight: 95,
            marginBottom:40,
            alignSelf:"center"
        }
        return (
            <ImageBackground source={require('../assets/slot.png')} style={styles.container}>
            {/* <View style={styles.container}> */}
                <View style={styles.rowContainer}>
                    <Text style={selectText}>Select Your Slot</Text>
                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity style={buttonStyle1} disabled={this.state.slot1} onPress={this.Slot1}><Text style={styles.buttonText}>Slot 1</Text></TouchableOpacity>

                    <TouchableOpacity style={buttonStyle2} disabled={this.state.slot2} onPress={this.Slot2}><Text style={styles.buttonText}>Slot 2</Text></TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity style={buttonStyle3} disabled={this.state.slot3} onPress={this.Slot3}><Text style={styles.buttonText}>Slot 3</Text></TouchableOpacity>

                    <TouchableOpacity style={buttonStyle4} disabled={this.state.slot4} onPress={this.Slot4}><Text  style={styles.buttonText}>Slot 4</Text></TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity style={buttonStyle5} disabled={this.state.slot5} onPress={this.Slot5}><Text style={styles.buttonText}>Slot 5</Text></TouchableOpacity>

                    <TouchableOpacity style={buttonStyle6} disabled={this.state.slot6} onPress={this.Slot6}><Text style={styles.buttonText}>Slot 6</Text></TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity style={buttonStyle7} disabled={this.state.slot7} onPress={this.Slot7}><Text style={styles.buttonText}>Slot 7</Text></TouchableOpacity>

                    <TouchableOpacity style={buttonStyle8} disabled={this.state.slot8} onPress={this.Slot8}><Text style={styles.buttonText}>Slot 8</Text></TouchableOpacity>

                </View>

                <View style={styles.rowContainer}>

                    <TouchableOpacity style={buttonStyle9} disabled={this.state.slot9} onPress={this.Slot9}><Text style={styles.buttonText}>Slot 9</Text></TouchableOpacity>

                    <TouchableOpacity style={buttonStyleten} disabled={this.state.slot10} onPress={this.Slot10}><Text style={styles.buttonText}>Slot 10</Text></TouchableOpacity>

                </View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={buttonStyleten} disabled={true}><Text style={styles.buttonText}>Entry Gate</Text></TouchableOpacity>
                </View>
                <View style={styles.rowContainer}>
                <Text style={selectText2} >
                    Selected Slot : {this.state.slot}
                </Text></View>
                <View style={styles.rowContainer}>
                    <TouchableOpacity style={buttonStyleGo} onPress={this.handleSubmit}><Text style={styles.buttonText2}>GO</Text></TouchableOpacity>
                </View>
                <StatusBar style="auto" /> 
            {/* </View> */}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b77e8',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        //marginBottom:10,
    },
    rowContainer: {
        margin: -60,
       // marginBottom:100,
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:"center",
        marginTop:10,
        marginLeft:30,
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
    buttonText2: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#FFFFFF',
        alignItems: "center",
        justifyContent: "center",
        //marginRight:40
    },

    // buttonText: {
    //     color: "#008484",
    //     backgroundColor: "#FFFFFF",
    //     //fontFamily: "calibri",
    //     fontSize: 100,
    //     borderColor: "#FFFFFF"
    // }

});