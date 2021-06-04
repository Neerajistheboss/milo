import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'


const HospitalGrid=(props)=>{
const [hospitals,setHospitals]=useState([])




useEffect(()=>{
    fetch('https://admin.milodoctor.com/mobileapi/mobapi.php?f=shoplist&serviceid=1&type=featured')
        .then(response=>response.json())
        .then(data=>{setHospitals(data.results);console.log(data.results)})
},[])


const handleHospitalSelect=(hid)=>{
    props.navigation.navigate('HospitalSelect',{
        hid:hid
    })}




return(
    
        <View style={{alignItems:'center'}}>
    <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={hospitals} keyExtractor={item => item.SHOP_ID} renderItem={({item})=>{
        return  <TouchableOpacity onPress={()=>handleHospitalSelect(item.SHOP_ID)}  className='col-4'  style={{width:120,padding:3,margin:1,textAlign:'center',borderRadius:10,backgroundColor:"#EEE"}}>
            <Image source={{uri:item.BANNER}} style={{width:80,height:80, borderRadius:50}}/>
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