import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler'
import YuPost from '../Components/YuPost'
const YuContentScreen=({route,navigation})=>{
    const [posts,setPosts]=useState()

    useEffect(() =>{
        axios.get(`https://server.yumedic.com:5000/api/v1/yufacts?category=${route.params.category}`)
             .then(response =>
                setPosts(response.data.data)
                )
    },[])
    return(
        <ScrollView >
        {posts?.map(post=>
            <YuPost post={post}/>
        )}
        </ScrollView>
    )
}

export default YuContentScreen