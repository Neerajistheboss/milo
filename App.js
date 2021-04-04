import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HospitalGrid from './Components/HospitalGrid';
import SpecialityGrid from './Components/SpecilaityGrid';
import BottomNavigator from './Navigators/BottomNavigator';
import DrawerNavigator from './Navigators/DrawerNavigator';
import AppointmentScreen from './Screens/AppointmentScreen';
import ContactScreen from './Screens/ContactScreen';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SplashScreen from './Screens/SplashScreen';

export default function App() {
  return (
    <BottomNavigator />
     );
    // <SafeAreaView style={styles.container} >]\
      {/* <ScrollView showsVerticalScrollIndicator={false} */}
  // showsHorizontalScrollIndicator={false}>
  {/* <HomeScreen /> */}
   {/* </ScrollView> */}
    {/* </SafeAreaView> */}
    
    
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
