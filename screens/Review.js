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
import TravellerTab from './../components/travellerTab';
import SenderTab from './../components/senderTab';
import { Container, TabHeading } from 'native-base';
import { Header, Left, Body, Right, Tab, Tabs, Button } from 'native-base';
import ReviewTravellerTab from './../components/reviewTravellerTan'
import FinderReviewsTab from './../components/FinderReviewsTab'
import SenderReviewsTab from './../components/SenderReviewsTab'
const Review = (props) => {
    return (
        <View style={styles.container}>
            {/* =======================> HEADER <================== */}
            <View style={styles._Header_Mian}>
                <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#1F1B1B" />
                </TouchableOpacity>
                <Text style={styles._header_heading}>Reviews</Text>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={styles._recerver}>Receiver</Text>
                    <Image
                        source={require('./../assets/recerver.png')}
                        style={styles._recerver_icon}
                    />
                </TouchableOpacity>
            </View>

            <Tabs
                tabContainerStyle={{ elevation: 0 }}
                tabBarActiveTextColor="red"
                tabBarUnderlineStyle={{
                    backgroundColor: '#8C57F0',
                    height: 3,
                }}>
                <Tab
                    heading={
                        <TabHeading style={{ backgroundColor: 'white' }}>
                            <Text
                                style={{ fontSize: 16, paddingRight: 5 }}>
                                Senders
                </Text>
                            <Image
                                source={require('./../assets/mini.png')}
                                style={{ height: 22, width: 22 }}
                            />
                        </TabHeading>
                    }>
                    <SenderReviewsTab />
                </Tab>

                <Tab
                    heading={
                        <TabHeading style={{ backgroundColor: 'white' }}>
                            <Text
                                style={{ fontSize: 16, paddingRight: 5 }}>
                                Travellers
                </Text>
                            <Image
                                source={require('./../assets/travelermin.png')}

                                style={{ height: 23, width: 23 }}
                            />
                        </TabHeading>
                    }
                    activeTabStyle={{
                        backgroundColor: 'white',
                    }}
                    activeTextStyle={{
                        color: '#8C57F0',
                        fontWeight: 'bold',
                    }}
                    textStyle={{
                        color: '#8C57F0',
                        fontWeight: 'bold',
                    }}>
                    <ReviewTravellerTab />
                </Tab>

                <Tab
                    heading={
                        <TabHeading style={{ backgroundColor: 'white' }}>
                            <Text
                                style={{ fontSize: 16, paddingRight: 5 }}>
                                Finder
                </Text>
                            <Image
                                source={require('./../assets/Group9970.png')}
                                style={{ height: 22, width: 22 }}
                            />
                        </TabHeading>
                    }>
                    <FinderReviewsTab />
                </Tab>
            </Tabs>



        </View>
    );
};

export default Review;

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
        marginTop: 20, marginBottom: 15
    },
    _header_heading: {
        color: "#000000",
        fontSize: 22,
        letterSpacing: 0.5,
        fontWeight: 'bold'
    },
    _recerver_icon: {
        width: 14,
        height: 14
    },
    _recerver: {
        fontSize: 14,
        color: "#1F1B1B",
        marginRight: 10
    }

});
