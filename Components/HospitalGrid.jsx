import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'


const HospitalGrid=()=>{
const [hospitals,setHospitals]=useState([])




useEffect(()=>{
    fetch('https://admin.milodoctor.com/mobileapi/mobapi.php?f=shoplist&serviceid=1&type=featured')
        .then(response=>response.json())
        .then(data=>{setHospitals(data.results);console.log(data.results)})
},[])


// const handleSpecialitySelect=(hid)=>{
//     history.push({
//         pathname: '/hospital',
//         search: `SHOP_ID=${hid}`
//     });
// }




return(
    
        <View style={{alignItems:'center'}}>
    <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={hospitals} keyExtractor={item => item.SHOP_ID} renderItem={({item})=>{
        return  <View  className='col-4'  style={{width:120,padding:3,margin:1,textAlign:'center',borderRadius:10,backgroundColor:"#EEE"}}>
            <Image source={{uri:item.BANNER}} style={{width:80,height:80, borderRadius:50}}/>
            <Text style={styles.title}>{item.TITLE}</Text>
        </View>}} />
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