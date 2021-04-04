import React from 'react'
import { StyleSheet,View,Text } from 'react-native'
const UpcomingAppointment=()=>{

    return(
        <View style={styles.container}>
            <Text>UpComing</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-start'
    }
})

export default UpcomingAppointment