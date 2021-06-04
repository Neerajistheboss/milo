import React, { useContext, useEffect, useState } from 'react'
import { Text, TextInput, View ,StyleSheet,SafeAreaView,ScrollView} from 'react-native'
import HospitalGrid from '../Components/HospitalGrid'
import SpecialityGrid from '../Components/SpecilaityGrid'
// import Navbar from '../Components/Navbar'
// import NewDoctorCard from '../Components/NewDoctorCard'
 import Toolbar from '../Components/Toolbar'
// import {DocCarousel} from '../Components/DocCarousel'
// import {PsychologistCarousel} from '../Components/PsychologistCarousel'


function HomeScreen(props) {
	console.log(props)


	const [search,setSearch]=useState("")

	const handleSearchChange=(e)=>{
		console.log(e.target.value)
		setSearch(e.target.value)
	}

	// const handleKeyDown = (event) => {
	// 	if (event.key === 'Enter') {
	// 		history.push({
	// 			pathname: '/search',
	// 			search: `serviceid=${search}`
	// 		})
	// 	}
	//   }



	const handBookNow=async(shopId,docId)=>{
		console.log('inside handBookNow')
		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=doctor_details&DOCTOR_ID=${docId}`
		let docDetail
		let hospId
		await axios.get(`${queryStr}`).then(function (response) {
			console.log(response.data.results)
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
		<>
		{/* <Toolbar navigation={props.navigation}/> */}
		<View style={{alignItems:'center'}}>
		
		
		
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}>
		{/* <Navbar /> */}
		<View style={{display:"flex",flexDirection:'column'}}>
			
			
		<View style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginTop:3,backgroundColor:'#e6fffc',padding:5,borderRadius:10}}>
			
			<TextInput
			style={{width:300,backgroundColor:'#e6fffc'}}
			placeholder="Search for Doctors or Hospitals"
			placeholderTextColor="#343A40"
			// onKeyDown={handleKeyDown}
			value={search}
			onChange={handleSearchChange}
			/>
		</View>


		{/* Carousels */}
		{/* <DocCarousel  bookNow={handBookNow}/> */}
		{/* <PsychologistCarousel bookNow={handBookNow}/> */}

        
		<View style={{marginBottom:30}}>
		<Text style={styles.h3}>Find Doctor by Speciality</Text>
		<Text style={styles.h6}>Book appointments from home</Text>
		
		<SpecialityGrid navigation={props.navigation} />
        </View>
		<View style={{marginBottom:30}}>
		<Text style={styles.h3}>Top Hospitals</Text>
		<Text style={styles.h6  }>Book appointments from home</Text>
		<HospitalGrid navigation={props.navigation} />
		</View>
		
		</View>
		</ScrollView>
		</View>
		</>
	)
}

const styles=StyleSheet.create({
    container: {
        flexGrow: 1,
		marginVertical:10
    },
    h3:{fontSize:18,
    fontWeight:'bold'},
    h6:{
        fontSize:14,
        fontWeight:'600'
    }
})

export default HomeScreen
