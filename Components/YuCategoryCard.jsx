import React from 'react'
import { Text, TouchableOpacity,StyleSheet, View, Dimensions } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
const YuCategoryCard=(props)=>{
    return(
        <TouchableOpacity onPress={()=>props.handleCategoryClick(props.category)}  style={styles.categoryCard} >
                <View style={{height:120,padding:0,width:'95%',justifyContent:'center',alignItems: 'center'}} >
                <Ionicons name={props.icon} size={42} color={'#008A80'} />
                    <Text style={{color:"#008A80",textAlign:'center'}}>{props.category}</Text>
                </View>
            </TouchableOpacity>
    )

}

const styles =StyleSheet.create({
   
    categoryCard:{
        backgroundColor:'#FFF',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems :'center',
        color:'black',
        margin:10,
        fontWeight:'bold',
        width:Dimensions.get('window').width/2-20
    }
    


})

export default YuCategoryCard