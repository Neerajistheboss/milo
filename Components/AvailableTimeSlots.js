import React from 'react'
import { Text, View,StyleSheet } from 'react-native'
import NewTimeSlot from './NewTimeSlot'
const AvailableTimeSlots=(props)=>{
    return(
        <View style={styles.availableTimeSlots} >
            <Text style={{fontWeight:'bold',color:'#000'}}>Available TIme Slot</Text>
        <View style={styles.timeSlots} className='row'>
            {props.timeSlots.map((slot,index)=><NewTimeSlot selectedTimeSlotId={props.timeSlotId}  index={index} setSelectedTimeSlotId={props.setTimeSlotId} slot={slot}/>)}
            {props.timeSlots.length==0&&<Text className='p-3' style={{color:'#000'}}>Choose Another Date</Text>}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    availableTimeSlots:{
        borderRadius:10,
        elevation:3,
        margin:3,
        padding:5,
        backgroundColor:"#FFF",
        // overflowX:'scroll'
    },
    timeSlots:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
    }
})
export default AvailableTimeSlots