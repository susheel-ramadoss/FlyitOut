import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Rating, AirbnbRating } from 'react-native-ratings'

const FinderReviewsTab = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles._user_data}>
                    <View>
                        <Text style={styles._user_name}>Johnny Brewer</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <EvilIcons name="location" size={12} color="#1F1B1B" />
                            <Text style={styles._user_addres}>Port Angeles, WA.</Text>
                        </View>
                    </View>
                    <Image
                        source={require('./../assets/userprofilePic.png')}
                        style={styles._user_profile}
                    />
                </View>
                <View style={styles._rating_main}>
                    <Image
                        source={require('./../assets/Punctuality.png')}
                        style={styles._icon}
                    />
                    <Text style={styles._Punctuality}>Punctuality</Text>

                    <Rating
                        type='heart'
                        ratingCount={10}
                        imageSize={27}
                        count={10}
                        defaultRating={10}
                        // showRating
                        onFinishRating={() => console.log("completed")}
                        selectedColor="#F11652"
                        reviewColor="#F11652"
                        // ratingBackgroundColor="#F11652"
                        ratingColor="#F11652"
                    // tintColor="#F11652"
                    />
                </View>

                <View style={styles._rating_main}>
                    <Image
                        source={require('./../assets/Communication.png')}
                        style={styles._icon}
                    />
                    <Text style={styles._Punctuality}>Communication</Text>


                    <Rating
                        type='heart'
                        ratingCount={10}
                        imageSize={27}
                        // showRating
                        defaultRating={10}

                        onFinishRating={() => console.log("completed")}
                        selectedColor="#F11652"
                        reviewColor="#F11652"
                        // ratingBackgroundColor="#F11652"
                        ratingColor="#F11652"
                    // tintColor="#F11652"
                    />
                </View>

                <View style={styles._rating_main}>
                    <Image
                        source={require('./../assets/Reliability.png')}
                        style={styles._icon}
                    />
                    <Text style={styles._Punctuality}>Reliability</Text>

                    <Rating
                        type='heart'
                        ratingCount={10}
                        imageSize={27}
                        // showRating
                        onFinishRating={() => console.log("completed")}
                        selectedColor="#F11652"
                        reviewColor="#F11652"
                        defaultRating={10}
                        // ratingBackgroundColor="#F11652"
                        ratingColor="#F11652"
                    // tintColor="#F11652"
                    />
                </View>

                <TouchableOpacity style={styles._submit_btn}>
                    <Text style={styles._submit_btn_text}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default FinderReviewsTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,



    },
    _user_data: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#EFEFEF",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10

    },
    _user_name: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#363636"
    },
    _user_profile: {
        width: 36,
        height: 36,
        borderRadius: 36 / 2
    },
    _user_addres: {
        fontSize: 9,
        color: "#363636"
    },
    _rating_main: {
        // alignSelf: "center",
        marginTop: 50,
        // alignItems: "center"
    },
    _icon: {
        width: 40,
        height: 40,
        borderRadius: 40 / 2,
        alignSelf: "center"
    },
    _Punctuality: {
        fontSize: 14,
        color: "#363636",
        marginTop: 5,
        alignSelf: "center",
        marginBottom: 10
    },
    _submit_btn: {
        backgroundColor: "#8C57F0",
        width: "100%",
        borderRadius: 50,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        marginBottom: 20,
        marginTop: 30
    },
    _submit_btn_text: {
        fontSize: 14,
        color: "white",
        textAlign: "center"
    }
});
