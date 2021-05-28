import React, { useEffect,useState,useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import NewDoctorCard from '../Components/NewDocCard'
import {AppContext} from '../context/auth-context'
import axios from 'axios'
const SpecialityScreen=({route,navigation})=>{

    let [doctors, setDoctors] = useState([])
	const [docDetail,setDocDetail]=useState({})
	const [divText, setDivText] = useState('Searching Doctors')


    const appData=useContext(AppContext)

	useEffect(() => {



		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=list_doctor&SERVICE_ID=${route.params.sid}&uuid=42&CITY=${appData.values.city}`
		axios.get(`${queryStr}`).then(function (response) {
            console.log("data fetched")
			setDoctors(response.data.results||[])
            console.log(response.data)
			if (response.data.results?.length== 0||response.data.results==null) setDivText('Sorry No Doctors Found')
			
		})

	}, [appData.values.city])

    //here shop id should also be used
    const handBookNow=async(docId)=>{
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

    
    
    return(
 <View>
         <FlatList  showsVerticalScrollIndicator={false}  data={doctors} keyExtractor={item => item.DOCTOR_ID} renderItem={(item)=>{
            
            return <NewDoctorCard doc={item.item} bookNow={handBookNow}/>} }/> 
 </View>
    )
}

// const styles=StyleSheet.create({
// container: {}

// })

const styles = StyleSheet.create({
    row: {flex:2
    },
    title: {
        textAlign: "center",
        marginTop:15
    },
    specialityCard:{
        width:120,
        height:120,
        padding:3,
        margin:1,
        textAlign:'center',
        backgroundColor:'#e6fffc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
  });


export default SpecialityScreen