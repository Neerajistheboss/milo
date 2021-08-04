import React, { useContext, useEffect, useState} from 'react'
import { FlatList, StyleSheet, View,Text, ScrollView,ActivityIndicator } from 'react-native'
import NewDoctorCard from '../Components/NewDocCard'
import {AppContext } from '../context/auth-context'
import axios from 'axios'
import emoji from 'node-emoji'
var _ = require('lodash');




const NewSpecialitySelectScreen=({navigation,route})=>{
    let [doctors, setDoctors] = useState([])
	const [docDetail,setDocDetail]=useState({})
	const [divText, setDivText] = useState(`Please Wait ${emoji.get('slightly_smiling_face')}` )
	const [docShop,setDocShop]=useState([])
	let docList=[]
	const [docListLength,setDocListLength]=useState(0)
const appData=useContext(AppContext)

// getting doctor list from speciality
useEffect(() => {

	axios.get(`https://server.yumedic.com:5000/api/v1/speciality?speciality=${route.params.sid}`)
		  .then(response=>{
			  setDocShop(response.data.data)
			  if(response.data.data.length==0) setDivText('No Doctors Found')
			})

}, [docListLength])

useEffect(()=>{
	
	if(docShop.length==0) return
	console.log('docShop.length',docShop.length)
	setDocListLength(docShop.length)
},[
	docShop
])

//getting detail of each doctor in list
const getDocShopDetails=(doc)=>{
	console.log(doc.docId)
	let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=checkdocavailability&SHOP_ID=${doc.shopId}&DOCTOR_ID=${doc.docId}`
		axios.get(`${queryStr}`)
			 .then(function (response) {
				 docList.push(response.data.DOCTOR)
			}).then(()=>{
				if(docList.length==docListLength)
				setDoctors(docList)
			}
			)

			
		}


		// useEffect(()=>{
		// 	console.log('docList changed')
			
		// },[
		// 	docList.length
		// ])



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

	
	try {
		return (
			// <ScrollView style={{flex:1}}>
			<>
				{doctors.length > 0 ? 
					<FlatList showsVerticalScrollIndicator={false} data={doctors} keyExtractor={doc=>doc?.DOCTOR_ID} renderItem={({item})=>{
						return <NewDoctorCard doc={item}  bookNow={handBookNow}/>}
					} />
					:					
					<View style={{  marginTop: 100, height: 100,alignItems:'center' }}>
							<Text style={{fontSize:28}}>{divText}</Text>
							{divText===`Please Wait ${emoji.get('smile')}`&&<ActivityIndicator size='large' color="#00DFCC" />}
					</View>
				} 
				</>)
			// </ScrollView>)
	} catch (error) {
		console.log(error)
	}
	// return (
	// 	<ScrollView style={{flex:1}}>
	// 		{doctors.length > 0 ? 
	// 			<FlatList showsVerticalScrollIndicator={false} data={doctors} keyExtractor={doc=>doc.DOCTOR_ID} renderItem={({doctor})=><NewDoctorCard doc={doctor}  bookNow={()=>handBookNow(doctor.DOCTOR_ID)}/>} />
	// 			:					
	// 			<View style={{  marginTop: 100, height: 100 }}>
	// 					<Text>{divText}</Text>
	// 			</View>
	// 		}
	// 	</ScrollView>
	// )
}

export default NewSpecialitySelectScreen