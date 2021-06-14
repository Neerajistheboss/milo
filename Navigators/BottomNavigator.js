import React from 'react'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ContactScreen from '../DocPages/ContactScreen'
import DrawerNavigator from './DrawerNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import YuStackNavigator from './YuStackNavigator';
import { AsyncStorage } from 'react-native';
import { useState } from 'react';
import AuthStackNavigator from './AuthStackNavigator'
import { useContext } from 'react';
import { AppContext } from '../context/auth-context';
const Tab=createBottomTabNavigator()

const BottomNavigator=({ navigation, route })=>{
    const appData=useContext(AppContext)
    const [userId,setUserId]=useState(null)
    let uid
    AsyncStorage.getItem('user').then(user=>{
        uid=JSON.parse(user)?.USER_ID||appData.values.userId
        setUserId(uid)
    })


    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => {navigation.navigate(route.name)}
    });
return(
    // <SafeAreaProvider>
        
    <NavigationContainer>
    {
        userId?
    <Tab.Navigator
    screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName
            if(route.name==='Home'){
                iconName=focused?'home':'home-outline'
            }
            else if(route.name==='YuFacts'){
                iconName=focused?'heart':'heart-outline'
            }
            
            else if(route.name==='Profile'){
                iconName=focused?'person':'person-outline'
            }
            else if(route.name==='Help'){
                iconName=focused?'help-circle':'help-circle-outline'
            }

            return<Ionicons name={iconName} size={size} color={color} />
        }
    })}
    >
      <Tab.Screen name="Home" component={DrawerNavigator} options={{unmountOnBlur:true}}/>
      <Tab.Screen name="YuFacts" component={YuStackNavigator} options={{unmountOnBlur:true}}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{unmountOnBlur:true}}/>
      <Tab.Screen name="Help" component={ContactScreen} />
    </Tab.Navigator>:
    <AuthStackNavigator />
    }
     </NavigationContainer>
    
    // </SafeAreaProvider>
)
}

export default BottomNavigator




