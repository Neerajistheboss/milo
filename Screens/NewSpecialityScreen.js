import React, { useContext, useEffect, useState} from 'react'
import { FlatList, StyleSheet, View,Text, ScrollView } from 'react-native'
import NewDoctorCard from '../Components/NewDocCard'
import {AppContext } from '../context/auth-context'
import axios from 'axios'
var _ = require('lodash');




const NewSpecialitySelectScreen=({navigation,route})=>{
    let [doctors, setDoctors] = useState([])
	const [docDetail,setDocDetail]=useState({})
	const [divText, setDivText] = useState('Searching Doctors')
	const [docShop,setDocShop]=useState([])

const appData=useContext(AppContext)

const getDocShopDetails=(doc)=>{
	let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=checkdocavailability&SHOP_ID=${doc.shopId}&DOCTOR_ID=${doc.docId}`
		axios.get(`${queryStr}`)
			 .then(function (response) {
			setDoctors(doctors=>[...doctors,response.data.DOCTOR])
			
		})
}


	useEffect(() => {

        axios.get(`https://server.yumedic.com:5000/api/v1/speciality?speciality=${route.params.sid}`)
			  .then(response=>{
				  setDocShop(response.data.data)
				  if(response.data.data.length==0) setDivText('No Doctors Found')
				})

	}, [])


	useEffect(() => {
		if(docShop.length==0) return
		docShop.forEach(getDocShopDetails)
	},[docShop])

	const handBookNow=async(docId)=>{
		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=doctor_details&DOCTOR_ID=${docId}`
		let docDetail
		let hospId
		await axios.get(`${queryStr}`).then(function (response) {
			docDetail=response.data.results
			
			
		})
		const index=docDetail?.DAYS.findIndex(day=>day.DOC_AVAILABILITY!=0)
		hospId=docDetail?.DAYS[index]?.SHOPS[0]?.SHOP_ID
        navigation.navigate('booking',{
            SHOP_ID:hospId,
            DOCTOR_ID:docId
        });
    }

	

	return (
		<ScrollView style={{flex:1}}>
			{doctors.length > 0 ? (
				doctors.map((doctor) => (
					<View >
						<NewDoctorCard doc={doctor}  bookNow={()=>handBookNow(doctor.DOCTOR_ID)}/>
					</View>
				))
			) : (
					<View style={{  marginTop: 100, height: 100 }}>
						<Text>{divText}</Text>
					</View>
				)}
			
		</ScrollView>
	)
}

export default NewSpecialitySelectScreen