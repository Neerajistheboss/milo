import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
const SpecialityScreen=({navigation})=>{

    //get service id from navigation params
    const serviceId=navigation.state
    console.log(serviceId)
    
    useEffect()
    
    return(
 <View></View>
        // <FlatList numColumns={3} showsVerticalScrollIndicator={false} columnWrapperStyle={styles.row} data={specialities} keyExtractor={item => item.SERVICE_ID} renderItem={({item})=>{
        //     return <TouchableOpacity style={styles.specialityCard} onPress={()=>specialitySelected(item)}>
        //         <Image source={{uri:item.SERVICE_IMAGE}} style={{width:50,height:50, borderRadius:50}} alt='service' />
        //         <Text style={styles.title}>{item.SERVICE_TITLE}</Text>
        //     </TouchableOpacity>}} />
    )
}

const styles=StyleSheet.create({


})


export default SpecialityScreen