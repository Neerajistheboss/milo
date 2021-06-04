import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import SpecialityScreen from '../Screens/SpecialityScreen'
import BookingScreen from '../Screens/BookingScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import SuccessScreen from '../Screens/SuccessScreen'
const Stack=createStackNavigator()

const ProfileStackNavigator=()=>{
    return(
        <Stack.Navigator  initialRouteName="Profile" >
            <Stack.Screen name='Profile' component={ProfileScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='Appointments' component={SuccessScreen} options={{title: 'MiloDoctor',headerStyle: {
            backgroundColor: '#01d8bb'
          },headerTintColor: '#fff',}} />
            {/* <Stack.Screen name='EditProfile' component={BookingScreen} options={{title: 'MiloDoctor'}} /> */}
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator