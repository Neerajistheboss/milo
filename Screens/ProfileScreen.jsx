import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet,TouchableOpacity , View,Text, Dimensions, Image, Button } from 'react-native'
const ProfileScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{width:'100%',display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../assets/user.png')} style={{width:100,resizeMode:'contain',borderRadius:100}} alt='logo'/>
            </View>


            <View style={{...styles.card,paddingHorizontal:'5%'}} >
                
                <TouchableOpacity onPress={()=>{navigation.navigate('Appointments')}}  style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="reader-outline"  size={16} color='gray'/>
                    <Text style={styles.detail}>Appointments</Text>
                    <Text style={styles.arrow}>></Text>
                </TouchableOpacity >
                <TouchableOpacity  style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="create-outline"  size={16} color='gray'/>
                    <Text style={styles.detail}>Edit Profile</Text>
                    <Text style={styles.arrow}>></Text>
                </TouchableOpacity >
                <View style={{flex:1,justifyContent:'center'}}>
                <View style={styles.buttonContainer}>
               <Button
                 onPress={()=>{}}
                 title='Logout'
                 color="#ff5e53"
                />
               </View>
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingVertical:30
    },
    
    card:{
        flex:3,
        borderRadius:5,
        alignItems:'center',
        width:Dimensions.get('window').width*0.9,
        paddingVertical:10,
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 200,
        elevation: 3,
    },
    imageBox:{
        flex:1,
        justifyContent:'flex-end',
    },
    infoBox:{
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'#CCC',
        borderBottomWidth:1,
        padding:10,
        paddingBottom:15,
        width:'90%',
    },
    icon:{
        marginRight:10
    },
    detail:{
        fontSize:16,
    },
    arrow:{
        marginLeft:'auto'
    },
    buttonContainer:{
        margin:20,
        borderRadius:10,
        overflow:'hidden',
        width:100,
    }
})

export default ProfileScreen