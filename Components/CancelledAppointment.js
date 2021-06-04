import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
const CancelledAppointment=()=>{

    return(
        <View style={styles.container}>
            <Text>Cancelled</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})

export default CancelledAppointment