import React, { useState } from 'react'
import { View,Text,StyleSheet,ScrollView } from 'react-native'
import NewDate from './NewDate'
const AvailableDates=(props)=>{
    return(
        <View style={styles.availableDates} >
            <Text style={{fontWeight:'bold'}}>Available Dates</Text>
        <ScrollView horizontal={true} style={{display:'flex',flexDirection:'row'}}>
            {props.slots.map((slot,index)=><NewDate selectedDayOrder={props.day} setSelectedDayOrder={props.setDay} WEEKDAY={slot.WEEKDAY} index={index}/>)}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    availableDates:{
        borderRadius:10,
        elevation:3,
        margin:3,
        padding:5,
        backgroundColor:"#FFF",
        // overflowX:'scroll'
    }
})
export default AvailableDates