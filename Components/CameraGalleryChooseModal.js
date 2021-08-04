import React from 'react'
import { Button, View,Text, Dimensions } from 'react-native'
const CameraGalleryChooseModal=({handleOptionSelected,setShowCameraGalleryOptionModal})=>{
    return(
        <View style={{flex:1,backgroundColor:'rgba(255,255,255,0.9)',justifyContent:'flex-end'}}>

        <View style={{padding:25,alignItems:'center',borderTopLeftRadius:20,borderTopRightRadius:20,borderWidth:1}}>
           <View style={{padding:10,paddingBottom:20}}>
            <Text style={{fontSize:22,letterSpacing:1,fontWeight:'bold'}}>Upload Photo</Text>
            <Text style={{fontSize:12}}>Choose Your Profile Picture</Text>
           </View>
            <View style={{margin:5,width:Dimensions.get('window').width*0.9,borderRadius:10,overflow:'hidden'}}><Button title='Open Camera' onPress={()=>handleOptionSelected('CAMERA')} color='#00DFCC'/></View>
            <View style={{margin:5,width:Dimensions.get('window').width*0.9,borderRadius:10,overflow:'hidden'}}><Button title='Open Gallery' onPress={()=>handleOptionSelected('GALLERY')} color='#00DFCC'/></View>
            <View style={{margin:5,width:Dimensions.get('window').width*0.9,borderRadius:10,overflow:'hidden'}}><Button title='Cancel' onPress={()=>{setShowCameraGalleryOptionModal(false)}} color='#F33F54'/></View>
        </View>
        </View>
    )
}

export default CameraGalleryChooseModal