import React from 'react'
import { Image, View,Text,StyleSheet } from 'react-native'
const SplashScreen=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.yumedic}>YuMedic</Text>
            <Text style={styles.presents}>PRESENTS</Text>
            <Image source={require('../assets/milodoctor_logo.png')} style={{width:250,resizeMode:'contain'}} alt='logo'/>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      yumedic:{
          fontSize:44,
          fontWeight:'bold',
          color:'#24A6F3',
          marginBottom:50
      },
      presents:{
          fontSize:18,
          fontWeight:'500'
      }
})

export default SplashScreen