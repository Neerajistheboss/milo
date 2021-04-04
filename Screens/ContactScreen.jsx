import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView,View, Text,StyleSheet, Dimensions, TextInput, Button } from 'react-native'
const ContactScreen=()=>{
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <View style={styles.titleBox}><Text style={styles.title}>Contact Us</Text></View>
                <View style={styles.infoBox}>
                    <Ionicons style={styles.icon} name="call"  size={16} color='gray'/>
                    <Text style={styles.detail}>9472751360</Text>
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
                    <Text>Name</Text>
                    <TextInput style={styles.input} value={name} onChangeText={text=>setName(text)}/>
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
                    <TextInput style={styles.input} value={message} onChangeText={text=>setMessage(text)} multiline = {true} numberOfLines = {6}/>
                </View>
               <View style={styles.buttonContainer}>
               <Button
                 onPress={()=>{}}
                 title='Send'
                 color="#7EE2D6"
                />
               </View>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingVertical:30
    },
    card:{
        flex:1,
        borderRadius:5,
        borderColor:'#CCC',
        borderWidth:1,
        alignItems:'center',
        width:Dimensions.get('window').width*0.9,
        paddingVertical:10
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
        borderBottomColor:'gray'
    },
    buttonContainer:{
        margin:20
    }

})

export default ContactScreen