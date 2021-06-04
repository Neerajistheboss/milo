import React, { useContext, useEffect } from 'react'

import moment from 'moment'
import { AppContext } from '../context/auth-context'
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native'
const NewTimeSlot=(props)=>{
    const appData=useContext(AppContext)
    const cardStyle=props.selectedTimeSlotId===props.slot.SLOT_ID?{backgroundColor:"#28A745",color:"#FFF"}:{}
    
   
    useEffect(()=>{
        
        if(props.selectedTimeSlotId===props.slot.SLOT_ID)
        {  
             appData.setValueFunc('time',props.slot.TIME)
             
}
    },[props.selectedTimeSlotId])



    return (
        <TouchableOpacity  style={{...styles.timeSlot,...cardStyle}} onPress={()=>props.setSelectedTimeSlotId(props.slot.SLOT_ID)}>
            <View><Text style={{color:cardStyle.color||'#000'}}>{props.slot.TIME}</Text></View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    timeSlot: {
        borderWidth:1,
        borderColor:'#000',
        margin:3,
        padding:5,
        borderRadius:10
    }
})

export default NewTimeSlot