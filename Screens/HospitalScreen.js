import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NewDocCard from '../Components/NewDocCard'
import { ScrollView } from 'react-native-gesture-handler'
import { Dimensions, Image, Text, View } from 'react-native'
const HospitalPage=({route,navigation})=>{
    const [hospitalData,setHospitalData]=useState({})

    useEffect(() => {





		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=shopdetails&shopid=${route.params.hid}`
       axios.get(`${queryStr}`).then(function (response) {
       	setHospitalData(response.data.results)
		})
	}, [])


    const handBookNow=async(docId)=>{
		
		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=doctor_details&DOCTOR_ID=${docId}`
		let docDetail
		let hospId
       await axios.get(`${queryStr}`).then(function (response) {
			docDetail=response.data.results
			
			
		})
		// hospId=docDetail?.DAYS[0]?.SHOPS[0]?.SHOP_ID
        hospId=route.params.hid
        navigation.navigate('booking',{
            SHOP_ID:hospId,
            DOCTOR_ID:docId
        });
    }

    return(
        <ScrollView>
            <View>

           {hospitalData.SHOP_IMAGE&& <Image source={{uri:hospitalData?.SHOP_IMAGE[0]?.BIG_FILE}} style={{width:Dimensions.get('window').width,height:200,resizeMode:'contain'}} />}
           <Text >{hospitalData?.TITLE}</Text>
           <Text>Open Time:{hospitalData.WORKING_TIME}</Text>
           <Text>{hospitalData.ADDRESS}</Text>
           
           
           
           {hospitalData.DOCTORS&&hospitalData.DOCTORS.map(doc=><View className='col-12 col-md-6 col-lg-4'><NewDocCard addDr doc={doc} bookNow={()=>handBookNow(doc.DOCTOR_ID)}/></View>)}
           </View>
        </ScrollView>

    )
}

export default HospitalPage