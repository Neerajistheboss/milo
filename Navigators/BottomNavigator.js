import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ContactScreen from '../DocPages/ContactScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import SplashScreen from '../Screens/SplashScreen'
import HomeScreen from '../Screens/HomeScreen'
import DrawerNavigator from './DrawerNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileStackNavigator from './ProfileStackNavigator';
import YuStackNavigator from './YuStackNavigator';

const Tab=createBottomTabNavigator()

const BottomNavigator=({ navigation, route })=>{
    const tabBarListeners = ({ navigation, route }) => ({
        tabPress: () => {navigation.navigate(route.name);console.log(route.name,"========================================")}
    });
return(
    // <SafeAreaProvider>
        
    <NavigationContainer>
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
    </Tab.Navigator>
     </NavigationContainer>
    
    // </SafeAreaProvider>
)
}

export default BottomNavigator




