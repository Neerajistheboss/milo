import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import ActionSheet from 'react-native-actionsheet';

const Toolbar =({navigation})=>{
    const actionSheet=useRef()
    const cities=["Dhanbad","Jamshedpur","Ranchi","Bokaro","Cancel"]
    const [selectedCity,setSelectedCity]=useState('Dhanbad')
    const showCities = () =>{
        actionSheet.current.show()
    }
    return(
        <View style={styles.toolbar}>
            <View style={styles.togglerBox}><Ionicons name='menu-outline' size={28} color='#FFF' onPress={()=>navigation.openDrawer()}/></View>
            <View style={styles.brandBox}><Text style={styles.brand}>YuMedic</Text></View>
            <View style={styles.location} onPress={showCities}>
                <Text style={styles.city}>{selectedCity}</Text>
                <Ionicons name='location-outline' size={28} color='#FFF' onPress={showCities} />
                <ActionSheet
                ref={actionSheet}
                title='Choose City'
                options={cities}
                cancelButtonIndex={4}
                onPress={index=>{
                    setSelectedCity(cities[index])
                }}
                 />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    toolbar:{
        display:'flex',
        flexDirection:'row',
        height:40,
        backgroundColor:'#01F0D0',
        paddingHorizontal:20,
        paddingVertical:5
    },
    togglerBox:{
    },
    brandBox:{
        paddingHorizontal:20
    },
    brand:{
        fontSize:22,
        fontWeight:'bold',
        color:'#FFF'
    },
    location:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    city:{
        fontSize:18,
        paddingRight:10,
        color:'orange'
    }
})

export default Toolbar 