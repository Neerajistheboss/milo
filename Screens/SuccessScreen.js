import  moment from 'moment'
import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import { View,ScrollView, Text,AsyncStorage } from 'react-native'
import Appointment from '../Components/Apointment'

const SuccessScreen = ({navigation}) => {

	let [userId,setUserId]=useState(null)
	const [bookings,setBookings]=useState([])

	AsyncStorage.getItem('user').then(user=>setUserId(JSON.parse(user).USER_ID))

	useEffect(() => {
		if(userId)
		axios.get(`https://server.yumedic.com:5000/api/v1/appointments/user/${userId}`)
			 .then(response =>{
				 setBookings(response.data.appointments)
			 })
	},[userId])

	

	return (
		<ScrollView className='text-center' contentContainerStyle={{alignItems: 'center'}}>
			<Text style={{textAlign: 'center'}}>Booking List</Text>
			{bookings?.map(booking=>{
					return <Appointment booking={booking} navigation={navigation}/>
					
					

			})}
			{bookings?.length==0&&<Text>No Bookings Yet</Text>}
			{bookings==null&&<Text>No Bookings Yet</Text>}
			
		</ScrollView>
	)

}

export default SuccessScreen

		