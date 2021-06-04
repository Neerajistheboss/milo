import React, { useState } from 'react'
import { View } from 'react-native'
import AvailableDates from './AvailableDates'
import AvailableTimeSlots from './AvailableTimeSlots'


const NewDateAndTimeSlotHolder=(props)=>{
return(
    <View>
        <AvailableDates day={props.selectedDayOrder} setDay={props.setSelectedDayOrder} slots={props.slots} />
        <AvailableTimeSlots timeSlotId={props.timeSlotId} setTimeSlotId={props.setTimeSlotId} timeSlots={props.slots[props.selectedDayOrder].TIME_SLOT.filter(slot=>slot.AVAILABLE_SEAT>0)} />
    </View>
)

}

export default NewDateAndTimeSlotHolder