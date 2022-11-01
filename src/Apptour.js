import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight
  
}from "react-native"
import { TextInput } from "react-native-gesture-handler";
import { Icon } from 'react-native-elements'



export default class Apptour extends Component{
    render(){
        return(
            <View style={{width:'100%',height:'100%',alignItems:'center'}}>
                <View style={{width:'95%',height:'65%',backgroundColor:'grey',marginTop:10,borderRadius:10}}>

                </View>

                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Text style={{fontWeight:'bold',fontSize:20,marginTop:30}}>App tour title</Text>
                    <Text>App tour description goes here</Text>
                    <TouchableHighlight style={{borderColor:'grey',borderWidth:3,width:65,height:65,alignItems:'center',justifyContent:'center',marginTop:10,borderRadius:10}}>
                   <TouchableHighlight style={{backgroundColor:'green',width:50,height:50,alignItems:'center',justifyContent:'center',borderRadius:10}}
                   onPress={()=>this.props.navigation.navigate('Home')}>
                     <Text style={{fontWeight:'bold'}}>→</Text>
                   </TouchableHighlight>
                   </TouchableHighlight>
                </View>
            


            </View>
        )
    }
}