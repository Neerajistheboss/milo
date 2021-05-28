import  moment from 'moment'
import React,{useEffect,useState} from 'react'
import axios from 'axios' 
import { View,ScrollView, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Appointment from '../Components/Apointment'

const getLocalStorage = async(fieldName) =>{
	await JSON.parse( AsyncStorage.getItem(fieldName))
}
const SuccessScreen = () => {

	// const userId=getLocalStorage('user').USER_ID
	const userId=201
	const [bookings,setBookings]=useState([])



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
		axios.get(`https://server.yumedic.com:5000/api/v1/appointments/user/${userId}`)
			 .then(response =>{
				 console.log('=================================================================')
				 console.log(response.data.appointments)
				 setBookings(response.data.appointments)
			 })
	},[])

	

	return (
		<ScrollView className='text-center' contentContainerStyle={{alignItems: 'center'}}>
			<Text style={{textAlign: 'center'}}>Booking List</Text>
			{bookings?.map(booking=>{
					const cardClass=cardClassFunc(booking.date,booking.time)
					return <Appointment booking={booking}/>
					
					

			})}
			{bookings?.length==0&&<Text>No Bookings Yet</Text>}
			{bookings==null&&<Text>No Bookings Yet</Text>}
			
		</ScrollView>
	)

}

export default SuccessScreen

		