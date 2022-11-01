import React,{Component} from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  ScrollView
  
}from "react-native"
import PhoneInput from "react-native-phone-number-input";


export default class App extends Component{
    render(){
        return(
            <View style ={styles.container}>
            
              <View style ={{ flexDirection :'row',marginLeft:30,marginTop:20}}>
                <Image source={require('./assets/logo.png')} style={{width:50,height:50}}></Image>
                 <View>
                  <Text style={{fontSize :18}}>Inmakes</Text>
                  <Text style ={{fontSize:22,fontWeight:'bold'}}>Learning Hub</Text>
                 </View>
                 <TouchableHighlight style={{width:70,height:30,borderWidth:1,borderColor:'green',borderRadius:10,marginLeft:80,marginTop:15,alignItems:'center',justifyContent:'center'}}>
                    <Text>class</Text>
                 </TouchableHighlight>
               </View>
               <View style={{marginLeft:20,marginTop:50}}>
                  <Text>
                     Good morning
                  </Text>
                  <Text style={{fontWeight:'bold',fontSize:22}}>
                   Aaron Taylor
                  </Text>
               </View>
               <View style={{alignItems:'center',justifyContent:"center"}}>
                   <View style={{width:"90%",height:90,backgroundColor:'black',alignItems:'center',borderRadius:10,marginTop:10}}>
                </View>
               </View>
            
            <View style={{flexDirection:'row',marginLeft:10,height:70}} >
              <ScrollView style={{marginTop:10,marginLeft:10,height:40,flexDirection:'row'}}>
              <View style={{flexDirection:'row',marginTop:10,marginLeft:10,height:30}}>
                
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{width:70,height:30,borderColor:'black',borderWidth:1,borderRadius:10,alignItems:'center',justifyContent:'center',marginRight:3}}>
                    <Text>Class</Text>
                </TouchableHighlight>
                </View>
                

              </ScrollView>
              </View>
              <Text style={{fontWeight:'bold',marginLeft:10}}>Recent courses</Text>
              <ScrollView>
              <View style={{height:120.,flexDirection:'row'}}>
                <TouchableHighlight style={{height:120,width:150,borderRadius:5,marginRight:10,marginLeft:5}}>

                    <Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
                </TouchableHighlight>
                <TouchableHighlight style={{height:120,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:120,width:150,borderRadius:5,marginRight:10}}>

<Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:120,width:150,borderRadius:5,marginRight:10}}>

<Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:120,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:120,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:120,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>

              </View>
              </ScrollView>

              <ScrollView>
              <View style={{height:240.,flexDirection:'row',marginTop:10}}>
                <TouchableHighlight style={{height:240,width:150,borderRadius:5,marginRight:10,marginLeft:5}}>

                    <Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
                </TouchableHighlight>
                <TouchableHighlight style={{height:240,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:240,width:150,borderRadius:5,marginRight:10}}>

<Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:120,width:150,borderRadius:5,marginRight:10}}>

<Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:240,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>
<TouchableHighlight style={{height:240,width:150,borderRadius:5 ,marginRight:10}}>

<Image style={{height:240,width:150,borderRadius:5}} source ={require('./assets/video.png')}/>
</TouchableHighlight>

              </View>
              </ScrollView>

           
                
                  
               
             
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