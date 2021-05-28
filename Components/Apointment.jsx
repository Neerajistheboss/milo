import React from 'react'
import { Text, View } from 'react-native'
import moment from 'moment'
const Appointment=(props)=>{
    const videocall=(docId,cardClass)=>{
		if(! (cardClass=='bg-success')) return
		history.push({
			pathname: '/prescription',
			search: `docId=${docId}`
		});
	}

    return(
        


<View style={{minWidth:300,borderRadius:10,padding:10,margin:10,backgroundColor:'#00FBE2' ,alignItems: 'center'}} >
<Text style={{fontWeight:'bold',margin:5}}>{props.booking.docName}</Text>
<View style={{borderWidth:1,borderColor:'#FFF',padding:10,borderStyle:'dashed',alignItems: 'center'}}>
<Text style={{fontWeight:'bold'}}>Pls Contact Dr at </Text>
    <Text>{moment(props.booking.date).format('dddd')}</Text>
    <Text>{moment(props.booking.date).format('DD/MM/YYYY')}</Text>
    <Text>{props.booking.time}</Text>
<View onPres={()=>videocall(props.booking.docID,cardClass)}></View>
</View>

</View>
    )

}

export default Appointment

{/* <View style={{minWidth:'300px',borderRadius:'10px'}} >
<Text style={{fontWeight:'bold'}}>{props.booking.docName}</Text>
<View style={{border:'1px dashed white'}}>
<Text style={{fontWeight:'bold'}}>Pls Contact Dr at </Text>
    <Text>{props.booking.date}</Text>
    <Text>{props.booking.time}</Text>
<View onPres={()=>videocall(props.booking.docID,cardClass)}></View>
</View>

</View> */}