import React, { useContext, useState,useEffect } from 'react'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet,TouchableHighlight , View,Text, Dimensions, Image, Button,Alert, AsyncStorage, Modal, Pressable,ScrollView } from 'react-native'
import { AppContext } from '../context/auth-context';
import EditProfileModal from '../Components/EditProfileModal';
import axios from 'axios';
const ProfileScreen=({navigation})=>{
    const appData=useContext(AppContext)


    const [userImage,setUserImage]=useState()
    const [userName,setuserName]=useState()
    const [userAge,setuserAge]=useState()
    const [userPhone,setuserPhone]=useState()
    const [userBloodGroup,setuserBloodGroup]=useState()
    const [userAddress,setuserAddress]=useState()
    const [showModal,setShowModal]=useState(false)




   

    useEffect(() => {
        AsyncStorage.getItem('userInfo').then((userInfo=>{
            const user=JSON.parse(userInfo)
            setUserImage(user?.photo||'https://i.ibb.co/BjK753H/78-785827-user-profile-avatar-login-account-male-user-icon.png')
            setuserName(user?.name)
            setuserAge(user?.age)
            setuserPhone(user?.phone)
            setuserBloodGroup(user?.bloodGroup)
            setuserAddress(user?.address)
            
        }))
    },[showModal])

    
    const handleEdit=()=>{
        setShowModal(true)
    }

    // appointment list section
    let [userId,setUserId]=useState(null)
	const [bookings,setBookings]=useState([])

	AsyncStorage.getItem('user').then(user=>setUserId(JSON.parse(user)?.USER_ID))

	useEffect(() => {
		if(userId)
		axios.get(`https://server.yumedic.com:5000/api/v1/appointments/user/${userId}`)
			 .then(response =>{
				 setBookings(_.orderBy(response?.data?.appointments,['createdAt'],['desc']))
			 })
	},[userId])


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
            <Text>Blood Group:{userBloodGroup}</Text>
            <Text>Address:{userAddress}</Text>
            <View style={{width:Dimensions.get('window').width*0.9,borderBottomWidth:1,borderColor:'#008A80',marginVertical:15,backgroundColor:'#008A80'}}/>

            <ScrollView className='text-center' contentContainerStyle={{alignItems: 'center'}}>
			<Text style={{textAlign: 'center',fontSize:18}}>Booking List</Text>
			{bookings?.map(booking=>{
					return <Appointment booking={booking} navigation={navigation}/>
					
					

			})}
			{bookings?.length==0&&<Text>No Bookings Yet</Text>}
			{bookings==null&&<Text>No Bookings Yet</Text>}
			
		</ScrollView>
            
            <Modal
                animationType="slide"
                visible={showModal}
                onRequestClose={() =>setShowModal(false)}>


       <EditProfileModal setShowModal={setShowModal} name={userName} age={userAge} phone={userPhone} photo={userImage} bloodGroup={userBloodGroup} address={userAddress}/>
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