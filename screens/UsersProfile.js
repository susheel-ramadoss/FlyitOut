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
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import RBSheet from "react-native-raw-bottom-sheet";

const UsersProfile = () => {
    return (
        <View style={styles.container}>
            {/* =======================> HEADER <================== */}
            <View style={styles._Header_Mian}>
                <TouchableOpacity>
                    <MaterialIcons name="arrow-back" size={24} color="#1F1B1B" />
                </TouchableOpacity>
                <Text style={styles._header_heading}>Profile</Text>
                <TouchableOpacity onPress={() => this.RBSheet.open()}>
                    <Feather name="more-vertical" size={24} color="#1F1B1B" />
                </TouchableOpacity>
            </View>

            {/* =======================> BODY <================== */}
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* =======================> PROFILE MAIN <================== */}
                <View style={styles._profile_main}>
                    <Image
                        source={require('./../assets/userprofilePic.png')}
                        style={styles._user_profile}
                    />
                    <TouchableOpacity style={styles._profile_change}>
                        <Feather name="camera" size={24} color="#1F1B1B" />
                    </TouchableOpacity>

                    <Text style={styles._user_name}>Johnny Brewer</Text>
                    <View style={styles._review_show_main}>
                        <Text style={styles._review_show}>6.5</Text>
                        <AntDesign name="heart" size={18} color="#F11652" style={{ marginHorizontal: 5 }} />
                        <Text style={styles._review_counter}>1K </Text>
                        <Text style={styles._reviews_heading}>reviews</Text>
                    </View>

                    {/* =======================> USER ADDRESS MAIN <================== */}
                    <View style={styles._address_main}>
                        <Text style={styles._address}>Bangalore, India</Text>
                        <Text style={styles._gender}>Male</Text>
                    </View>

                    <Text style={styles._user_Des}>
                        Rodney Erickson is a content marketing professional at HubSpot, an inbound marketing and sales platform that helps companies attract visitors,
                        convert leads, and close customers. Previously, Rodney worked as a marketing
                    </Text>

                    <TouchableOpacity style={styles._facebook_icon}>
                        <Fontisto name="facebook" size={24} color="white" />
                    </TouchableOpacity>
                </View>


                {/* =======================> Contact Details  <================== */}
                <View style={styles._contact_detail_main}>
                    <Text style={styles._contact_heading}>Contact Details </Text>
                    <Text style={styles.__phone}>Phone</Text>
                    <Text style={styles._mobile_number}>+91 1234567890</Text>
                    <Text style={styles.__phone}>Email</Text>
                    <Text style={styles._mobile_number}>johny@foodmania.com</Text>
                    <TouchableOpacity style={styles._view_more_btn}>
                        <Text style={styles._view_more_btn_text}>View More</Text>
                    </TouchableOpacity>
                </View>

                {/* =======================> Business Details  <================== */}
                <View style={styles._contact_detail_main}>
                    <Text style={styles._contact_heading}>Business Details </Text>
                    <Text style={styles.__phone}>Small Business</Text>
                    <Text style={styles._mobile_number}>Cookie Man</Text>
                    <Text style={styles.__phone}>Travel Agent</Text>
                    <Text style={styles._mobile_number}>SRM Travels</Text>
                    <TouchableOpacity style={styles._view_more_btn}>
                        <Text style={styles._view_more_btn_text}>View More</Text>
                    </TouchableOpacity>
                </View>

                {/* =======================> Address  <================== */}
                <View style={styles._contact_detail_main}>
                    <Text style={styles._contact_heading}>Addresses </Text>
                    <Text style={styles._home}>Home</Text>
                    <Text style={styles._address2}>#13 th street, near zolo pg, below banyan tree Bangalore, Karnataka</Text>
                    <TouchableOpacity style={styles._view_more_btn}>
                        <Text style={styles._view_more_btn_text}>View More</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 10 }}></View>
            </ScrollView>

            <TouchableOpacity style={styles._message_button}>
                <Entypo name="chat" size={24} color="white" />
            </TouchableOpacity>

            {/* bottom sheet */}
            <RBSheet
                ref={(ref) => {
                    this.RBSheet = ref;
                }}
                height={200}
                openDuration={250}
                customStyles={{
                    container: {
                        // justifyContent: "center",
                        // alignItems: "center",
                        borderTopEndRadius: 20,
                        borderTopLeftRadius: 20,
                    },
                }}
            >
                <ScrollView>
                    {/* bottom sheeet */}
                    <View style={{ marginRight: 30, marginLeft: 30, marginTop: 10 }}>
                        <View style={styles._line}></View>
                        <View>
                            <TouchableOpacity style={styles._bottom_sheet_btn}>
                                <Text style={styles._share_btn_text}>Share</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._bottom_sheet_btn}>
                                <Text style={styles._Report_btn_text}>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles._bottom_sheet_btn}>
                                <Text style={styles._Withdraw_btn_text}>Withdraw request</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginBottom: 40 }}></View>
                </ScrollView>
            </RBSheet>
        </View>
    );
};

