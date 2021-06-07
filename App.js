import React, { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet,Image, Text, View } from 'react-native';
import HospitalGrid from './Components/HospitalGrid'
import SpecialityGrid from './Components/SpecilaityGrid';
import BottomNavigator from './Navigators/BottomNavigator';
import DrawerNavigator from './Navigators/DrawerNavigator';
import AppointmentScreen from './Screens/AppointmentScreen';
import ContactScreen from './DocPages/ContactScreen'
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import { AppContext, AppContextProvider } from './context/auth-context'
import FormikLoginScreen from './Screens/FormikLoginScreen';
import RegisterFormikScreen from './Screens/RegisterFormikScreen';
import { AsyncStorage } from 'react-native';
import { useContext } from 'react';

export default function App() {
    
  return (
    <AppContextProvider>
    {/* <RegisterFormikScreen /> */}
     <StatusBar backgroundColor='#01F0D0' animated={true} />
     <BottomNavigator />
     </AppContextProvider>
     );
    
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:StatusBar.currentHeight

  },
});


const splashStyles=StyleSheet.create({
  container: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    yumedic:{
        fontSize:44,
        fontWeight:'bold',
        color:'#24A6F3',
        marginBottom:50
    },
    presents:{
        fontSize:18,
        fontWeight:'500'
    }
})