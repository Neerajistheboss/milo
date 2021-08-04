import React from 'react'
import { View,Text, TouchableOpacity, Image } from 'react-native'
const NewHospitalCard=(props)=>{
    return(
        <TouchableOpacity onPress={props.clickHandler} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',minHeight:200,marginTop:10,borderRadius:10,backgroundColor:"#FFF",width:'95%',marginLeft:'auto',marginRight:'auto',padding:10}}>
           <View style={{display:'flex',alignItems:'center'}}>

                <Image source={{uri:props.hosp.BANNER}} style={{width:75,height:75,borderRadius:500,border:1,objectFit:'cover'}} />
                <View>
                    <Text>{props.hosp?.TITLE}</Text>
                    <Text  style={{fontSize:10,marginBottom:3}}>{props.hosp?.LOCATION}</Text>
                </View>
           </View>
               
            <Text style={{width:'80%',backgroundColor:"#12ad99",color:'white',borderRadius:5,padding:5,margin:0}}>View Details</Text>
            </TouchableOpacity>
            
    )
}


export default NewHospitalCard