export default UsersProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: 'white',

    },
    _Header_Mian: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    _header_heading: {
        color: "#000000",
        fontSize: 14,
        letterSpacing: 0.5
    },
    _profile_main: {
        backgroundColor: "white",
        elevation: 5,
        marginTop: 50,
        margin: 5,
        borderRadius: 10
    },
    _user_profile: {
        height: 120,
        width: 120,
        borderRadius: 120 / 2,
        alignSelf: "center",
        marginTop: 20
    },
    _profile_change: {
        width: 40,
        height: 40,
        backgroundColor: "#EAEAEA",
        borderRadius: 40 / 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: -45,
        marginLeft: 80,

    },
    _user_name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#000000",
        letterSpacing: 0.5,
        alignSelf: "center",
        marginTop: 20

    },
    _review_show_main: {
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center"
    },
    _review_show: {
        fontSize: 12,
        color: "#1F1B1B"
    },
    _review_counter: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#8C57F0",
        marginLeft: 5
    },
    _reviews_heading: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#8C57F0"
    },
    _address_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 15
    },
    _address: {
        fontSize: 12,
        color: "#000000",
        letterSpacing: 0.5
    },
    _gender: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#1F1B1B"
    },
    _user_Des: {
        fontSize: 12,
        fontWeight: 'bold',
        color: "#1F1B1B",
        marginHorizontal: 15,
        marginTop: 10
    },
    _facebook_icon: {
        backgroundColor: "#1877F2",
        width: 34,
        height: 34,
        borderRadius: 34 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20

    },
    _contact_detail_main: {
        backgroundColor: "white",
        elevation: 5,
        marginTop: 20,
        margin: 5,
        borderRadius: 10,
        padding: 15
    },
    _contact_heading: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000000",
        letterSpacing: 0.5
    },
    __phone: {
        fontSize: 12,
        color: "#1F1B1B"
    },
    _mobile_number: {
        fontSize: 10,
        fontWeight: 'bold',
        color: "#6C6C6C"
    },
    _view_more_btn: {
        marginTop: 5
    },
    _view_more_btn_text: {
        fontSize: 12,
        color: "#8C57F0"
    },
    _home: {
        fontSize: 12,
        color: "#000000",
        marginTop: 5,
        marginBottom: 5
    },
    _address2: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#6C6C6C",
        width: "70%"
    },
    _message_button: {
        width: 50,
        height: 50,
        backgroundColor: "#8C57F0",
        borderRadius: 50 / 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 20,
        right: 25
    },
    _line: {
        width: 80,
        height: 8,
        backgroundColor: "#6C6C6C",
        borderRadius: 20,
        alignSelf: "center",
        marginTop: 10
    },
    _share_btn_text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#6C6C6C"
    },
    _Report_btn_text: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#6C6C6C"
    },
    _Withdraw_btn_text: {
        color: "#DD5040",
        fontSize: 14,
        fontWeight: "bold",
    },
    _bottom_sheet_btn: {
        marginTop: 10
    }
});
