import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const SpecialityGrid=({navigation})=>{
const [specialities,setSpecialities]=useState([])
// let history = useHistory()
useEffect(()=>{
    fetch('https://admin.milodoctor.com/mobileapi/mobapi.php?f=servicelistbycat&catid=3')
        .then(response=>response.json())
        .then(data=>{
            const cc={
                "SRVCAT_ID": "3",
                "SERVICE_ID": "Covid Consultation",
                "SERVICE_TITLE": "Covid Consultation",
                "SERVICE_ICON": "https://i.ibb.co/dQPBG67/cc.png",
                "SERVICE_IMAGE": "https://i.ibb.co/dQPBG67/cc.png",
                "SERVICE_DESCRIPTION": "Covid Consultation",
                "SERVICE_FOR": "All",
                "STATUS": "1",
                "type":"new"
            }
            const mh={
                "SRVCAT_ID": "3",
                "SERVICE_ID": "Mental Health",
                "SERVICE_TITLE": "Mental Health",
                "SERVICE_ICON": "https://i.ibb.co/D9FjcVJ/mh.png",
                "SERVICE_IMAGE": "https://i.ibb.co/D9FjcVJ/mh.png",
                "SERVICE_DESCRIPTION": "Mental Health",
                "SERVICE_FOR": "All",
                "STATUS": "1",
                "type":"new"
            }
            const oc={
                "SRVCAT_ID": "3",
                "SERVICE_ID": "Oncology",
                "SERVICE_TITLE": "Oncology",
                "SERVICE_ICON": "https://i.ibb.co/CMJNhmL/oc.png",
                "SERVICE_IMAGE": "https://i.ibb.co/CMJNhmL/oc.png",
                "SERVICE_DESCRIPTION": "Oncology",
                "SERVICE_FOR": "All",
                "STATUS": "1",
                "type":"new"
            }
            setSpecialities([cc,mh,...data.results,oc])
        })
},[])


const handleSpecialitySelected=(item)=>{
if(item.type=='new'){
    navigation.navigate('NewSpecialitySelect',{
        sid:item.SERVICE_ID
    })
}
else {
    navigation.navigate('SpecialitySelect',{
        sid:item.SERVICE_ID
    })
}

}

return(
    <View style={{alignItems:'center'}}>
        <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={specialities} keyExtractor={item => item.SERVICE_ID} renderItem={({item})=>{
        return <TouchableOpacity style={styles.specialityCard} onPress={()=>handleSpecialitySelected(item)}>
            <Image source={{uri:item.SERVICE_IMAGE}} style={{width:50,height:50, borderRadius:50,resizeMode:'contain'}} alt='service' />
            <Text style={styles.title}>{item.SERVICE_TITLE}</Text>
        </TouchableOpacity>}} />
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