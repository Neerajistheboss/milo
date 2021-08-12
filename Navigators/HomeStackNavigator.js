import React from 'react'
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen'
import SpecialityScreen from '../Screens/SpecialityScreen'
import BookingScreen from '../Screens/BookingScreen'
import HospitalScreen from '../Screens/HospitalScreen'
import SearchScreen from '../Screens/SearchScreen'
import VideoCallScreen from '../Screens/VideoCallScreen'
import { Ionicons } from '@expo/vector-icons'
import NewSpecialitySelectScreen from '../Screens/NewSpecialityScreen'
import CitySelector from '../Components/CitySelector'
const Stack=createStackNavigator()

const HomeStackNavigator=({navigation})=>{
    return(
        <Stack.Navigator  initialRouteName="Home" screenOptions={{
                    headerLeft:()=><Ionicons name='menu-sharp' color='#FFF' size={28} style={{margin:10}} onPress={()=>navigation.toggleDrawer()} />,
                    headerRight:()=><CitySelector />
                    
                }}
                    >
            <Stack.Screen name='Home' component={HomeScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='Search' component={SearchScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='SpecialitySelect' component={SpecialityScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='NewSpecialitySelect' component={NewSpecialitySelectScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='HospitalSelect' component={HospitalScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
            <Stack.Screen name='booking' component={BookingScreen} options={{title: 'MiloDoctor',headerStyle: {backgroundColor: '#01d8bb'},headerTintColor: '#fff'}} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator