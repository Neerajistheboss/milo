import React, { useContext, useState } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons';
import {View, Modal, Pressable, Text, Button } from 'react-native'
import { AppContext } from '../context/auth-context';
const CitySelector=()=>{
    const [showModal,setShowModal]=useState(false)
    const closeModal=()=>{
    setShowModal(false)
    }
    const appData=useContext(AppContext)
    const cityChangeHandler=(value)=>{
        appData.setValueFunc('city',value)
        setShowModal(false)
    }

    return (
        <View style={{paddingHorizontal:10}}>

        <Pressable style={{flexDirection:'row'}} onPress={()=>setShowModal(true)}>
            <Ionicon name='location' size={22} color='#FFF' />
            <Text style={{color:"#FFF",fontSize:18}}>{appData.values.city}</Text>
        </Pressable>
        <Modal
            transparent={true}
            animationType='none'
            visible={showModal}
            onRequestClose={closeModal}
        >
            <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-end'}}>
                <View style={{backgroundColor:"#FFF",borderRadius:10,overflow:'hidden',marginRight:10,alignItems:'flex-end'}}>
                <View style={{backgroundColor:"#FFF",padding:5,width:150}}><Button onPress={()=>cityChangeHandler("Dhanbad")} title='Dhanbad' color='#00E2CE' /></View>
                <View style={{backgroundColor:"#FFF",padding:5,width:150}}><Button onPress={()=>cityChangeHandler("Bokaro")} title='Bokaro' color='#00E2CE' /></View>
                <View style={{backgroundColor:"#FFF",padding:5,width:150}}><Button onPress={()=>cityChangeHandler("Ranchi")} title='Ranchi' color='#00E2CE' /></View>
                <View style={{backgroundColor:"#FFF",padding:5,width:150}}><Button onPress={()=>cityChangeHandler("Jamshedpur")} title='Jamshedpur' color='#00E2CE' /></View>
                </View>
            </View>
        </Modal>
        </View>
    )
}

export default CitySelector