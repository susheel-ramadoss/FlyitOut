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
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { List } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DPicker from '../components/DatePicker'
import { Card, CardItem, Body, Switch } from 'native-base';
import Slider from '../components/BannerSlider'
import Feather from 'react-native-vector-icons/Feather';



const PreviewScreen = (props) => {
    const [checked, setChecked] = React.useState(false);
    return (
        <View style={styles.container}>
            <View style={styles._Header_Mian}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#1F1B1B" />
                </TouchableOpacity>
                <Text style={styles._header_heading}>Entry Details</Text>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Image
                        source={require('./../assets/sender.png')}
                        style={styles._recerver_icon}
                    />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles._title}>Add Entry</Text>
                <Text style={styles._desc}>Kindly add the details of your entry that’s applicable
            for all your items.</Text>
                <TouchableOpacity>
                    <Text style={styles._learnMore}>Learn more</Text>
                </TouchableOpacity>
                <Text style={styles._label}>Entry Title</Text>
                <TextInput style={styles._input} placeholder="xbox christmas gift" />
                <Text style={styles._sub_heading}>Make short, precise and impact. e.g Medicine for mom,
gift for brother etc.,</Text>
                {/*  */}
                <Text style={styles._label}>Personal Message (optional)</Text>

                <TextInput
                    style={[styles._input, { borderRadius: 10 }]}
                    multiline
                    numberOfLines={4}
                    placeholder="message"
                />
                <Text style={styles._sub_heading}>Say few words that you care in the entry</Text>





                <Text style={styles._label}>Pickup Location{'     '}
                    <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} /></Text>
                <View style={styles._row}>
                    <TextInput style={[styles._input, { flex: 1 }]} placeholder="Pick up Location" />
                    <TouchableOpacity onPress={() => props.navigation.navigate('ChooseAddressList')}>
                        <Entypo name="location-pin" color="#8C57F0" size={25} style={{ paddingLeft: 10 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles._sub_heading}>Choose comfortable nearby location to pick item from you</Text>




                <Text style={styles._label}>Link Receiver</Text>
                {/* <List.Accordion
                    title="bill gates"
                    id="1"
                    style={styles._input_file}>
                    <List.Item title="Item 1" />
                </List.Accordion> */}
                <TouchableOpacity title="bill gates" id="1" style={styles._input_file} onPress={() => props.navigation.navigate('Select Receiver')}>
                    <Text>bill gates</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={25} />

                    {/* <List.Item title="Item 1" /> */}
                </TouchableOpacity>

                <Text style={styles._label}>Receiver Location{'     '}
                </Text>
                <View style={styles._row}>
                    <TextInput style={[styles._input, { flex: 1 }]} placeholder="Pick up Location" />
                    <TouchableOpacity>
                        <Entypo name="location-pin" color="#8C57F0" size={25} style={{ paddingLeft: 10 }} />
                    </TouchableOpacity>
                </View>
                <Text style={styles._sub_heading}>You can accept a bid after receiver verify the address from
their account</Text>
                <View>
                    <Text style={{ fontWeight: 'bold', marginVertical: 10 }}>Delivery Due Date{'     '}
                        <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} /></Text>
                    <View style={styles.datePicker}>

                        <DPicker />
                    </View>
                </View>
                <View style={styles._checkbox_row}>

                    <TouchableOpacity style={[styles._checkbox, checked && { backgroundColor: "#8C57F0", borderColor: '#8C57F0' }]} onPress={() => setChecked(!checked)}>
                        {checked ? <AntDesign name="check" size={12} color="white" /> : null}
                    </TouchableOpacity>
                    <Text style={styles._checkbox_desc}>Allow traveller to split and pick items</Text>
                    <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} />
                </View>
                <View style={styles._checkbox_row2}>

                    <TouchableOpacity style={[styles._checkbox, checked && { backgroundColor: "#8C57F0", borderColor: '#8C57F0' }]} onPress={() => setChecked(!checked)}>
                        {checked ? <AntDesign name="check" size={12} color="white" /> : null}
                    </TouchableOpacity>
                    <Text style={styles._checkbox_desc}>Allow traveller to split and pick items</Text>
                    <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} />
                </View>


                {/* ===========card============ */}
                <Card

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
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={{ paddingVertical: 5, color: '#000', fontWeight: 'bold', fontSize: 17 }}>Ibuprofen</Text>

                                        <TouchableOpacity onPress={() => props.navigation.navigate('Add Item')}>
                                            <Feather name="edit" color="#8C57F0" size={22} />
                                        </TouchableOpacity>
                                    </View>


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

                                                <Text style={{ fontSize: 13, color: "#8C57F0", fontWeight: 'bold', marginHorizontal: 17, borderWidth: 1, padding: 2, borderRadius: 10, borderColor: '#8C57F0' }}> Pharmaceutical</Text>
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


                {/* =============card end=============== */}

                <View />
                <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => props.navigation.navigate('Add Item')}>
                    <Text style={{ fontWeight: 'bold', color: '#8C57F0', fontSize: 15 }}>
                        Add Item
         </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles._small_btn} onPress={() => props.navigation.navigate('Publish Entry')}>
                    <Text style={styles._btn_text}>Preview & Publish</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default PreviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        paddingTop: 0

    },

    _input: {
        backgroundColor: '#C6CCDD',
        borderRadius: 25,
        marginBottom: 5,
        padding: 10,
        paddingHorizontal: 20,
        marginTop: 10
    },
    _input_file: {
        backgroundColor: '#C6CCDD',
        borderRadius: 25,
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    _small_btn: {
        textTransform: 'capitalize',
        backgroundColor: '#8C57F0',
        borderRadius: 30,
        marginTop: 40,
        padding: 8,
    },
    _btn_text: {
        color: 'white',
        padding: 10,
        textAlign: 'center',
    },

    _gallery: {
        height: 100,
        width: 100,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'dotted',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    _galleryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    _title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingVertical: 10
    },
    _desc: {
        color: "#6C6C6C",
        fontWeight: "bold",
        paddingBottom: 10
    },
    _learnMore: {
        color: "#8C57F0",
        fontWeight: "bold",
        paddingBottom: 20
    },
    _label: {
        fontWeight: "bold",
        // paddingVertical: 5
    },
    _sub_heading: {
        fontSize: 13,
        color: "#6C6C6C",
        fontWeight: "bold",
        marginBottom: 10
    },
    _row: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    dateText: {
        fontWeight: "bold",
        width: "85%",
        alignSelf: "center",
        padding: 10,
        marginTop: 20,
    },
    dateView: {
        // display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: "85%",
        alignSelf: "center",
        // marginTop:9,
        backgroundColor: "rgb(240, 240, 240)",
        padding: 6,
        borderRadius: 25,
        paddingRight: 15,
        paddingLeft: 15,
    },
    selectedDateText: {
        marginTop: 10,
        color: "rgb(51,51,51)",
    },
    timeText: {
        fontWeight: "bold",
        width: "85%",
        alignSelf: "center",
        padding: 10,
        marginTop: 20,
    },
    _checkbox: {
        borderRadius: 3,
        height: 16,
        width: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "grey",
        marginRight: 10
    },
    _checkbox_row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10

    },
    _checkbox_desc: {
        color: "#1F1B1B",
        fontWeight: "bold",
        fontSize: 12
    },
    _Header_Mian: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
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
    datePicker: {

        width: '100%',
        alignSelf: 'center',
        borderRadius: 30,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#e6e6e6',
        paddingVertical: 4

    },
    _checkbox_row2: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },

});
