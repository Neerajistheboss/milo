import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
const Review=({review})=>{
    return(
        <View style={styles.reviewContainer}>
            <View style={styles.avatar}>
                <Ionicons name="person-circle-sharp" size={50} />
                <Text>{review.DATED}</Text>
            </View>
            <View style={styles.reviewBox}>
                <Image source={require('../assets/quotation.png')} style={styles.quotation}/>
                <Text style={styles.reviewText}>{review.TESTIMONIALS}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
reviewContainer:{
    margin:10
},
avatar:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems: 'center'
},
reviewBox:{
    padding:10,
    backgroundColor:'#888',
    borderRadius:10,
    minWidth:150
},
quotation:{
    width:20,
    height:20,
    marginBottom:5
},
reviewText:{
    color:'#FFF',
    fontSize:18,
}
})

export default Review