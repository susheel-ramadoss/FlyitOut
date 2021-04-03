import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';
 

 
const images = [
    require('./../assets/tibs.png'),
    require('./../assets/tibs.png'),
    
];
 
export default class Slider extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: 130, height: 130 , alignSelf:'center'}} source={require('./../assets/tibs.png')} />
            </View>
        );
    }
 
    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay ={false}
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={130}
                    activePageIndicatorStyle={{color:'red', backgroundColor:'#8C57F0'}}
                    pageIndicatorContainerStyle={{marginVertical:-23}}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf:'center'
    },
});