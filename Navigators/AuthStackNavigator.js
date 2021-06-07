import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FormikLoginScreen from '../Screens/FormikLoginScreen'
import RegisterFormikScreen from '../Screens/RegisterFormikScreen'
const Stack=createStackNavigator()

const ProfileStackNavigator=()=>{
    return(
        <Stack.Navigator  initialRouteName="Login" >
            <Stack.Screen name='Login' component={FormikLoginScreen} options={{title: 'Login',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='Register' component={RegisterFormikScreen} options={{title: 'Register',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
        </Stack.Navigator>
    )
}

export default ProfileStackNavigator