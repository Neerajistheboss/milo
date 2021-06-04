import Carousel from 'react-native-snap-carousel';
import React from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import Uzaina from '../assets/Uzaina.jpeg'
import Devanshi from '../assets/Devanshi.png'
import Nihar from '../assets/Nihar.png'



export class PsychologistCarousel extends React.Component {
 
    constructor() {
        super();
        this.state = {entries: [
            {   id:1,
                name:"Dr. Uzaina Kashi",
                spec:"MD, Physician,Diabetologist",
                photo:Uzaina
            },
            {   id:2,
                name:"Dr. Devanshi Rao",
                spec:"COVID consultant",
                photo:Devanshi
            },
            {   id:3,
                name:"Dr. Nihar Kalyan",
                spec:"Surgical oncology",
                photo:Nihar
            },
        ]};
      }


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
                        <Button title='Book Now' color='#343A40' />
                    </View>
                </View>
            </View>
        );
    }
 
    render () {
        return (
            <View style={{height:200,justifyContent:'center',margin:0}}>
            <View style={{borderBottomWidth:1,borderBottomColor:"green",marginBottom:10,paddingBottom:5}}>
			<Text style={{fontSize:24,fontWeight:'bold'}}>Mental Health Consultation</Text>
			<Text>Talk to experienced mental health experts and get heard.</Text>

		    </View>
            <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
              contentContainerStyle={{justifyContent: 'center',alignItems: 'center'}}
              containerCustomStyle={{marginVertical:5,display: 'flex'}}
              autoplay
              loop
            />
            </View>
        );
    }
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