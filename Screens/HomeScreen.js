import React, { useContext, useEffect, useState } from 'react'
import { Text, TextInput, View ,StyleSheet,SafeAreaView,ScrollView, AsyncStorage, Button,PermissionsAndroid} from 'react-native'
import HospitalGrid from '../Components/HospitalGrid'
import SearchOptions from '../Components/SearchOptions'
import SpecialityGrid from '../Components/SpecilaityGrid'
import TestimonialGrid from '../Components/TestimonialGrid'
 import Toolbar from '../Components/Toolbar'
 import BannerSlider from '../Components/BannerSlider';


function HomeScreen(props) {
	const [search,setSearch]=useState("")
	const handleSearchChange=(e)=>{
		setSearch(e.target.value)
	}

	const sliderImages = [
		{
		  id: 1,
		  image: require("../assets/Artboard–2.png"),
		},
		{
		  id: 2,
		  image: require("../assets/Artboard–3.png"),
		},
	  ];

	const handBookNow=async(shopId,docId)=>{
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
		<>
		{/* <Toolbar navigation={props.navigation}/> */}
		<View style={{alignItems:'center'}}>		
		<ScrollView style={styles.container} showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}>
		{/* <Navbar /> */}
		<View style={{display:"flex",flexDirection:'column'}}>
			
			
		{/* <View style={{display:'flex',justifyContent:'center',alignItems:'center',margin:10,marginTop:3,backgroundColor:'#e6fffc',padding:5,borderRadius:10}}>
			
			<TextInput
			style={{width:300,backgroundColor:'#e6fffc'}}
			placeholder="Search for Doctors or Hospitals"
			placeholderTextColor="#343A40"
			// onKeyDown={handleKeyDown}
			value={search}
			onChangeText={handleSearchChange}
			/>
		</View> */}

		<SearchOptions navigation={props.navigation}/>

		{/* Carousels */}
		{/* <DocCarousel  bookNow={handBookNow}/> */}
		{/* <PsychologistCarousel bookNow={handBookNow}/> */}

		<BannerSlider slider={sliderImages}/>

        
		<View style={{marginBottom:30,marginTop:10}}>
		<Text style={styles.h3}>Find Doctor by Speciality</Text>
		<Text style={styles.h6}>Book appointments from home</Text>
		
		<SpecialityGrid navigation={props.navigation} />
        </View>
		<View style={{marginBottom:30}}>
		<Text style={styles.h3}>Top Hospitals</Text>
		<Text style={styles.h6  }>Book appointments from home</Text>
		<HospitalGrid navigation={props.navigation} />
		</View>
		<TestimonialGrid />
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
    fontWeight:'bold',
	paddingLeft:10
},
    h6:{
        fontSize:14,
        fontWeight:'600',
		paddingLeft:10,
		marginBottom:10
    }
})

export default HomeScreen
