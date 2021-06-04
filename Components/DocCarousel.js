import Carousel from 'react-native-snap-carousel';
 import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import DrVSVPrasad from '../assets/DrVSVPrasad.jpeg'
import DrRupeshKumar from '../assets/DrRupeshKumar.jpeg'
import DrSatveer from '../assets/DrSatveer.jpeg'
import DrBNPrasad from '../assets/DrBNPrasad.jpeg'



export const DocCarousel= ()=>{
 
   const entries= [
            {   docId:250,
                shopId:29,
                name:"Dr. VSV Prasad",
                spec:"MD, Physician,Diabetologist",
                photo:DrVSVPrasad
            },
            {   docId:253,
                shopId:30,
                name:"Dr Rupesh Kumar",
                spec:"COVID consultant",
                photo:DrRupeshKumar
            },
            {   docId:252,
                shopId:30,
                name:"Dr Satveer",
                spec:"Surgical oncology",
                photo:DrSatveer
            },
            {   docId:251,
                shopId:30,
                name:"Dr B N Prasad",
                spec:"General surgeon",
                photo:DrBNPrasad
            }
        ]






    _renderItem = ({item, index}) => {
        return (
            <View style={styles.card} >
                <View style={styles.imgHolder}>
                    <Image source={item.photo} style={{width:100,height:120,resizeMode: 'contain'}}/>
                </View>
                <View style={{...styles.details,padding:10}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.spec}>{ item.spec }</Text>
                    <View style={{width:120,marginVertical:10}}>
                        <Button title='Book Now' color='#343A40' onPress={()=>props.bookNow(item.shopId,item.docId)}/>
                    </View>
                </View>
            </View>
        );
    }
 
    
        return (
            <View style={{height:200,justifyContent:'center',margin:0}}>
            <View style={{borderBottomWidth:1,borderBottomColor:"green",marginBottom:10,paddingBottom:5}}>
			<Text style={{fontSize:24,fontWeight:'bold'}}>Online Consultation</Text>
			<Text>Meet experienced doctors at the comfort of your home.</Text>

		    </View>
            <Carousel
              data={entries}
              renderItem={_renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              contentContainerStyle={{justifyContent: 'center',alignItems: 'center'}}
              containerCustomStyle={{marginVertical:5,display: 'flex'}}
              autoplay
              loop
            />
            </View>
        )
    }


const styles = StyleSheet.create({
    card:{
        backgroundColor:'#9DE0F5',
        justifyContent:'center',
        alignItems:"center",
        flexDirection:'row',
        borderColor:'#343A40',                    

    },
    imgHolder:{
        borderColor:'#FFF',
        borderWidth:5,
        width:103,
        height:103,
        overflow:'hidden',
        marginRight:10,
        justifyContent: "center",
        display: 'flex',
        alignItems: "center"
    },
    name:{
        fontSize:18,
        margin:0,
    },
    spec:{
        fontSize:14,
        margin:0,
    }
})