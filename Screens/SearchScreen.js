import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NewDocCard from '../Components/NewDocCard'
import NewHospitalCard from '../Components/NewHospitalCard'
import { View,ScrollView,Text } from 'react-native'
import { useContext } from 'react'
import { AppContext } from '../context/auth-context'

const SearchScreen = ({route,navigation}) => {

	

	
	let [doctorsAndShops, setDoctorsAndShops] = useState([])

	const [divText, setDivText] = useState('Searching...')




	useEffect(() => {





		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=docshoplist&serviceid=${route.params.search}`
		axios.get(`${queryStr}`).then(function (response) {
			setDoctorsAndShops(response.data.results)
			if (response.data.results.length== 0) setDivText('Sorry No Doctors Found')
			
		})
	}, [])

	const handleHospClick=(hid)=>{
		navigation.navigate('HospitalSelect',{
			hid:hid
		})
	}

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
		<ScrollView>
			{doctorsAndShops.length > 0 ? (
				doctorsAndShops.map((doctorOrShop) => (
					<View>
						{doctorOrShop.SHOP_ID?<NewHospitalCard hosp={doctorOrShop} clickHandler={()=>handleHospClick(doctorOrShop.SHOP_ID)}/>:<NewDocCard doc={doctorOrShop}  bookNow={()=>handBookNow(doctorOrShop?.DOCTOR_ID)}/>}
					</View>
				))
			) : (
					<View  style={{ width: '100%', marginTop: 100, height: 100,alignItems: 'center'}}>
						<Text>{divText}</Text>
					</View>
				)}
			
		</ScrollView>
	)
}

export default SearchScreen
