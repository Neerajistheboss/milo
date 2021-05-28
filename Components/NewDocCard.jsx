import React from 'react'
import { useContext } from 'react'
import { Button,Image, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../context/auth-context'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NewDoctorCard=(props)=>{
    const appData=useContext(AppContext)    
    const handleDocSelected=async()=>{
        props.bookNow(props.doc.DOCTOR_ID)
       await AsyncStorage.setItem('docSelected',props.doc.NAME)
        appData.setValueFunc('docName',(props.doc.NAME))
    }


    return(
        <View  style={{position:'relative',display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',marginTop:10,minHeight:200,borderRadius:10,backgroundColor:"#FFF",width:'95%',marginLeft:'auto',marginRight:'auto',padding:10}}>
            <View style={{display:'flex',width:'90%',flexDirection:'row',marginBottom:30}}>
            <Image source={{uri:"https://i.ibb.co/P4WYMnD/doctor.png"}} style={{width:75,height:75,borderColor:'blue',borderRadius:50,borderWidth:1,objectFit:'cover',marginRight:10}} />
                <View >
                    <Text>{props.addDr?"Dr. ":""}{props.doc?.NAME}</Text>
                    <Text  style={{fontSize:10,marginBottom:3}}>{props.doc?.EXPERIENCE||2}yrs exp.</Text>
                    <Text>Timing {props.doc?.DOC_TIME}</Text>
                    
                    <Text><Ionicons name={"location"} size={14}  />{props.doc.ADDRESS||"Dhanbad"}</Text>
                </View>
            </View>
            <View style={{width:'80%',alignSelf:'center',borderRadius:100,overflow:'hidden'}}><Button title='Book Now' onPress={handleDocSelected} style={{width:'80%',backgroundColor:"#12ad99",color:'white',border:'0',borderRadius:5,padding:5,margin:0}} /></View>
           {(!(props?.doc?.AVAILABILITY==='undefined'))&& <View style={{position:'absolute',top:5,right:10,}}><Text style={{color:"#00FF00",fontSize:16}}>Booking On</Text></View>}
        </View>
    )
}


export default NewDoctorCard