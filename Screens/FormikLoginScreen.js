import React from 'react'
import { View,StyleSheet, TextInput, Button, Dimensions, Text } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
import { AsyncStorage } from 'react-native';
import { useContext } from 'react'
import { AppContext } from '../context/auth-context'
import { TouchableOpacity } from 'react-native-gesture-handler'



const validationSchema =Yup.object().shape({
    phone: Yup.string().min(10).max(10).label('Phone Number'),
    password:Yup.string().required().min(4).label('Password'),
})





const login=async(values,setMsg,appData,navigation)=>{
                                const newcredentials=new FormData()
                                newcredentials.append('USERNAME',values.phone)
                                newcredentials.append('PASSWORD',values.password)
                                let newqueryStr = `https://admin.milodoctor.com/mobileapi/mobapi.php?f=checklogin`
                                await axios.post(`${newqueryStr}`,newcredentials)
                                  .then(function (response) {
                                        
                                        if(response.data.MSG=="Please use a valid OTP!")
                                        {
                                            setMsg('Incorrect Credentials')
                                        }
                                        
                                        else
                                        {
                                            setMsg("Login Sucess")
                                            AsyncStorage.setItem('user',JSON.stringify(response.data.results))
                                            appData.setValueFunc('USER_ID',response.data.results.USER_ID)
                                            navigation.navigate('Home')
                                            
                                        }
                                })
}


const FormikLoginScreen=({navigation})=>{
    const appData=useContext(AppContext)
    const [msg,setMsg] =useState('')
    return(
        <View style={styles.container}>
        <Text style={{fontSize:24,fontWeight:'bold',color:'#008A80'}}>User Login</Text>
        <Text>{msg}</Text>
        <Formik 
            initialValues={{phone:'',password:''}}
            onSubmit={values=>login(values,setMsg,appData,navigation)}
            validationSchema={validationSchema}
        >
            {({handleChange,handleSubmit,values,errors,setFieldTouched,touched}) =>(
                <>  
                
                    <View style={{alignItems: 'flex-start'}}>

                    <Text style={{color:'#008A80'}}>Phone</Text>
                    <TextInput onBlur={()=>{setFieldTouched('phone')}} style={[styles.inputs,styles.rounded]} value={values.phone} placeholder='Phone' placeholderTextColor={'#008A80'} onChangeText={handleChange('phone')} /> 
                    {touched.phone&&<Text style={{color:'red'}}>{errors.phone}</Text>}
                    <Text style={{color:'#008A80'}}>Password</Text>
                    <TextInput onBlur={()=>{setFieldTouched('password')}} style={[styles.inputs,styles.rounded]} value={values.password} secureTextEntry placeholder='Password' placeholderTextColor={'#008A80'} onChangeText={handleChange('password')}/>
                    {touched.password&&<Text style={{color:'red'}}>{errors.password}</Text>}
                    <TouchableOpacity onPress={handleSubmit} style={[styles.inputs,styles.rounded,{backgroundColor:'#008A80',borderColor:'#008A80',padding:10,alignItems:'center'}]}>
                    <Text style={{color:'#FFF',fontSize:18}}>Login</Text>
                    </TouchableOpacity>
                    <Text onPress={() =>navigation.navigate('Register')} style={{color:'#008A80',textAlign:'center',alignSelf:'center',marginTop:2,textDecorationLine:'underline'}}>Create a new account</Text>
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

export default FormikLoginScreen