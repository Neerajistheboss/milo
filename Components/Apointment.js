import React, { useState,useEffect } from 'react'
import { Text, View ,TouchableOpacity, Alert} from 'react-native'
import moment from 'moment'


const Appointment=({booking,navigation})=>{
    console.log('booking')
    console.log(booking)
const [cardColorState,setCardColorState]=useState('gray')
    


const cardClassFunc=(bookingDate,bookingTime)=>{
        
    // const bookingD=moment(bookingDate,'dddd Do MMM YYYY').format('YYYY-MM-DD')
    const bookingD=moment(bookingDate).format('YYYY-MM-DD')
    
    const today=moment().format('YYYY-MM-DD')
    
    const isSameOrAfterDate=moment(bookingD).isSameOrAfter(today)
    const isSameDate=moment(bookingD).isSame(today)
    
    console.log('isSameDate',isSameDate)
    console.log('isSameOrAfterDate',isSameOrAfterDate)
    //checking time
    
    
    const time=moment()
    
    const beforeTime=moment(bookingTime,'LT')
    
    const afterTime=moment(moment(bookingTime,'LT').add(15,'minutes'),'LT')
    
    const isbetweenTime=time.isSameOrAfter(beforeTime)&&time.isSameOrBefore(afterTime)
    
    const isAfterTime=time.isAfter(afterTime)
    console.log('isAfterTime',isAfterTime)
    console.log('isbetweenTime',isbetweenTime)
let cardColor='gray'
if(isSameDate&&isbetweenTime) cardColor='green'
else if(isSameOrAfterDate&&!isAfterTime) cardColor='orange'

setCardColorState(cardColor)




}


useEffect(() => {
    let cardTimeOut
cardClassFunc(booking.date,booking.time)
const timeNow=moment()
let appTime=moment(`${booking.date} ${booking.time}`,'YYYY-MM-DD hh:mm A')


const timeToWait=appTime.diff(timeNow)
if(timeToWait>=0){
   
   cardTimeOut= setTimeout(()=>cardClassFunc(booking.date,booking.time),timeToWait)
}
return ()=>clearTimeout(cardTimeOut)
},[])




 



    const videocall=(docId)=>{
        
    if(cardColorState=='gray')
    Alert.alert('Alert','Appointment time already over',[{text:'Okay',style:'default'}])
if(cardColorState=='orange')
    Alert.alert('Alert','Pls try when its Appointment time ',[{text:'Okay',style:'default'}])
if(cardColorState=='green') 
{

    navigation.navigate('VideoCall',{
        docId:docId,
    })
}
	}




    

    return(
        


<TouchableOpacity onPress={()=>{videocall(booking.docID)}} style={{minWidth:300,borderRadius:10,padding:10,margin:10,backgroundColor:cardColorState ,alignItems: 'center'}} >
<Text style={{fontWeight:'bold',margin:5}}>{booking.docName}</Text>
<View style={{borderWidth:1,borderColor:'#FFF',padding:10,borderStyle:'dashed',alignItems: 'center'}}>
<Text style={{fontWeight:'bold'}}>Pls Contact Dr at </Text>
    <Text>{moment(booking.date).format('dddd')}</Text>
    <Text>{moment(booking.date).format('DD/MM/YYYY')}</Text>
    <Text>{booking.time}</Text>

</View>

</TouchableOpacity>
    )

}

export default Appointment