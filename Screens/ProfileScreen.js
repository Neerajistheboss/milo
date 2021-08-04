import React, { useContext, useState,useEffect } from 'react'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet,TouchableHighlight , View,Text, Dimensions, Image, Button,Alert, AsyncStorage, Modal, Pressable } from 'react-native'
import { AppContext } from '../context/auth-context';
import EditProfileModal from '../Components/EditProfileModal';
const ProfileScreen=({navigation})=>{
    const appData=useContext(AppContext)


    const [userImage,setUserImage]=useState()
    const [userName,setuserName]=useState()
    const [userAge,setuserAge]=useState()
    const [userPhone,setuserPhone]=useState()
    const [showModal,setShowModal]=useState(false)

   

    useEffect(() => {
        AsyncStorage.getItem('userInfo').then((userInfo=>{
            const user=JSON.parse(userInfo)
            console.log(user)
            setUserImage(user?.photo||'https://i.ibb.co/BjK753H/78-785827-user-profile-avatar-login-account-male-user-icon.png')
            setuserName(user.name)
            setuserAge(user.age)
            setuserPhone(user.phone)
            
        }))
    },[showModal])

    
    const handleEdit=()=>{
        setShowModal(true)
    }


    return(
        <View style={styles.container}>
            <Ionicons onPress={handleEdit} name='create-sharp' size={18} color='#008A80'  style={{alignSelf:'flex-end'}}/>
            <Text onPress={handleEdit} style={{alignSelf:'flex-end',color:'#008A80'}}>Edit</Text>
            <View style={styles.userImgHolder}>
            <Image source={{uri:userImage}} style={{width:120,height:120}} />
            </View>
            <Text style={styles.userName}>{userName}</Text>
            <Text >Age:{userAge}</Text>
            <Text >Phone:{userPhone}</Text>
            <TouchableHighlight underlayColor='#4dada6' onPress={()=>{navigation.navigate('Appointments')}}  style={styles.buttonHolder}>
            <Text style={styles.button}>Check Bookings</Text>
            </TouchableHighlight>
            
            <Modal
                animationType="slide"
                visible={showModal}
                onRequestClose={() =>setShowModal(false)}>


       <EditProfileModal setShowModal={setShowModal} name={userName} age={userAge} phone={userPhone} photo={userImage} />
      </Modal>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
    },
    userImgHolder:{
        width:120,
        height:120,
        borderRadius:5000,
        borderWidth:7,
        borderColor:'#008A80',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
    },
    userName:{
        fontSize:24,
        fontWeight:'bold',
        color:'#008A80'
    },
    buttonHolder:{
        borderRadius:20,
        overflow: 'hidden',
        marginTop:50,
        padding:10,
        backgroundColor:'#008A80'
    },
    button:{
        fontSize:16,
        fontWeight:'bold',
        color:'#FFF'
    }

})

export default ProfileScreen