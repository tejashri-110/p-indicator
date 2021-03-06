import React, { Component } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import barcode from './screens/barcode';
import login from './screens/login';
import homepage from './screens/homepage';
import Bookings from './screens/Bookings';
//import barcode from './screens/barcode';
import publicpark from './screens/publicpark';
import Phoenix from './screens/Phoenix';
import Infinity from "./screens/Infinity";
import forgotpass from './screens/forgotpass';
import Destination from './screens/Destination';
import registration from "./screens/registration";
import bookingDetails from './screens/bookingDetails'
// import Slot from './screens/Slot';
import payment from './screens/payment';
import AboutUs from './screens/AboutUs';
import MyProf from './screens/MyProf';


export class App extends Component {

    constructor(props) {
        super(props);
        this.buttonPress = this.buttonPress.bind(this);
    }

    buttonPress() {
        console.log('called');
        this.props.navigation.navigate('Login');
    }

    render() {

        return (

            <View>
                <button onClick={this.buttonPress}>hay</button>
            </View>
        );
    }
}
const AppStackNavigator = createStackNavigator({
    
        //headerMode: false,
      

    //bar:barcode,    
    Login: login,
    Home:homepage,
    Bookings:Bookings,
    //Barcode:barcode,
    InfinityMap:Infinity,
    PublicParking: publicpark,
    PhoenixMap:Phoenix,
    ForgotPassword:forgotpass,
    Destination:Destination,
    AboutUs:AboutUs,
    MyProfile:MyProf,
    Registration:registration,
    BookingDetails: bookingDetails,
    // Slots: Slot,
    Payment: payment,
})

const Appcont = createAppContainer(AppStackNavigator);

export default Appcont;