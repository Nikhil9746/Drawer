import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
  
}from "react-native"
import { TextInput } from "react-native-gesture-handler";
import PhoneInput from "react-native-phone-number-input";



export default class OTP extends Component{

    
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
               <Text style={{fontWeight:'bold',marginTop:200}}>Verification code</Text>
               <Text>Please type the verification code sent to</Text>
            </View>
             <View style={{width:'100%',height:'25%',backgroundColor:'#070B2E',borderTopRightRadius:20,borderTopLeftRadius:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:10}}>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}} maxLength={1}/>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}}maxLength={1}/>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}}maxLength={1}/>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}}maxLength={1}/>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}}maxLength={1}/>
                    <TextInput style={{width:50,height:50,backgroundColor:'grey',marginRight:10}}maxLength={1}/>
                </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
                <TouchableHighlight style={{width:'60%',height:50,backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:10}}
                onPress={()=>this.props.navigation.navigate('Register')}>
                    <Text style={{color:'white'}}>Resend OTP</Text>
                </TouchableHighlight>
                </View>


        

            
           

             </View>
    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%'
    },
})