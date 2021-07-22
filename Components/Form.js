import React,{useState} from 'react'
import { View,Text,TextInput,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const Form =(props)=>{


   




    return(
        <View style={styles.card}>
            <Ionicons color='#000' name={"time"} size={14}  />
            <View style={styles.inputBox}>
                <Text style={{color:'#000'}}>Paitent Name*</Text>
                <TextInput value={props.patientName} onChangeText={text=>props.setPatienName(text)} />
            </View>
            <View style={styles.inputBox}>
                <Text style={{color:'#000'}}>Mobile*</Text>
                <TextInput  value={props.phone} onChangeText={text=>props.setPhone(text)} keyboardType='phone-pad'/>
            </View>
            <View style={styles.inputBox}>
                <Text style={{color:'#000'}}>Address</Text>
                <TextInput value={props.address} onChangeText={text=>props.setAddress(text)} />
            </View>
            <View style={styles.inputBox}>                                                              
                <Text style={{color:'#000'}}>Visit Reason</Text>
                <TextInput value={props.reason} onChangeText={text=>props.setReason(text)} />
            </View>
            <View style={styles.inputBox}>
                <Text style={{color:'#000'}}>Notes(optional)</Text>
                <TextInput value={props.notes} onChangeText={text=>props.setNotes(text)} />
            </View>
        </View>
    )

    
}

const styles = StyleSheet.create({
    card:{
        elevation:3,
        margin:3,
    },
    inputBox:{
        marginBottom:3,
        backgroundColor:"#FFF"
    }
})

export default Form