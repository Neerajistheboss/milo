import React from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import moment from 'moment'
const Appointment=({booking,navigation})=>{
    const videocall=(docId)=>{
	navigation.navigate('VideoCall',{
        docId:docId,
    })
	}

    return(
        


<TouchableOpacity onPress={()=>videocall(booking.docID)} style={{minWidth:300,borderRadius:10,padding:10,margin:10,backgroundColor:'#00FBE2' ,alignItems: 'center'}} >
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

{/* <View style={{minWidth:'300px',borderRadius:'10px'}} >
<Text style={{fontWeight:'bold'}}>{booking.docName}</Text>
<View style={{border:'1px dashed white'}}>
<Text style={{fontWeight:'bold'}}>Pls Contact Dr at </Text>
    <Text>{booking.date}</Text>
    <Text>{booking.time}</Text>
<View onPres={()=>videocall(booking.docID,cardClass)}></View>
</View>

</View> */}