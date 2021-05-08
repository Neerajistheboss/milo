import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../Screens/HomeScreen'
import SplashScreen from '../Screens/SplashScreen'
import ContactScreen from '../Screens/ContactScreen'
import { Ionicons } from '@expo/vector-icons';
import DataScreen from '../Screens/DataScreen'
import HomeStackNavigator from './HomeStackNavigator'

const Drawer = createDrawerNavigator()

const DrawerNavigator=()=>{
    
        return (
           // <NavigationContainer>
              <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen options={{title: 'Homes',drawerIcon:({focused,size})=>(<Ionicons name='home-outline' size={18}  style={{margin:0}}/>)}} name="Homes" component={HomeStackNavigator} />
                <Drawer.Screen options={{title: 'About Us',drawerIcon:({focused,size})=>(<Ionicons name='trophy-outline' size={18} style={{margin:0}} />)}} name="About Us" component={DataScreen} />
                {/* <Drawer.Screen options={{title: 'Testimonials',drawerIcon:({focused,size})=>(<Ionicons name='people-outline' size={18} style={{margin:0}} />)}} name="Testimonials" component={HomeScreen} /> */}
                <Drawer.Screen options={{title: 'Contact Us',drawerIcon:({focused,size})=>(<Ionicons name='mail-outline' size={18} style={{margin:0}} />)}} name="Contact Us" component={DataScreen} />
                <Drawer.Screen options={{title: 'Disclaimer',drawerIcon:({focused,size})=>(<Ionicons name='alert-circle-outline' size={18} style={{margin:0}} />)}} name="Disclaimer" component={DataScreen} />
                <Drawer.Screen options={{title: 'Help & Support',drawerIcon:({focused,size})=>(<Ionicons name='help-circle-outline' size={18} style={{margin:0}} />)}} name="Help & Support" component={DataScreen} />
                <Drawer.Screen options={{title: 'Terms & Conditions',drawerIcon:({focused,size})=>(<Ionicons name='lock-closed-outline' size={18} style={{margin:0}} />)}} name="Terms & Conditions" component={DataScreen} />
                <Drawer.Screen options={{title: 'Refund Policy',drawerIcon:({focused,size})=>(<Ionicons name='card-outline' size={18} style={{margin:0}} />)}} name="Refund Policy" component={DataScreen} />
                <Drawer.Screen options={{title: 'Privacy Policy',drawerIcon:({focused,size})=>(<Ionicons name='shield-checkmark-outline' size={18} style={{margin:0}} />)}} name="Privacy Policy" component={DataScreen} />
                <Drawer.Screen options={{title: 'Logout',drawerIcon:({focused,size})=>(<Ionicons name='log-out-outline' size={18} style={{margin:0}} />)}} name="Logout" component={HomeScreen} />
               </Drawer.Navigator>
            //</NavigationContainer>
    )
    
}


export default DrawerNavigator