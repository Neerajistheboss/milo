import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import { AppContext } from '../context/auth-context'
import Form from '../Components/Form'
import ReactDOM from 'react-dom'
import { Dimensions, Text,Image, View, Button,AsyncStorage, Pressable } from 'react-native'
import RazorpayCheckout from 'react-native-razorpay';
import NewDateAndTimeSlotHolder from '../Components/NewDateAndTimeSlotHolder.js'
import { ScrollView } from 'react-native-gesture-handler'
import moment from 'moment'
import { NavigationActions, StackActions } from 'react-navigation'
import Coupon from '../Components/Coupon'
function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}


const BookingScreen=({route,navigation})=>{
	const appData=useContext(AppContext)

    const [docData,setDocData]=useState(null)
	const [btnText,setBtnText]=useState('Fill Details')
    
    const [selectedDayOrder,setSelectedDayOrder]=useState(0)
    const [timeSlotId,setTimeSlotId]=useState(null)


	//form states
	const [patientName,setPatienName]=useState('')
    const [phone,setPhone]=useState('')
    const [address,setAddress]=useState('')
    const [reason,setReason]=useState('')
    const [notes,setNotes]=useState('')
    const [couponCode,setCouponCode]=useState()
    const [couponMessage,setCouponMessage]=useState('')
    
	const [bookingDone,setBookingDone]=useState(false)


   useEffect(() => {
	   if(!timeSlotId) setBtnText('Select Time Slot')
	else if(patientName!=''&&phone!='')
    {                                                           
        setBtnText('Pay')
    }
    else setBtnText('Fill Details')
   },[patientName,phone,timeSlotId])

	//form states


	
	const [ihc,setihc]=useState(49)
	const [discount,setDiscount]=useState(0)


    useEffect(() => {
		appData.setValueFunc('docId',route?.params?.DOCTOR_ID)
		 AsyncStorage.setItem('docId',route?.params?.DOCTOR_ID)
		
	},[route?.params?.DOCTOR_ID])

	useEffect(()=>{
		const fee=parseInt((docData?.doc?.FEES))
		if(fee==0)
		{
			setihc(0)
			setDiscount(0)
		}
		
	},[docData])
	
	

    const makeBooking=async()=>{
		// navigation.navigate('Profile',{screen:'Appointments'})
       
		const userId=JSON.parse(await AsyncStorage.getItem('user')).USER_ID
		
		// const username=JSON.parse(await AsyncStorage.getItem('user')||'').USER_FULLNAME
		const username='USER_FULLNAME'
        let formData=new FormData()
        formData.append('WEEKDAY',docData?.slots[selectedDayOrder]?.WEEKDAY)
        formData.append('SLOT_ID',timeSlotId)
        formData.append('AP_FOR','M')
        formData.append('DOCTOR_ID',docData?.doc?.DOCTOR_ID)
        formData.append('VISIT_REASON',reason)
        formData.append('NOTES',notes)
        formData.append('NAME',patientName)
        formData.append('MOBILE_NO',phone)
        formData.append('ADDRESS',address)
        formData.append('USER_ID',userId||'406')
        formData.append('SUM',parseInt(docData?.doc?.FEES)+ihc-discount)
        formData.append('USERNAME',username||'Guest')
		
		
		

        let data
       
		await axios
			.post(`https://admin.milodoctor.com/mobileapi/mobapi.php?f=booking`, formData)
			.then(function (response) {
				data=response.data
				const msg=data.MSG
				const result=data.results                                   //test this and store the object containing booking id
			})


			const bodypament = new FormData();
  				bodypament.append('P_MODE', 'Online');
  				bodypament.append('T_NO ', '');
  				bodypament.append('BOOKING_ID',data.results.BOOKING_ID);
  				
  				
		await axios
			  .post(`https://admin.milodoctor.com/mobileapi/mobapi.php?f=confirm_booking`,bodypament)
			  .then(async(response)=>{
				  if(response.data.MSG=="Booking has been confirmed now.")           //booking has been confirmed i.e. success 
				  { setBookingDone(true)
					//if success history.push() to success page
					//saving booking data to AsyncStorage
					// const bookings=JSON.parse(AsyncStorage.getItem('bookings'))||[]
					const bookings=[]
					
					const booking={
					  docID:appData.values.docId||AsyncStorage.getItem('docId'),
					  docName:appData.values.docName||AsyncStorage.getItem('docSelected'),
					  date:moment(appData.values.date,'dddd Do MMM YYYY').format('YYYY-MM-DD'),
					  time:moment(appData.values.time?.replace('.',':').split('-')[0],"HH:mm").format('LT')
				  }
				  //adding userId to booking
				  	booking.userId=userId
					bookings.unshift(
						booking
					)
					//send to server and store booking
					await axios.post(`https://server.yumedic.com:5000/api/v1/appointments`,booking)
				  
					AsyncStorage.setItem('bookings',JSON.stringify(bookings))
					navigation.navigate('Profile',{screen:'Appointments'})
  							   
					// navigation.navigate('Profile',{screen:'Appointments'})
				  }
  

				else{
					//else if failed history.push() to 
					navigation.navigate('fail')
				}
			  })

				const handleBookingFailed=()=>{
		
            }
        }


   
	function displayRazorpay() {
		var options = {
		 // key: "rzp_test_pnLwxm5qF9vlbs",
		  key: "rzp_live_A8fHsK5kq7rgBv",
		  currency: "INR",
		  amount: ((parseInt((docData?.doc?.FEES))+ihc-discount)*100).toString(),
		  name: "YuMedic",
	
		  description: "Pls complete the payment for booking",
		  image: "https://i.ibb.co/QF0vxK2/yumedic.jpg",
		  handler: function (response) {
			if (response.razorpay_payment_id) {
			  //payment has been done // //now submitting data for booking
			 
			  makeBooking();
			} else {
			  navigation.navigate("fail");
			}
		  },
		  theme: {
			color: "#01f0d0",
		  },
		  
		};
	
		RazorpayCheckout.open(options)
		  .then((data) => {
			// handle success
			
			makeBooking(); 
		  })
		  .catch((error) => {
			// handle failure
			
		  });
	  }



    useEffect(() => {
			
			
			
			

		let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=checkdocavailability&SHOP_ID=${route?.params?.SHOP_ID}&DOCTOR_ID=${route?.params?.DOCTOR_ID}`
		axios.get(`${queryStr}`).then(function (response) {
			
			setDocData({doc:response.data.DOCTOR,slots:response.data.results})
		})
	}, [])


	const handlePayClick=()=>{
		if(btnText=='Pay') displayRazorpay()
		
	}
    
    return(
        <View style={{flex: 1,justifyContent:'space-between'}}>
		<ScrollView >
			
			
			{/* <DT timeFunction={1timeSelected} docId={doctorSelected.docId} /> */}
			{/* <DocCard doc={doctor} bookbtn={false}/> */}

			{/* <h3 >
				{`Bookin Details For ${docData?.doc?.NAME}`}
			</h3> */}

			 <View style={{flexDirection:'row',marginTop:10,alignItems:'center',justifyContent:'flex-start'}}>
				 <View style={{flexDirection:'row',marginHorizontal:10,alignItems:'center'}}>
                    <Image source={{uri:'https://i.ibb.co/P4WYMnD/doctor.png'}} style={{width:75,height:75,borderWidth:1,borderRadius:100}} />
					<View style={{marginLeft:10,marginRight:50}}>
						<Text style={{padding:5,color:'#000'}}>{docData?.doc?.NAME}</Text>
                    	<Text style={{padding:5,color:'#000'}}>{docData?.doc?.DISEASES}</Text>
                    	<Text style={{padding:5,color:'#000'}}>{docData?.doc?.EDUCATION}</Text>
                    	<Text style={{padding:5,color:'#000'}}>{docData?.doc?.EXPERIENCE} Years exp</Text>
					</View>
				 </View>
                    <Text style={{padding:5,color:"green",fontSize:18}}>Rs{docData?.doc?.FEES}</Text>
            </View>


			
			{docData?.slots&&<NewDateAndTimeSlotHolder 
                                                        selectedDayOrder={selectedDayOrder} 
                                                        setSelectedDayOrder={setSelectedDayOrder} 
                                                        timeSlotId={timeSlotId}
                                                        setTimeSlotId={setTimeSlotId}
                                                        slots={docData.slots}/>}

			<Form 
				patientName={patientName}
				setPatienName={setPatienName}
				phone={phone}
				setPhone={setPhone}
				address={address}
				setAddress={setAddress}
				reason={reason}
				setReason={setReason}
				notes={notes}
				setNotes={setNotes} 
			  />

				{docData?.doc?.FEES>0 &&<Coupon phone={phone} setDiscount={setDiscount} bookingDone={bookingDone}/>		}	
			<View style={{borderBottomWidth:1}}></View>
			<View style={{flex:1,margin:10}}>
				<Text style={{fontWeight:'bold',color:'#000'}}>Payement Details</Text>
				<View style={{flexDirection:'row',justifyContent:'space-between'}}>
					<Text style={{color:'#000'}}>Appointment Fee</Text>
                     <Text style={{color:'#000'}}>???{docData?.doc?.FEES}</Text>
				</View>
				<View style={{flexDirection:'row',justifyContent:'space-between'}}>
					<Text style={{color:'#000'}}>MiloDoctor Discount</Text>
					<Text style={{color:'#00C6AD',fontWeight:'bold'}}>-???{discount}</Text>
				</View>
				<View style={{flexDirection:'row',justifyContent:'space-between'}}>
					<Text style={{color:'#000'}}>Internet Handling Charge + Service Charges</Text>
					<Text style={{color:'#000'}}>???{ihc}</Text>
				</View>
				<View style={{flexDirection:'row',justifyContent:'space-between',fontWeight:'bold'}}>
					<Text style={{color:'#000'}}>Total </Text>
					<Text style={{color:'#000'}}>{`???${parseInt(docData?.doc?.FEES) + ihc-discount}`}</Text>
				</View>
			</View>
			<View style={{borderBottomWidth:1}}></View>
			<View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#bbf6ff',width:Dimensions.get('window').width}}>
                <Text style={{fontWeight:'bold',margin:10,color:'#000',fontSize:24,textAlign:'center',flex:0.5}}>{`???${parseInt(docData?.doc?.FEES) + ihc-discount}`}</Text>
					<Pressable style={{backgroundColor:'#14cebe',height:50,flex:0.5,alignItems:'center',justifyContent:'center'}} onPress={handlePayClick}><Text style={{color:'#FFF',fontSize:24,fontWeight:'bold'}}>{btnText}</Text></Pressable>
            </View>
			{/* {!formCompleted&&<h3>Fill the form to continue</h3>} */}
		</ScrollView>
		</View>
    )
}

export default BookingScreen