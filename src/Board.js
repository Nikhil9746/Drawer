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



export default class Board extends Component{

    
    render(){
        return(
            <View style ={styles.container}>
            <View style ={{width :'100%',height:'65%',alignItems:'center',justifyContent:'center'}}>
              <View style ={{ flexDirection :'row',marginTop:70}}>
                <Image source={require('./assets/logo.png')} style={{width:100,height:100}}></Image>
                 <View style ={{marginTop:40}}>
                  <Text style={{fontSize :18}}>Inmakes</Text>
                  <Text style ={{fontSize:22,fontWeight:'bold'}}>Learning Hub</Text>
                 </View>
               </View>
             </View>
             <View style={{width:'100%',height:'35%',backgroundColor:'#070B2E',borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:'center',justifyContent:'center'}}>
             <TextInput style={{width:'80%',height:40,backgroundColor:'grey'}} placeholder='Select board'></TextInput>
                <TextInput style={{width:'80%',height:40,backgroundColor:'grey',marginTop:10}} placeholder='Class'></TextInput>
                <TouchableHighlight style={{width:'60%',height:50, backgroundColor:'green',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:10}}
                onPress={()=>this.props.navigation.navigate('Apptour')}>
                    <Text style={{color:'white'}}>Continue</Text>
                </TouchableHighlight>
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
