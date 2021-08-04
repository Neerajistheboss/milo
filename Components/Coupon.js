import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View,Text, TextInput, Button, Pressable } from 'react-native'
const Coupon=({setDiscount,bookingDone,phone})=>{
    const [validCouponCodes,setValidCouponCodes]=useState([])
    const [couponCode,setCouponCode]=useState('')
    const [couponMessage,setCouponMessage]=useState('')
    const checkCouponValidity=()=>{
        if(validCouponCodes.includes(couponCode))   //coupon is valid
        {
            setDiscount(10)
            setCouponMessage('Coupon Applied Successfully')
        }
        else {
            setCouponMessage('Invalid Coupon')
            setDiscount(0)} 
    }




    useEffect(()=>{
        //fetch and set valid coupon codes
        try {
            axios.get('https://server.yumedic.com:5000/api/v1/couponCodes')
             .then(response=>setValidCouponCodes(response.data.data.map(code=>code.couponCode)))
        } catch (error) {
            console.log(error)
        }
        

    },[])

    useEffect(()=>{
        if(bookingDone&&validCouponCodes.includes(couponCode))  //booking has been done with valid coupon code
        {
            // add current time as listItem against the coupon code and the count of dates will give the number of time the code has been used 
           axios.post('https://server.yumedic.com:5000/api/v1/couponCodesBookings',{couponCode:couponCode,phone:phone})
                
        }  
    })

    return(
        <View >

        <Text style={{color:'#00C6AD',fontSize:18}}>Have a Coupon Code?</Text>
        <Text style={{color:couponMessage==='Coupon Applied Successfully'?'green':'red'}}>{couponMessage}</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TextInput placeholder='Coupon Code' value={couponCode} onChangeText={value=>setCouponCode(value)}  style={{backgroundColor:'#FFF',borderColor:'#FFF',borderWidth:1,color:'#00C6AD90',flex:0.7,fontWeight:'bold',fontSize:22,textAlign:"center"}}/>
            {}
            <Pressable onPress={checkCouponValidity} style={{backgroundColor:'orange',justifyContent:'center',alignItems:'center',padding:10,flex:0.3}}>
                <Text style={{color:'#FFF',fontSize:18}}>Apply</Text>
            </Pressable>
        </View>
        </View>
    )
}


export default Coupon