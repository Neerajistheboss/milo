import React,{useState} from 'react'
import { View,Text,TextInput,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
const Form =(props)=>{


   




    return(
        <View style={styles.card}>
            <Ionicons name={"time"} size={14}  />
            <View style={styles.inputBox}>
                <Text>Paitent Name*</Text>
                <TextInput value={props.patientName} onChangeText={text=>props.setPatienName(text)} />
            </View>
            <View style={styles.inputBox}>
                <Text>Mobile*</Text>
                <TextInput value={props.phone} onChangeText={text=>props.setPhone(text)} />
            </View>
            <View style={styles.inputBox}>
                <Text>Address</Text>
                <TextInput value={props.address} onChangeText={text=>props.setAddress(text)} />
            </View>
            <View style={styles.inputBox}>                                                              
                <Text>Visit Reason</Text>
                <TextInput value={props.reason} onChangeText={text=>props.setReason(text)} />
            </View>
            <View style={styles.inputBox}>
                <Text>Notes(optional)</Text>
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