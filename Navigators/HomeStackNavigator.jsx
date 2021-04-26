import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import SpecialityScreen from '../Screens/SpecialityScreen'
import BookingScreen from '../Screens/BookingScreen'
const Stack=createStackNavigator()

const HomeStackNavigator=()=>{
    return(
        <Stack.Navigator  initialRouteName="Home" >
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'MiloDoctor'}} />
            <Stack.Screen name='SpecialitySelect' component={SpecialityScreen} options={{title: 'MiloDoctor'}} />
            <Stack.Screen name='booking' component={BookingScreen} options={{title: 'MiloDoctor'}} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator