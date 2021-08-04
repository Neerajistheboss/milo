import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { ScrollView,View, Text,StyleSheet, Dimensions, TextInput, Button } from 'react-native'
import axios from 'axios';
const ContactScreen=()=>{
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [messageSent,setMessageSent]=useState(0)
    
    let [btnText,setBtnText]=useState('Send')
    let [btnColor,setBtnColor]=useState("#7EE2D6")

    const resetFields=()=>{
        setName('')
        setPhone('')
        setEmail('')
        setMessage('')
    }

    const handleMessageSubmit=()=>{
        if(messageSent==1) return
        axios.post(`https://server.yumedic.com:5000/api/v1/messages`,{name,phone,email,message})
			  .then(response =>{
				  if(response.status===201)
				  {
						setMessageSent(1)
                        setBtnText('Message Sent')
                        setBtnColor('#65b5ab')
                        resetFields()
				  }
				  else {setMessageSent(2)
                  setBtnText('Try Again Later')
                  setBtnColor('#F56D66')}
			  })
    }

    return(
        <View style={{alignItems:'center',flex:1,justifyContent:'center'}}>

            <ScrollView style={styles.card}  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={styles.titleBox}><Text style={styles.title}>Contact Us</Text></View>
                <View style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="call"  size={16} color='gray'/>
                    <Text style={styles.detail}>9821003060</Text>
                </View>
                <View style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="mail" size={16} color='gray' />
                    <Text style={styles.detail}>info@milodoctor.com</Text>
                </View>
                <View style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="time" size={16} color='gray' />
                    <Text style={styles.detail}>Monday to Saturday 9:00AM to 7:00PM</Text>
                </View>

                <View style={{...styles.titleBox,marginTop:25,marginBottom:5}}><Text style={styles.title}>Make a enquiry here</Text></View>
                <View style={styles.inputBox}>
                    <Text style={{margin:0}}>Name</Text>
                    <TextInput style={{...styles.input,margin:0,height:20,padding:0}} value={name} onChangeText={text=>setName(text)}/>
                </View>
                <View style={styles.inputBox}>
                    <Text>Phone</Text>
                    <TextInput style={styles.input} value={phone} onChangeText={text=>setPhone(text)}/>
                </View>
                <View style={styles.inputBox}>
                    <Text>Email</Text>
                    <TextInput style={styles.input} value={email} onChangeText={text=>setEmail(text)}/>
                </View>
                <View style={styles.inputBox}>
                    <Text>Your Message</Text>
                    <TextInput style={styles.input} value={message} onChangeText={text=>setMessage(text)} multiline = {true} numberOfLines = {5}/>
                </View>
               <View style={styles.buttonContainer}>
               <Button
                 onPress={handleMessageSubmit}
                 title={btnText}
                 color={btnColor}
                 />
               </View>
            </ScrollView>
                 </View>
    )
}

const styles=StyleSheet.create({
    card:{
        borderRadius:5,
        borderColor:'#CCC',
        borderWidth:1,
        width:Dimensions.get('window').width*0.9,
        padding:10,
        marginVertical:10
    },
    titleBox:{
        width:'90%',
        marginBottom:30
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'gray'
    },
    infoBox:{
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'#CCC',
        borderBottomWidth:1,
        padding:10,
        paddingBottom:15,
        width:'90%',
    },
    icon:{
        marginRight:10
    },
    detail:{
        fontSize:16,
    },
    inputBox:{
        padding:10,
        width:'90%',
    }
    ,
    input:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
        margin:0,
        height:20,
        padding:0
    },
    buttonContainer:{
        margin:10
    }

})

export default ContactScreen