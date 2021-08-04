import React, { useContext, useState } from 'react'
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, Text, View,TouchableHighlight,Image, TextInput, Dimensions, AsyncStorage,Modal } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {Formik} from 'formik'
import { AppContext } from '../context/auth-context';
import CameraGalleryChooseModal from './CameraGalleryChooseModal';
import { useEffect } from 'react/cjs/react.development';



const EditProfileModal=({setShowModal,photo,name,age,phone})=>{

    const [userImage,setUserImage] = useState(photo)
    const appData=useContext(AppContext)
    
    const [optionSelected,setOptionSelected]=useState(null)
    const [showCameraGalleryOptionModal,setShowCameraGalleryOptionModal]=useState(false)

  



    const picImage=async()=>{
        if(optionSelected==null) return
        let image
        if(optionSelected==='CAMERA')
        image=await ImagePicker.launchCameraAsync({aspect:[1,1],quality:0.5})
        else if(optionSelected==='GALLERY') 
        image=await ImagePicker.launchImageLibraryAsync({mediaTypes:ImagePicker.MediaTypeOptions.Images,aspect:[1,1],quality:0.5})
        setUserImage(image.uri)
        setOptionSelected(null)
        

    }

    const saveChanges=async(name,phone,age)=>{
        appData.setValueFunc('userName',name)
        appData.setValueFunc('userPhone',phone)
        appData.setValueFunc('userAge',age)
        const photoString=userImage.toString()
        try {
            
            await AsyncStorage.setItem('userInfo',JSON.stringify({name,phone,age,"photo":userImage}))
        } catch (error) {
            console.log(error)
        }
       setShowModal(false)
    }

    const handleOptionSelected=(option)=>{
        setOptionSelected(option)
        setShowCameraGalleryOptionModal(false)
        
    }


    useEffect(()=>{
        picImage()
    },[
        optionSelected
    ])




    return(
        
       
        
        <View style={{...styles.container,paddingTop:0}}>

        <Formik 
            initialValues={{name:name,phone:phone,age:age}}
            onSubmit={({name,phone,age})=>saveChanges(name,phone,age)}
            >
            {({handleChange,handleSubmit,values}) =>(
                
                <View style={styles.container} >
                    
                    <View>
                        <View style={styles.userImgHolder}>
                            <Image source={{uri:userImage}} style={{width:120,height:120}} />
                        </View>
                            <Ionicons onPress={()=>setShowCameraGalleryOptionModal(true)} name='camera-outline' size={26} style={{alignSelf:'flex-end',position:'absolute',bottom:0,right:0}}/>
                    </View>
                    
                    <View style={[styles.fieldHolder,{marginTop:50}]}>
                    <Text style={styles.field}>Name</Text>
                    <TextInput style={[styles.input,styles.rounded]} value={values.name} placeholder='Name' placeholderTextColor={'#008A80'} onChangeText={handleChange('name')} /> 
                    </View>
                    <View style={styles.fieldHolder}>

                    <Text style={styles.field}>Phone</Text>
                    <TextInput style={[styles.input,styles.rounded]} value={values.phone} placeholder='Phone' placeholderTextColor={'#000'} onChangeText={handleChange('phone')} /> 
                    </View>
                    <View style={styles.fieldHolder}>
                    <Text style={styles.field}>Age</Text>
                    <TextInput style={[styles.input,styles.rounded]} value={values.age}  placeholder='Age' placeholderTextColor={'#000'} onChangeText={handleChange('age')}/>
                    </View>
                    <Text onPress={handleSubmit} style={styles.save}>Save</Text>
                    </View>
            )}
        </Formik>
        <Modal 
                animationType='slide' transparent={true}
                visible={showCameraGalleryOptionModal} 
                onRequestClose={()=>setShowCameraGalleryOptionModal(false)}>
                    <CameraGalleryChooseModal handleOptionSelected={handleOptionSelected} setShowCameraGalleryOptionModal={setShowCameraGalleryOptionModal}/>
              </Modal>
</View>
    )

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        paddingTop:50,
        backgroundColor:'#FFF'
    },
userImgHolder:{
    width:120,
    height:120,
    borderRadius:5000,
    borderWidth:7,
    borderColor:'#008A80',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'hidden',
},
userName:{
    fontSize:24,
    fontWeight:'bold',
    color:'#008A80'
},
save:{
    fontSize:16,
    color:'#008A80',
    fontWeight:'bold',
    alignSelf:'flex-end',
    margin:10,
    position:'absolute',
    top:5,
    right:5
},
fieldHolder:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-start',
    width:Dimensions.get('window').width*0.9,
    borderRadius:10,
    backgroundColor:'#e6f3f2',
    height:50,
    margin:5,
    padding:10
},
field:{
    fontWeight:'bold',
    textAlign:'left',
    minWidth:50,
    color:'#008A80',
    borderRightWidth:1
},
input:{
    width:Dimensions.get('window').width*0.7,
    padding:5,
    margin:10,
    height:30,
}
})


export default EditProfileModal