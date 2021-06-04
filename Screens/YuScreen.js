import React, { useState,useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import axios from 'axios'
import YuPost from '../Components/YuPost'
import {Ionicons} from '@expo/vector-icons'
import YuCategoryCard from '../Components/YuCategoryCard'
const YuScreen=({navigation})=>{
    const [posts,setPosts]=useState()
    useEffect(() =>{
        axios.get(`https://server.yumedic.com:5000/api/v1/yufacts`)
             .then(response =>
                setPosts(response.data.data)
                )
    },[])

    const categories=[
    {
        category:   'Covid Updates',
        icon:'megaphone'
    },
    {
        category:'Covid Helpline',
        icon:'call'
    },
    {
        category:'Covid Consultation',
        icon:'shield-checkmark'
    },
    {
        category:'Covid Tips',
        icon:'bulb'
    }]

    const handleCategoryClick=(category)=>{
        navigation.navigate('YuContent',{category:category})
    }
    return(
        <ScrollView style={{overflow: 'hidden'}}>
        <Text className="p-3" style={{backgroundColor:'#4dada6',color:'#FFFFFF',fontWeight: 'bold',fontSize:32,padding:10}}>YuFacts</Text>
        <View style={styles.categoryContainer}>
        {
            categories.map(category=>           <YuCategoryCard handleCategoryClick={handleCategoryClick} category={category.category} icon={category.icon}/>)
        }
        </View>
        <View style={{paddingBottom:10}}>
        {posts?.map(post=>
            <YuPost  post={post}/>
        )}
        </View>
        </ScrollView>)
}
const styles =StyleSheet.create({
    categoryContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap:'wrap',
        marginBottom:30
    },
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

export default YuScreen