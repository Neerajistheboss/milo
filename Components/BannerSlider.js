import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ViewSlider from '../Components/ViewSlider';
import Dimension from '../Components/Dimension';


const {width, height} = Dimension.window;

function BannerSlider(props) {
    return (
        <ViewSlider
            renderSlides={
                <>
                    {props.slider !== null && props.slider.length > 0 && props.slider.map((item, index) => {
                        return (
                            <View style={styles.viewBox} key={index}>
                                <Image
                                    style={[styles.bannerImage, {height: 200, width, flex: 1}]}
                                    source={item.image}
                                />
                            </View>
                        );
                    })}
                </>
            }
            style={styles.slider} //Main slider container style
            height={180} //Height of your slider
            slideCount={props.slider !== null ? props.slider.length : 0} //How many views you are adding to slide
            dots={true} // Pagination dots visibility true for visibile
            dotActiveColor="#24A6F3" //Pagination dot active color
            dotInactiveColor="gray" // Pagination do inactive color
            dotsContainerStyle={styles.dotContainer} // Container style of the pagination dots
            autoSlide={true} //The views will slide automatically
            slideInterval={3000} //In Miliseconds
            useNativeDriver={true}
        />
    );
}

const styles = StyleSheet.create({
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        alignItems: 'center',
        height: '100%',
        marginTop:10,
       
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    dotContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        bottom: 0,
    },
});

export default BannerSlider;
