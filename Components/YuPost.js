import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
const YuPost=(props)=>{
    console.log(props.post)
    return(
        <View className='shadow mb-3' style={{display: 'flex',flexDirection: 'column',alignItems: 'center',marginBottom:10,elevation:3}}>
            {props.post.type=='image'&&<Image source={{uri:props.post.content}} style={{width:Dimensions.get('window').width,minHeight:400,resizeMode:'contain'}}/>}
            <Text>{props.post?.detail}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default YuPost