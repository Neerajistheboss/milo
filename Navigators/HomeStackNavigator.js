import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import SpecialityScreen from '../Screens/SpecialityScreen'
import BookingScreen from '../Screens/BookingScreen'
import HospitalScreen from '../Screens/HospitalScreen'
const Stack=createStackNavigator()

const HomeStackNavigator=()=>{
    return(
        <Stack.Navigator  initialRouteName="Home" >
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='SpecialitySelect' component={SpecialityScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='HospitalSelect' component={HospitalScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='booking' component={BookingScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator