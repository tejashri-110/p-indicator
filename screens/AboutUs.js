import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight,ScrollView} from 'react-native';

export default class AboutUs extends React.Component {
    render() {

        return (
            <ScrollView>
        <View style={styles.container}>
            <View>
                <Text style={styles.head}>About Us</Text>
            </View>
            <View style={styles.RectangleShapeView}>
                {/* <Text style={styles.logo}>P-Indicator</Text> */}
                <Image style={styles.logoimage} source={require('../assets/LOGO.png')} />
            <View>
                <Text style={styles.contentsUp}>Smart Parking application that helps achieve faster ,easier and denser parking of vehicles</Text>
            </View>
                {/* <Text style={styles.contentsUp}>easier and denser parking of vehicles</Text> */}   
            <View style={styles.RectangleShapeIn}>
                <Image style={styles.image} source={require('../assets/anushka.png')} />
                <Text style={styles.contents}> Name: Anushka Jain</Text>
                <Text style={styles.contents}> E-mail Id: janushka268@gmail.com </Text>
                <Text style={styles.contents}> Currently pursuing 2nd year B.Tech Degree </Text>
                <Text style={styles.contents}>in Information Technology </Text>
                <Text style={styles.contents}> A social person with good communication</Text>
                <Text style={styles.contents}>skills</Text>
            </View>
            <View style={styles.RectangleShapeIn}>
                <Image style={styles.image} source={require('../assets/prach.png')} />
                <Text style={styles.contents}> Name: Prachi Palkar</Text>
                <Text style={styles.contents}> E-mail Id: prachipalkar18@gmail.com </Text>
                <Text style={styles.contents}> Currently pursuing 3rd year B.Tech Degree </Text>
                <Text style={styles.contents}>in Information Technology </Text>
                <Text style={styles.contents}> Keen Learner|Developer|Adaptable </Text>
            </View>
            <View style={styles.RectangleShapeIn}>
                <Image style={styles.image} source={require('../assets/samradhni.png')} />
                <Text style={styles.contents}> Name: Samradhni Patil</Text>
                <Text style={styles.contents}> E-mail Id: patil.samradhni14@gmail.com </Text>
                <Text style={styles.contents}> Currently pursuing 3rd year B.Tech Degree </Text>
                <Text style={styles.contents}>in Information Technology </Text>
                <Text style={styles.contents}> Developer | Learner | Optimistic</Text>
            </View>
            <View style={styles.RectangleShapeIn}>
                <Image style={styles.image} source={require('../assets/teju.jpg')} />
                <Text style={styles.contents}> Name: Tejashri Mitbavkar</Text>
                <Text style={styles.contents}> E-mail Id: mitbavkartejashri@gmail.com </Text>
                <Text style={styles.contents}> Currently pursuing 2nd year B.Tech Degree </Text>
                <Text style={styles.contents}>in Computer Science </Text>
                <Text style={styles.contents}> Inquisitive | Developer | People-person </Text>
            </View>
            <View>
                <Text style={styles.logo2}> For Support: Contact Us</Text>
                <Text style={styles.contents1}> E-mail Id: pindicatorteam@gmail.com </Text>
            </View>
            </View>
        </View>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5b77e8",
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        fontSize: 35,
        //fontFamily: "calibri",
        color: "#ffffff",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop:15
    },
    logo: {
        fontWeight: "bold",
        fontSize: 40,
        //fontFamily: "calibri",
        color: "#FFFFFF",
        alignSelf: 'center',
        marginTop:30,
    },
    logo2: {
        fontWeight: "bold",
        fontSize: 30,
        //fontFamily: "calibri",
        color: "#FFFFFF",
        alignSelf: 'center',
        marginTop:10,
        marginBottom:10,
    },
    image:{
        height:180,
        width:150,
        alignSelf: 'center',
        marginTop:30,
        borderColor:"#000000",
        borderWidth:2,
        marginBottom:10,
    },
    logoimage:
    {
      width: 120,
      height:125,
      marginBottom:5,
    //  marginTop:100,
      justifyContent:"center",
      alignSelf:"center",
    },
    contents: {
       // marginTop:10,
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: 'center',
        color: "#000000",
        justifyContent:"center",
        
    },
    contents1: {
        // marginTop:10,
         fontWeight: "bold",
         fontSize: 20,
         alignSelf: 'center',
         color: "#000000",
         justifyContent:"center",
         marginBottom:10,
         
     },
    contentsUp: {
        marginTop:25,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: 'center',
        color: "#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:20
    },
    contentsDown: {
        marginTop:30,
        fontSize: 20,
        alignSelf: 'center',
        color: "#008484",
        justifyContent:"center",
    },
    RectangleShapeView: {
        marginTop: 25,
        width: 400,
        //height: 00,
        backgroundColor: '#5b77e8',
        //marginBottom: 1000,
        alignContent:"center",
    },
    RectangleShapeIn: {
        marginTop: 35,
       // marginLeft:20,
        width: 370,
        height: 405,
        borderColor: "#FFFFFF",
        borderRadius:15,
        borderWidth:4,
        backgroundColor:"#FFFFFF",
        alignSelf:"center"
    },
    RectangleShapeOut: {
        marginTop: 35,
        marginLeft:20,
        width: 380,
        height: 200,
        borderColor: "black",
        borderRadius:4,
        borderWidth:1,
        alignSelf:"center"
    }
})//any comment