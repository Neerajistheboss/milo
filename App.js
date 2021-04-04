import React, { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet,Image, Text, View } from 'react-native';
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
  const [showSplashScreen,setShowSplashScreen]=useState(true)
  const splashContent=(
    <View style={splashStyles.container}>
        <Text style={splashStyles.yumedic}>YuMedic</Text>
        <Text style={splashStyles.presents}>PRESENTS</Text>
        <Image source={require('./assets/milodoctor_logo.png')} style={{width:250,resizeMode:'contain'}} alt='logo'/>
    </View>
)

const changeScreen=()=>{
  setShowSplashScreen(false)
}

useEffect(()=>{
  setTimeout(changeScreen,3000)

},[])
  return (
    <>
    <StatusBar backgroundColor='#01F0D0' animated={true} />
    {showSplashScreen&&splashContent}
    {!showSplashScreen&&<BottomNavigator />}
    </>
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