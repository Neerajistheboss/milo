import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
const PastAppointment=()=>{

    return(
        <View style={styles.container}>
        <Text>Past</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'gray',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})

export default PastAppointment