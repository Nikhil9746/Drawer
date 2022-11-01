import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
  
}from "react-native"
import PhoneInput from "react-native-phone-number-input";


export default class App extends Component{
  render(){
    return(
      <View style ={styles.container}>
        <View style ={{width :'100%',height:'75%',alignItems:'center',justifyContent:'center'}}>
          <View style ={{ flexDirection :'row',marginTop:70}}>
            <Image source={require('./assets/logo.png')} style={{width:100,height:100}}></Image>
             <View style ={{marginTop:40}}>
              <Text style={{fontSize :18}}>Inmakes</Text>
              <Text style ={{fontSize:22,fontWeight:'bold'}}>Learning Hub</Text>
             </View>

          </View>
          <View style={{marginTop:300}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Enter your mobile number</Text>
            <Text>   We will send you an OTP to verify</Text>
          </View>

        </View>
        <View style ={{width:'100%',height:'25%',backgroundColor:'#070B2E',borderTopLeftRadius:20,borderTopRightRadius:20,alignItems:'center',justifyContent:'center'}}>
          <PhoneInput textContainerStyle={{backgroundColor:'#252840'}} countryPickerButtonStyle={{backgroundColor:'#252840'}}></PhoneInput>
          <TouchableHighlight style={{width:'75%',height:60,backgroundColor:'green',borderRadius:10,alignItems:'center',justifyContent:'center',marginTop:10}} 
          onPress={()=>this.props.navigation.navigate('OTP')}><Text style={{color:'white'}}>continue</Text></TouchableHighlight>
          

        </View>

      </View>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    width : '100%',
    height : '100%'
  }
})