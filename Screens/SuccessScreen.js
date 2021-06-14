import  moment from 'moment'
import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import { View,ScrollView, Text,AsyncStorage } from 'react-native'
import Appointment from '../Components/Apointment'

const SuccessScreen = ({navigation}) => {

	let [userId,setUserId]=useState(null)
	const [bookings,setBookings]=useState([])

	AsyncStorage.getItem('user').then(user=>setUserId(JSON.parse(user).USER_ID))


	const cardClassFunc=(bookingDate,bookingTime)=>{
		// const bookingD=moment(bookingDate,'dddd Do MMM YYYY').format('YYYY-MM-DD')
		const bookingD=moment(bookingDate).format('YYYY-MM-DD')
		const today=moment().format('YYYY-MM-DD')
		const isSameOrAfterDate=moment(bookingD).isSameOrAfter(today)
		
		//checking time
		

	const time=moment()
	const beforeTime=moment(bookingTime,'LT')
	const afterTime=moment(moment(bookingTime,'LT').add(15,'minutes'),'LT')
	const isbetweenTime=time.isSameOrAfter(beforeTime)&&time.isSameOrBefore(afterTime)
	const isAfterTime=time.isAfter(afterTime)

	let cardColor='bg-secondary'
	if(isSameOrAfterDate) cardColor='bg-warning'
	if(isSameOrAfterDate&&isbetweenTime) cardColor='bg-success'
	if(isSameOrAfterDate&&isAfterTime) cardColor='bg-secondary'

		return  cardColor
	}
	useEffect(() => {
		console.log(userId)
		if(userId)
		axios.get(`https://server.yumedic.com:5000/api/v1/appointments/user/${userId}`)
			 .then(response =>{
				 setBookings(response.data.appointments)
				 console.log(response.data.appointments)
			 })
	},[userId])

	

	return (
		<ScrollView className='text-center' contentContainerStyle={{alignItems: 'center'}}>
			<Text style={{textAlign: 'center'}}>Booking List</Text>
			{bookings?.map(booking=>{
					const cardClass=cardClassFunc(booking.date,booking.time)
					return <Appointment booking={booking} navigation={navigation}/>
					
					

			})}
			{bookings?.length==0&&<Text>No Bookings Yet</Text>}
			{bookings==null&&<Text>No Bookings Yet</Text>}
			
		</ScrollView>
	)

}

export default SuccessScreen

		