import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Modal,
    Pressable,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const Confirmbid = (props) => {

    const [checked, setChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image
                            source={require('./../assets/checked.png')}
                            style={{ height: 50, width: 50, borderRadius: 5, alignSelf: 'center', marginHorizontal: 4 }}
                        />
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>Your bid is successful sent</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles._desc}>Enter the amount you would like to bid to pickup from sender,
carry and deliver the package to the receiver.</Text>
                <View style={styles.labletitle}>

                    <Text style={styles._label}>Your finder’s code
                </Text>
                    <AntDesign name="exclamationcircle" color="#8C57F0" style={{ marginTop: 12, marginLeft: 40 }} size={16} />

                </View>

                <TextInput style={styles._input} placeholder="Finder’s code" />
                <Text style={styles._sub_heading}>Enter the code you received from finder to link you with finder</Text>
                {/*  */}
                <TextInput style={[styles._input]} placeholder="$ 25" />

                <TouchableOpacity style={styles._small_btn} onPress={() => setModalVisible(true)}>
                    <Text style={styles._btn_text}>Bid</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 14 }}>
                        You will get paid after deductions from the accepted
                        bid amount
<Text style={{ color: '#8C57F0', fontSize: 12 }}> Payment terms</Text>
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

export default Confirmbid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',

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
        marginBottom: 10
    },
    _btn_text: {
        color: 'white',
        padding: 8,
        textAlign: 'center',
        fontWeight: "bold"
    },


    _title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingVertical: 10
    },
    _desc: {
        color: "#6C6C6C",
        fontWeight: "bold",
        paddingBottom: 10,
        fontSize: 13
    },
    _learnMore: {
        color: "#8C57F0",
        fontWeight: "bold",
        paddingBottom: 20
    },
    _label: {
        fontWeight: "bold",
        // paddingVertical: 5
        marginVertical: 10
    },
    _sub_heading: {
        fontSize: 13,
        color: "#6C6C6C",
        fontWeight: "bold",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    labletitle: {
        flexDirection: 'row',
    },
    modalView: {
        margin: 20,
        backgroundColor: "#CEBAFA",
        borderRadius: 20,

        alignItems: "center",
        shadowColor: "#000",

        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 300,
        justifyContent: 'center',
        marginVertical: 200
    },

    textStyle: {

        color: '#fff',
        fontSize: 18,
        paddingTop:10
        // fontWeight: 'bold'
    }



});
