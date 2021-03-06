import React,{Component} from 'react';
import{
  AppRegistry,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
// import QRCode from "react-native-qrcode";
import Barcode from "react-native-barcode-builder";


export default class barcode extends Component{
  constructor(){
    super();
    this.state={
      Text_Input:'',
      Text_Output:'',
    }
  }
  getTextInputValue = () =>{
    this.setState({
      Text_Output:this.state.Text_Input
    });
  }
  render(){
    return(
      <View>
        <Text>Url for qrcode</Text>
        <TextInput onChangeText={(text)=>this.setState({Text_Input:text})}
        underlineColorAndroid = "transparent"
        placeholder="Enter your URL"
        />
        <TouchableOpacity onPress={this.getTextInputValue} activeOpacity={0.7} style={styles.button}>
          <Text style={styles.TextStyle}>Generate</Text>
        </TouchableOpacity>
        {/* <QRCode
        value={'samradhni.patil14@gmail.com'}
        size={250}
        /> */}
        <Barcode value="Hello World" format="CODE128" />;
      </View>
    );
  }
}

const styles=StyleSheet.create({
  Container:{
    flex:1,
    margin:10,
    alignItems:'center',
    paddingTop:20
  },
  TextInput:{
    width:'100%',
    height:40,
    borderRadius:10,
    marginBottom:10,
    marginTop:20,
    borderWidth:1,
    borderColor:'#c41f27',
    textAlign:'center'
  },
  TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize:18
  },
  TextTitle:{
    color:'#c41f27',
    textAlign:'center',
  },

});
AppRegistry.registerComponent('navigation', () => barcode);
