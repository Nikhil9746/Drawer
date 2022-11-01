import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import Login from './src/Login'
import OTP from "./src/otp";
import Register from "./src/Register";
import Board from "./src/Board";
import Apptour from "./src/Apptour";
import Home from "./src/Home"


const Stack= createStackNavigator()


function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}/>
            <Stack.Screen
            name="OTP"
            component={OTP}
            options={{headerShown:false}}/>
            <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown:false}}/>
            <Stack.Screen
            name="Board"
            component={Board}
            options={{headerShown:false}}/>
            <Stack.Screen
            name="Apptour"
            component={Apptour}
            options={{headerShown:false}}/>
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}/>   

        </Stack.Navigator>
    )
}


export default function App(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}