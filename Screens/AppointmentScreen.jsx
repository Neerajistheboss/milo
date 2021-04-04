import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { StyleSheet, View } from 'react-native'
import CancelledAppointment from '../Components/CancelledAppointment'
import PastAppointment from '../Components/PastAppointments'
import UpcomingAppointment from '../Components/UpcomingAppointments'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context'


const Tab = createMaterialTopTabNavigator();

const AppointmentScreen=()=>{
    const insets=useSafeAreaInsets()
    return (
        <NavigationContainer>
        <Tab.Navigator 
        initialRouteName="UpcomingAppointments"
        tabBarOptions={{
            inactiveTintColor:'#CCC',
            activeTintColor:'#00C6AD',
            labelStyle:{fontSize:12},
            style:{backgroundColor:'white',marginTop:insets.top}
        }}
        >
            <Tab.Screen name='Upcoming' component={UpcomingAppointment} />
            <Tab.Screen name='Past' component={PastAppointment} />
            <Tab.Screen name='Cancelled' component={CancelledAppointment} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles=StyleSheet.create({

})

export default AppointmentScreen