import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("SignUpScreen")
            // go to Home page
        }, 2500)
    }
    render() {
        return (
            <View style={styles._layer}>
                <View style={styles._logo_view}>
                    <Image source={require('./../assets/splashIcon.png')} style={styles._icon} />
                </View>

                <Image source={require('./../assets/Group17204.png')} style={styles._icon2} />

            </View>
        )
    }
}


let styles = StyleSheet.create({
    _layer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    _logo_view: {
        height: 180,
        width: 180,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        // borderWidth: 1,
        elevation: 3,
        backgroundColor: "white"
    },
    _icon: {
        height: 150,
        width: 150
    },
    _icon2: {
        height: 60.87,
        width: 180,
        marginTop: 30
    }
})