import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '../components/BannerSlider'

const PublishEntry = (props) => {
    let arr = [
        {
            img: require('./../assets/tibs.png'),
            title: '',
            review: [],
            finder: require('./../assets/finder.png'),
            location: <MaterialIcons name="my-location" size={15} style={{ margin: 3 }} />,
            verified: <Text style={{ fontSize: 13, color: "#8C57F0", fontWeight: 'bold', marginHorizontal: 17, borderWidth: 1, padding: 2, borderRadius: 10, borderColor: '#8C57F0' }}> Pharmaceutical</Text>,
            Address: ' KraoLandia, Brazil'


        },
        {
            img: require('./../assets/tibs.png'),
            title: '',
            review: [],
            finder: require('./../assets/finder.png'),
            location: <MaterialIcons name="my-location" size={15} style={{ margin: 3 }} />,
            verified: <Text style={{ fontSize: 13, color: "#8C57F0", fontWeight: 'bold', marginHorizontal: 17, borderWidth: 1, padding: 2, borderRadius: 10, borderColor: '#8C57F0' }}> Pharmaceutical</Text>,
            Address: ' KraoLandia, Brazil'


        },






    ];
    return (
        <View style={styles.container}>
            <View style={styles._Header_Mian}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Entry Details")}>
                    <Text style={{ fontWeight: 'bold', color: '#8C57F0' }}>Edit</Text>
                </TouchableOpacity>
                <Text style={styles._header_heading}>Publish Entry</Text>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}
                onPress={()=>props.navigation.navigate("Home")}
                >
                    <Text style={{ fontWeight: 'bold', color: '#8C57F0' }}>Publish</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: 'white' }}>
                {/* ======= Main View ====== */}
                <View>
                    <View style={styles.mainText}>
                        <Text style={styles.txt1}> We will suggest the best match based on the your
                        details below. Kindly verify it before publishing.
</Text>
                        <Text style={styles.txt1}>
                            You may need to bid again. If you editing these
                            details after publishing.
    </Text>
                        <Text style={styles.txt3}>
                            Learn more
    </Text>
                    </View>
                    <View>
                        <Text style={styles.title}>Medicine for my mom</Text>
                        <Text style={styles.DetailText}> It would be better if you pick the package as soon as
possible</Text>
                        <Text style={styles.Restaurant}>Restaurant </Text>
                        <Text style={styles.Address}> #13 th street, near zolo pg, below banyan tree
Bangalore, Karnataka</Text>

                    </View>

                    <View style={styles.profileView}>
                        <View style={styles.profileImage}>
                            <Image
                                source={require('./../assets/blank-profile.jpg')}
                                style={{ height: 85, width: 85, borderRadius: 5, alignSelf: 'center', marginHorizontal: 4 }}
                            /></View>
                        <View style={styles.profileData}>
                            <Text style={styles.userName}>Janet Ramirez</Text>
                            <Text style={styles.mobNumber}>+91 1234568902</Text>

                            <Text style={styles.userAddress}>Port Angeles, WA, United State of
asdasada America </Text>

                        </View>

                    </View>
                </View>

                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.dueDate}>Delivery due date:</Text>
                        <Text style={styles.Date}>10/12/2021</Text>
                        <Text style={styles.ist}>(IST)</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.dueDate}>Requested:</Text>
                        <Text style={styles.finder}>Finder</Text>
                        <Image
                            source={require('./../assets/finder.png')}
                            style={{ height: 15, width: 15, borderRadius: 5, alignSelf: 'center', marginHorizontal: 4 }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.dueDate}>Split and pick items:</Text>
                        <Text style={styles.Date}>No</Text>
                    </View>

                </View>
                <View>
                    <Text style={{ marginVertical: 15, fontWeight: 'bold', fontSize: 20 }}>Linked items</Text>
                </View>
                {/* ====== cards ===== */}
                {arr.map((val, i) => {
                    return (
                        <Card
                            key={i}
                            style={{
                                elevation: 5,
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRightWidth: 0,
                                borderLeftWidth: 0,
                                backgroundColor: 'white',
                                borderRadius: 5,


                            }}>
                            <CardItem >
                                <Body>
                                    <Slider />

                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                        <View
                                            style={{
                                                flex: 1,
                                                paddingHorizontal: 5,
                                                flexDirection: 'column',
                                                marginVertical: 10
                                            }}>
                                            <Text style={{ paddingVertical: 5, color: '#000', fontWeight: 'bold', fontSize: 17 }}>Ibuprofen</Text>


                                            <View style={{}}>

                                                <Text style={{ fontSize: 12, color: "#707070", width: 310 }}>
                                                    Ibuprofen is used to reduce fever and treat pain or
                                                    inflammation caused by many conditions such as
                                                    headache, toothache, back pain, arthritis, menstrualcramps, or minor injury.
                                                                     </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 }}>

                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ fontWeight: 'bold' }}>Weight:</Text>

                                                    <Text style={{ fontSize: 15, color: "#8C57F0", fontWeight: 'bold', marginHorizontal: 10 }}>
                                                        5 Kg

 </Text>
                                                </View>
                                                <View>
                                                    <View>

                                                        {val.verified}
                                                    </View>
                                                </View>
                                            </View>
                                        </View>

                                    </View>
                                </Body>
                            </CardItem>
                            <CardItem>

                            </CardItem>
                        </Card>




                    );
                })}



            </ScrollView>

        </View>
    );
};

export default PublishEntry;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
    },
    kgdata: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    DetailText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'gray'
    },
    Restaurant: {
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    Address: {
        width: 300,
        fontSize: 13,
        marginVertical: -4
    },
    profileView: {
        flexDirection: 'row',
        marginVertical: 15
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 17
    },
    mobNumber: {
        fontWeight: 'bold',
        marginVertical: 7,
    },
    userAddress: {
        width: 210
    },
    dueDate: {
        fontWeight: 'bold',
        marginRight: 15
    },
    Date: {
        color: '#8C57F0',
        fontWeight: 'bold'
    },
    ist: {
        fontWeight: 'bold',
        color: 'gray'
    },
    finder: {
        color: '#8C57F0',
        fontWeight: 'bold',
        marginHorizontal: 11
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btn1: {
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 100,
        elevation: 6,
        padding: 13,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 26,
        paddingHorizontal: 30
    },
    btn2: {
        shadowColor: "#000",
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 6,
        padding: 13,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 26,
        paddingHorizontal: 80,
        backgroundColor: '#8C57F0'
    },
    btnText1: {
        color: '#8C57F0'
    },
    btnText2: {
        color: 'white'
    },
    chatBtn: {
        borderWidth: 1,
        padding: 20,
        width: 70,
        borderRadius: 40,
        backgroundColor: '#8C57F0',
        bottom: 40,
        alignSelf: 'flex-end',
        position: 'absolute',
        right: 12
    },

    _Header_Mian: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        paddingBottom: 10

    },
    _header_heading: {
        color: "#000000",
        fontSize: 18,
        letterSpacing: 0.5,
    },
    _recerver_icon: {
        width: 30,
        height: 30
    },
    _recerver: {
        fontSize: 14,
        color: "#1F1B1B",
        marginRight: 10
    },
    txt1: {
        fontWeight: 'bold',
        color: 'gray',
        marginVertical: 10
    },
    txt3: {
        fontWeight: 'bold',
        color: '#8C57F0'
    }

});
