import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';

const HospitalGrid=(props)=>{
const [hospitals,setHospitals]=useState([])




useEffect(()=>{
    fetch('https://admin.milodoctor.com/mobileapi/mobapi.php?f=shoplist&serviceid=1&type=featured')
        .then(response=>response.json())
        .then(data=>{setHospitals(data.results)})
},[])


const handleHospitalSelect=(hid)=>{
    props.navigation.navigate('HospitalSelect',{
        hid:hid
    })}




return(
    
        <View style={{alignItems:'center'}}>
    <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={hospitals} keyExtractor={item => item.SHOP_ID} renderItem={({item})=>{
        return  <TouchableOpacity onPress={()=>handleHospitalSelect(item.SHOP_ID)}  style={{width:120,padding:3,margin:1,borderRadius:10,backgroundColor:"#e0faf7",justifyContent:'space-between',alignItems:'center',paddingTop:10,paddingBottom:20,minHeight:100}}>
            <FontAwesome5 name='hospital' size={42} color='#008A80'/>
            <Text style={styles.title}>{item.TITLE}</Text>
        </TouchableOpacity>}} />
        </View>
)
}

const styles = StyleSheet.create({
    row: {
    },
    title: {
        textAlign: "center"
    }
  });

export default HospitalGrid