import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

// import { useHistory } from "react-router-dom"


const SpecialityGrid=()=>{
const [specialities,setSpecialities]=useState([])
// let history = useHistory()
useEffect(()=>{
    fetch('https://admin.milodoctor.com/mobileapi/mobapi.php?f=servicelistbycat&catid=3')
        .then(response=>response.json())
        .then(data=>{console.log(data.results);setSpecialities(data.results)})
},[])

// const handleSpecialitySelect=(sid)=>{
   
// 		history.push({
// 			pathname: '/speciality',
// 			search: `SERVICE_ID=${sid}&uuid=42&CITY=dhanbad`
// 		});
// 	}



return(
    <View>
        <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={specialities} keyExtractor={item => item.SERVICE_ID} renderItem={({item})=>{
        return <View   style={styles.specialityCard}>
            <Image source={{uri:item.SERVICE_IMAGE}} style={{width:50,height:50, borderRadius:50}} alt='service'/>
            <Text style={styles.title}>{item.SERVICE_TITLE}</Text>
        </View>}} />
        </View>
)
}

const styles = StyleSheet.create({
    row: {flex:2
    },
    title: {
        textAlign: "center",
        marginTop:15
    },
    specialityCard:{
        width:120,
        height:120,
        padding:3,
        margin:1,
        textAlign:'center',
        backgroundColor:'#e6fffc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });

export default SpecialityGrid