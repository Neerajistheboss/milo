import React from 'react'
import { View,StyleSheet, TextInput, Button, Dimensions, Text ,TouchableOpacity,AsyncStorage} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'

import { useContext } from 'react'
import { AppContext } from '../context/auth-context'

const validationSchema =Yup.object().shape({
    phone: Yup.string().min(10).max(10).label('Phone Number'),
    password:Yup.string().required().min(4).label('Password'),
    confirmPassword:Yup.string().required().oneOf([Yup.ref('password')],'Passwords must match')
})


const register=async(values,setMsg,appData)=>{
    try {
        
    
    setMsg('')
    const credentials=new FormData()
        credentials.append('FIRST_NAME',values.name)
        credentials.append('MOBILE_NO',values.phone)
        credentials.append('E_MAIL',"abc@example.com")
        credentials.append('PASSWORD',values.password)
        credentials.append('USER_TYPE','CUSTOMER')
        let queryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=register`
        await axios.post(`${queryStr}`,credentials)
                  .then(async(response)=>
                   { setMsg(response.data.MSG)
                    if(response.data.MSG=="Your registration has been done successful!")
                        {
                                const newcredentials=new FormData()
                                newcredentials.append('USERNAME',values.phone)
                                newcredentials.append('PASSWORD',values.password)
                                let newqueryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=checklogin`
                                await axios.post(`${newqueryStr}`,newcredentials)
                                  .then(function (response) {
                                    AsyncStorage.setItem('user',JSON.stringify(response.data.results))
                                    setMsg("Login Sucess")
                                    appData.setValueFunc('USER_ID',response.data.results.USER_ID)
                                    navigation.navigate('Home')
                                })
                        }})

                    } catch (error) {
                        console.error(error)
                    }
}





const RegisterFormikScreen=({navigation})=>{
    const appData=useContext(AppContext)
    const [msg,setMsg] =useState('')
    return(
        <View style={styles.container}>
        <Text style={{fontSize:24,fontWeight:'bold',color:'#008A80'}}>User Registration</Text>
        <Text>{msg}</Text>
        <Formik 
            initialValues={{name:'',phone:'',password:'',confirmPassword:''}}
            onSubmit={values=>register(values,setMsg,appData)}
            validationSchema={validationSchema}
        >
            {({handleChange,handleSubmit,values,errors}) =>(
                <>  
                
                    <View style={{alignItems: 'flex-start'}}>

                    <Text style={{color:'#008A80'}}>Name</Text>
                    <TextInput style={[styles.inputs,styles.rounded]} value={values.phone} value={values.name} placeholder='Name' placeholderTextColor={'#008A80'} onChangeText={handleChange('name')} /> 
                    <Text style={{color:'#008A80'}}>Phone</Text>
                    <TextInput style={[styles.inputs,styles.rounded]} value={values.phone} value={values.phone} placeholder='Phone' placeholderTextColor={'#008A80'} onChangeText={handleChange('phone')} /> 
                    <Text style={{color:'red'}}>{errors.phone}</Text>
                    <Text style={{color:'#008A80'}}>Password</Text>
                    <TextInput style={[styles.inputs,styles.rounded]} secureTextEntry value={values.phone} value={values.password} placeholder='Password' placeholderTextColor={'#008A80'} onChangeText={handleChange('password')}/>
                    <Text style={{color:'red'}}>{errors.password}</Text>
                    <Text style={{color:'#008A80'}}>Confirm Password</Text>
                    <TextInput style={[styles.inputs,styles.rounded]} secureTextEntry value={values.phone} value={values.confirmPassword} placeholder='Confirm Password' placeholderTextColor={'#008A80'} onChangeText={handleChange('confirmPassword')}/>
                    <Text style={{color:'red'}}>{errors.confirmPassword}</Text>
                    <TouchableOpacity onPress={handleSubmit} style={[styles.inputs,styles.rounded,{backgroundColor:'#008A80',borderColor:'#008A80',padding:10,alignItems:'center'}]}>
                      
                      <Text style={{color:'#FFF',fontSize:18}}>Register</Text>
                      </TouchableOpacity>
                      <Text onPress={() =>navigation.navigate('Login')} style={{color:'#008A80',textAlign:'center',alignSelf:'center',marginTop:2,textDecorationLine:'underline'}}>Sign in to Existing Account</Text>
                    
                    </View>
                </>
            )}
        </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputs: {
        width:Dimensions.get('window').width*0.8,
        overflow: 'hidden',
        margin:5,
        padding:5,
    },
    rounded:{
        borderRadius:20,
        borderWidth:1,
        borderColor:'#00FBE2',
        overflow: 'hidden',
    }
})

export default RegisterFormikScreen