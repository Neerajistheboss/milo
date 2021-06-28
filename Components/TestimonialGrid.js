import React,{useState} from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import Review from './Review'
const TestimonialGrid=()=>{
    const [reviews,setReviews]=useState([])
    axios.get('https://admin.milodoctor.com/mobileapi/mobapi.php?f=testimonials_list')
         .then(response=>setReviews(response.data.results))  
    return(
        <View>
        <Text style={styles.text}>Customer Reviews</Text>
        <ScrollView horizontal showsVerticalScrollIndicator={false}  showsHorizontalScrollIndicator={false}>
            {reviews.map(review=><Review review={review}/>)}
        </ScrollView>
        </View>
    )
}

const styles=StyleSheet.create({
text:{
    fontSize:18,
    fontWeight:'bold',
    paddingLeft:10
}
})


export default TestimonialGrid