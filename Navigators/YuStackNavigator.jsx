import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import YuScreen from '../Screens/YuScreen'
import YuContentScreen from '../Screens/YuContentScreen'
const Stack=createStackNavigator()

const ProfileStackNavigator=()=>{
    return(
        <Stack.Navigator  initialRouteName="YuScreen" >
            <Stack.Screen name='YuScreen' component={YuScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='YuContent' component={YuContentScreen} options={{title: 'YuFacts',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator