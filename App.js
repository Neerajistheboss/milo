import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import HospitalGrid from './Components/HospitalGrid';
import SpecialityGrid from './Components/SpecilaityGrid';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>
   
   <HomeScreen />
    
  </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:StatusBar.currentHeight

  },
});
