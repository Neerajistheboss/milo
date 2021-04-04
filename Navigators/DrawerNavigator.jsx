import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import SplashScreen from '../Screens/SplashScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
    
        return (
           // <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Splash" component={SplashScreen} />
              </Drawer.Navigator>
            //</NavigationContainer>
    )
    
}


export default DrawerNavigator