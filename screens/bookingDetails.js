import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-community/picker';
import RadioForm from 'react-native-simple-radio-button';
import { db } from '../config';
import ValidationComponent from 'react-native-form-validator';
import firebase from '../config';

var TypeOfVehi =
    [
        { label: "  Car            ", value: "Car" },
        { label: "  Bike", value: "Bike" },
    ];


export default class bookingDetails extends React.Component {

    constructor(props) {
        console.log('hellooo');
        super(props);
        this.dataSubmit = this.dataSubmit.bind(this);
        this.dbRef = firebase.firestore().collection('BookingDet');
    }

    state = {
        priceb: this.props.navigation.state.params.pr1,
        pricec: this.props.navigation.state.params.pr2,
        LocNo: this.props.navigation.state.params.l1,
        timeDur: '',
        timehr: '',
        timemin: '',
        timeap: '',
        vehitype: '',
        endtime: '',
        loc:'',
    }
    EndTime = (item1, item2, item3, item4) => {
        if ((item1 === 1 && item2 === 11 && item4 == 'PM') || (item1 === 2 && item2 === 10 && item4 === 'PM') || (item1 === 3 && item2 === 9 && item4 === 'PM')) {
            this.setState({ endtime: '12 : ' + item3 + "AM" })
        }
        else if ((item1 === 1 && item2 === 11 && item4 === 'AM') || (item1 === 2 && item2 === 10 && item4 === 'AM') || (item1 === 3 && item2 === 9 && item4 === 'AM')) {
            this.setState({ endtime: '12 : ' + item3 + "PM" })
        }
        else if ((item1 === 2 && item2 === 11 && item4 === 'PM') || (item1 === 3 && item2 === 10 && item4 === 'PM') || (item1 === 1 && item2 === 12 && item4 === 'PM')) {
            this.setState({ endtime: '01 : ' + item3 + "AM" })
        }
        else if ((item1 === 2 && item2 === 11 && item4 === 'AM') || (item1 === 3 && item2 === 10 && item4 === 'AM') || (item1 === 1 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '01 : ' + item3 + "PM" })
        }
        else if ((item1 === 3 && item2 === 11 && item4 === 'PM') || (item1 === 2 && item2 === 12 && item4 === 'PM')) {
            this.setState({ endtime: '02 : ' + item3 + "AM" })
        }
        else if ((item1 === 3 && item2 === 11 && item4 === 'AM') || (item1 === 2 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '02 : ' + item3 + "PM" })
        }
        else if ((item1 === 3 && item2 === 12 && item4 === 'PM')) {
            this.setState({ endtime: '03 : ' + item3 + "AM" })
        }
        else if ((item1 === 3 && item2 === 12 && item4 === 'AM')) {
            this.setState({ endtime: '03 : ' + item3 + "PM" })
        }
        else {
            this.setState({ endtime: (item1 + item2) + ' : ' + item3 + " " + item4 })
        }
    }
    TimeDur = (td) => {
        this.setState({ timeDur: td })
    };
    Timehr = (th) => {
        this.setState({ timehr: th })
    };
    Timemin = (tm) => {
        this.setState({ timemin: tm })
    };
    Timeap = (tap) => {
        this.setState({ timeap: tap })
        this.EndTime(parseInt(this.state.timeDur), parseInt(this.state.timehr), this.state.timemin, tap)
        if (this.state.LocNo === 1)
        {
            this.setState({ loc:'InfinityMap' });
        }
        else if (this.state.LocNo === 2) {
            this.setState({ loc: 'PublicParking' });
        }
        else if (this.state.LocNo === 3) {
            this.setState({ loc: 'PhoenixMap' });
        }
        else{
            alert("Please Select your destination!!")
        }
    };
    VehiType = (VT) => {
        this.setState({ vehitype: VT })
    }

    dataSubmit() {

        if(this.state.timehr==='' || this.state.timeDur=== '' || this.state.vehitype==='' || this.state.timemin==='' || this.state.timeap==='')
        {
            alert("Please ,fill up all the fields")
        }
        else{
       
        this.props.navigation.navigate(this.state.loc, { p1: this.state.timeDur, p2: this.state.timehr, p3: this.state.timemin, p4: this.state.timeap, p5: this.state.vehitype, PR1: this.state.priceb, PR2: this.state.pricec, L1: this.state.LocNo});
    
        // this.props.navigation.navigate('Slots', { p1: this.state.timeDur, p2: this.state.timehr, p3: this.state.timemin, p4: this.state.timeap, p5: this.state.vehitype, PR1: this.state.priceb, PR2: this.state.pricec, L1: this.state.LocNo });

        // console.log("succeded")
        // });        
    }
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
            fontSize: 35,
            marginRight: 80,
            height: 60,
            width: 350,
            borderWidth: 6,
            borderColor: "#FFFFFF",
            marginLeft: 55,
            marginBottom: 40
        }


        return (

            <ImageBackground source={require('../assets/bookingDetails.png')} style={styles.container}>
                <Text style={styles.textHeading}>Booking Details</Text>
                <View style={styles.RectangleShapeView}>
                    <View>
                        <Text style={styles.texttypevehi}>Type of Vehicle</Text>
                        <RadioForm style={styles.dropdown}
                            radio_props={TypeOfVehi}
                            initial={2}
                            onPress={(value) => { this.setState({ vehitype: value }) }}
                            buttonSize={10}
                            buttonColor={"#5b77e8"}
                            buttonOuterSize={20}
                            selectedButtonColor={"#000000"}
                            labelStyle={{ fontSize: 20, color: "#000000" }}
                            disable={true}
                            formHorizontal={true}
                        ></RadioForm></View>
                    <View>
                        <Text style={styles.texttypevehi}>Time Duration</Text>
                        <View style={styles.pickeratt} >
                            <Picker selectedValue={this.state.timeDur} onValueChange={this.TimeDur}>
                                <Picker.Item label="Select Time Duration" value="0" />
                                <Picker.Item label="1 hour" value="1" />
                                <Picker.Item label="2 Hours" value="2" />
                                <Picker.Item label="3 Hours" value="3" />
                            </Picker>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.texttypevehi}>Starting Time</Text>
                        <View style={styles.rowalightime} >
                            <View style={styles.pickerhour} >
                                <Picker selectedValue={this.state.timehr} onValueChange={this.Timehr}>
                                    <Picker.Item label="Hour" value="0"></Picker.Item>
                                    <Picker.Item label="01" value="01"></Picker.Item>
                                    <Picker.Item label="02" value="02"></Picker.Item>
                                    <Picker.Item label="03" value="03"></Picker.Item>
                                    <Picker.Item label="04" value="04"></Picker.Item>
                                    <Picker.Item label="05" value="05"></Picker.Item>
                                    <Picker.Item label="06" value="06"></Picker.Item>
                                    <Picker.Item label="07" value="07"></Picker.Item>
                                    <Picker.Item label="08" value="08"></Picker.Item>
                                    <Picker.Item label="09" value="09"></Picker.Item>
                                    <Picker.Item label="10" value="10"></Picker.Item>
                                    <Picker.Item label="11" value="11"></Picker.Item>
                                    <Picker.Item label="12" value="12"></Picker.Item>
                                </Picker>
                            </View>
                            <View style={styles.pickermin} >
                                <Picker selectedValue={this.state.timemin} onValueChange={this.Timemin}>
                                    <Picker.Item label="Min" value="0"></Picker.Item>
                                    <Picker.Item label="00" value="00"></Picker.Item>
                                    <Picker.Item label="15" value="15"></Picker.Item>
                                    <Picker.Item label="30" value="30"></Picker.Item>
                                    <Picker.Item label="45" value="45"></Picker.Item>
                                </Picker>
                            </View>
                            <View style={styles.pickerAMPM} >
                                <Picker selectedValue={this.state.timeap} onValueChange={this.Timeap}>
                                    <Picker.Item label="Period" value="0"></Picker.Item>
                                    <Picker.Item label="AM" value="AM"></Picker.Item>
                                    <Picker.Item label="PM" value="PM"></Picker.Item>
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.texttypevehi}>Ending Time</Text>
                        <View style={styles.pickerend}>
                            <Text style={{fontSize:25}}>{(parseInt(this.state.timehr) + parseInt(this.state.timeDur)) + " : " + this.state.timemin + "  " + this.state.timeap}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={this.dataSubmit}><Text style={styles.buttonText}>Choose your slot</Text></TouchableOpacity>

                </View>
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

    },
    rowContainer: {
        margin: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 2,
        marginLeft: 80,
        marginTop: 100,
        marginBottom: 70
    },
    buttoncontainer: {
        backgroundColor: "#1abc9c",
        paddingVertical: 10,
        justifyContent: 'center'
    },
    RectangleShapeView: {

        marginTop: 35,
        //width: 450,
        alignSelf: "stretch",
        //height: 200,
        backgroundColor: '#FFFFFF',
        marginBottom: 30,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20,
        //borderWidth:10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    texttypevehi: {
        color: "#5b77e8",
        // marginTop: 15,
        fontSize: 30,
        fontWeight: "bold",
        //alignItems:"center",
        alignSelf:"center",
        //fontFamily: "calibri",
        //paddingLeft: 80,
        //height:40,
        //flex:1,
        //paddingBottom: 10
    },
    textTime: {
        color: "#5b77e8",
        fontSize: 30,
        //fontFamily: "calibri",
        paddingLeft: 30,

        paddingBottom: 10
    },
    textHeading: {
        color: "#ffffff",
        fontSize: 40,
        //marginLeft:145,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: -15,
        marginTop:10,
        //fontFamily: "calibri",

    },
    pickeratt: {
        color: '#5b77e8',
        backgroundColor: "#ffffff",
        fontSize: 30,
        //fontFamily: "calibri",
        width: 250,
        height: 50,
        //marginLeft: 80,
        marginTop: 10,
        borderColor: '#5b77e8',
        borderWidth: 1,
        alignSelf:"center"
    },
    pickerhour: {
        color: '#5b77e8',
        backgroundColor: "#FFFFFF",
        fontSize: 50,
       marginLeft:5,
        flex: 1,
        marginTop: 10,
        height: 40,
        borderColor: '#5b77e8',
        borderWidth: 1,
        //alignItems:"center"
    },
    pickermin: {
        color: '#5b77e8',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        flex: 1,
        height: 40,
        marginTop: 10,
        borderColor: '#5b77e8',
        borderWidth: 1,
        marginLeft:7,
        marginRight:7,
        //alignItems:"center"
    },
    pickerend: {
        color: '#5b77e8',
        backgroundColor: "#FFFFFF",
        fontSize: 60,
        fontWeight:"bold",
        width: 175,
        marginLeft: 102,
        height: 40,
       // marginLe: 120,
        borderColor: '#5b77e8',
        borderWidth: 1,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
    },
    pickerAMPM: {
        color: '#5b77e8',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        flex: 1,
        height: 40,
        marginTop: 10,
        borderColor: '#5b77e8',
        borderWidth: 1,
        marginRight:5,
    },
    dropdown: {
        color: '#5b77e8',
        backgroundColor: "#FFFFFF",
        fontSize: 25,
        //fontFamily: "calibri",
        marginLeft: 85,
        marginTop: 20,
    },
    rowalightime: {
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 2,
    },
    buttontext: {
        //textAlign: "center",
        color: "#ecf0f1",
        fontSize: 20,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#111',
        alignSelf: 'center',
        color: '#ffffff',
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 70,
        alignItems: "center",
        alignSelf:"center",
        justifyContent: "center",
        width: "50%",
        flexDirection: 'row',
        backgroundColor: '#5b77e8',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        //marginBottom: 10,
        //marginTop: 20,
        borderWidth: 6,
       // marginLeft: 110,
        //marginBottom: 20,
        borderColor: "#5b77e8",
        color: '#5b77e8',
    },

});