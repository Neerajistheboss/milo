import React, { useContext, useEffect } from 'react'

import moment from 'moment'
import { AppContext } from '../context/auth-context'
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
const NewDate=(props)=>{
    
    const appData=useContext(AppContext)   
    
    const cardStyle=props.selectedDayOrder==props.index?{backgroundColor:'#28A745', color:'#FFFFFF',}:{}
    
    useEffect(()=>{
        if(props.selectedDayOrder==props.index)
 { 
      appData.setValueFunc('date',(moment(props.WEEKDAY).format('dddd Do MMM YYYY')))
}
    },[props.selectedDayOrder])


    return (
        <TouchableOpacity  style={{...styles.date,...cardStyle}} onPress={()=>props.setSelectedDayOrder(props.index)}>
            <Text style={{color:cardStyle.color||'#000'}}>
            {moment(props.WEEKDAY).format('ddd,DD')}
            </Text>
            <Text style={{color:cardStyle.color||'#000'}}>
            {moment(props.WEEKDAY).format('MMM,YYYY')}
            </Text>
                
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    date: {
        margin:3,
        padding:5,
        borderRadius:5,
        color:"#FFF"
    }
})



export default NewDate

