import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
//import ImagePicker from "react-native-image-picker";
import As from './AuthServices';
import firebase from '../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.buttonLogout = this.buttonLogout.bind(this);
    this.buttonforgot = this.buttonforgot.bind(this);
    //this.buttonChange = this.buttonChange.bind(this);
    this.dbRefBook = firebase.firestore().collection('Users');
}
state = {
 //   photo: null,
    Email:this.props.navigation.state.params.n2,
    UserName:'',
    Contact:'',
  //  email: "",
    password: "",
}
componentDidMount() {
    this.unsubscribe = this.dbRefBook.onSnapshot(this.getCollection)
    //().then((res) => { this.setState({ promiseIsResolved: true }) }));
}

getCollection = (querySnapshot) => {
    const userArrslot = [];
    querySnapshot.forEach((res) => {
        const { Email,UserName,contact } = res.data();
        userArrslot.push({
            Email, UserName, contact
        });
    });
    for (let i = 0; i < userArrslot.length; i++) {
        if (userArrslot[i].Email === this.state.Email) {
            this.setState({
                UserName: userArrslot[i].UserName,
                Contact: userArrslot[i].contact,
            });
        }
    }
}

  buttonLogout(){
    As.logOut()
    .then(() => {
        console.log('Sign-out successful');
        this.props.navigation.navigate('Login');
      }).catch((error) => {
        console.log(error);
      });
      alert("Signed-out successfully");
    }

    // buttonChange(){
    //   //alert("Please check Your Email");
    //    // this.props.navigation.navigate('loginpg');
    //    this.props.navigation.navigate('forgotpg');
    //      As.ForgotPassword(this.state.email).then(function () {
    //     //     // Email sent.
    //      }).catch(function (error) {
    //     //     // An error happened.
    //         console.log(error);
    //     });
    // }
    buttonforgot() {
      console.log('called');
      this.props.navigation.navigate('ForgotPassword');
  }

  render() 
    {
      // if (!this.state.promiseIsResolved) {
      //     return null
      // }
      // else{
          const { photo } = this.state;
          this.componentDidMount();
    return (
      <View style={styles.container}>
        <Text style={styles.profile}>My Profile</Text>
        <View style={styles.RectangleShapeView}>
         {/* <View style={styles.CircleShapeView}>
        <View style= {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         {photo && (
         <Image 
             source={{ uri: photo.uri }}
             style={{ width: 150, height: 150 }}
         />
         )}
        <View><TouchableOpacity style={styles.add} onPress={this.handleChoosePhoto}>+Add photo</TouchableOpacity></View>
        </View> 
        </View>  */}
        <View style={styles.RectangleShapeUp}>
        <Text style={styles.Text}>Username:{this.state.UserName}</Text>
        </View>
        <View style={styles.RectangleShapeIn}>
        <Text style={styles.Text}>E-mail Id:{this.state.Email}</Text>
        </View>
        <View style={styles.RectangleShapeDown}>
        <Text style={styles.Text}>Contact No:{this.state.Contact}</Text>
        </View>
        <TouchableOpacity style={styles.logoutBtn} onPress={this.buttonforgot}>
        <Text style={styles.logout}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutBtn}
        onPress={this.buttonLogout}>
        <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5b77e8",
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile:{
    fontSize: 30,
    //fontFamily: "calibri",
    color: "#ffffff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  // add:{
  //   fontSize: 20,
  //   fontFamily: "calibri",
  //   color: "#000000",
  //   alignSelf:"center",
  //   marginLeft:15,
  // },
  Text:{
    //fontFamily:"calibri",
    fontSize:20,
    fontWeight: "bold",
    marginLeft:5,
    marginBottom:30,
    color:"#000000"
  },
  logoutBtn:{
    width:"50%",
    backgroundColor:"#5b77e8",
    borderRadius:10,
    height:40,
    alignSelf: 'center',
    marginTop:30,
//    marginBottom:20
  },
  logout:{
   // fontFamily:"calibri",
    fontSize:20,
    color:"#ffffff",
    marginTop:5,
    alignSelf: 'center',
    fontWeight: "bold",
  },
  RectangleShapeView: {
    marginTop: 25,
    width: 450,
    height: 580,
    backgroundColor: '#FFFFFF',
    marginBottom: 50,
   // textAlign:"centre",
  },
  RectangleShapeIn:{
  width:350,
  borderColor:"#000000",
  borderWidth:2,
  borderRadius:8,
  height:40,
  marginTop:30,
  alignSelf: 'center',
  },
  RectangleShapeUp:{
    width:350,
    borderColor:"#000000",
    borderWidth:2,
    borderRadius:8,
    height:40,
    marginTop:55,
    alignSelf: 'center',
  },
  RectangleShapeDown:{
    width:350,
    borderColor:"#000000",
    borderWidth:2,
    borderRadius:8,
    height:40,
    marginTop:30,
    marginBottom:120,
    alignSelf: 'center',
    },
});