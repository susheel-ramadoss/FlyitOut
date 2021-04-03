import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
const ItemType = (props) => {
    const [type, setType] = React.useState(true);
    const [types, setTypes] = React.useState([
        {
            name: 'Alcohols',
            selected: true,
            close: false,
        },
        {
            name: 'Breverages',
            selected: false,
            close: false,
        },
        {
            name: 'Alcohols',
            selected: false,
            close: false,
        },
        {
            name: 'Chocolates',
            selected: true,
            close: true,
        },
    ]);


    return (
        <View style={styles.container}>
            <View style={styles._Header_Mian}>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#1F1B1B" />
                </TouchableOpacity>
                <Text style={styles._header_heading}>Choose Items</Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Add Item')} >
                    <Text style={styles._save}>Save</Text>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>


                <View style={styles._row}>
                    <Text style={[styles._bottom_sheet_title, { color: "#8C57F0" }]}>Alcohols</Text>
                    <AntDesign name="checkcircle" color="#8C57F0" size={20} />
                </View>

                <View style={styles._row}>
                    <Text style={[styles._bottom_sheet_title, { fontWeight: "normalj" }]}>Pharmaceutical </Text>
                </View>

                <View style={styles._row}>
                    <TextInput
                        style={[styles._input, { flex: 1 }]}
                        placeholder="Pick up Location"
                        onChange={(e) => setType(e)}
                    />
                    <TouchableOpacity onPress={() => setType('')}>
                        <Entypo
                            name="cross"
                            color="#8C57F0"
                            size={25}
                            style={{ paddingLeft: 10 }}
                        />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Text style={styles._add_item}>Add Other</Text>
                </TouchableOpacity>

                <View />
            </ScrollView>
        </View>
    );
};

export default ItemType;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
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

    _title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10,
    },
    _desc: {
        color: '#6C6C6C',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    _learnMore: {
        color: '#8C57F0',
        fontWeight: 'bold',
        paddingBottom: 20,
    },

    _row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "#EAEAEA",
    },

    _checkbox: {
        borderRadius: 3,
        height: 16,
        width: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        marginRight: 10,
    },
    _checkbox_row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    _checkbox_desc: {
        color: '#1F1B1B',
        fontWeight: 'bold',
    },
    _add_item: {
        color: '#8C57F0',
        fontWeight: 'bold',
        fontSize: 18,
    },
    _Header_Mian: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30
    },
    _header_heading: {
        color: '#000000',
        fontSize: 18,
        letterSpacing: 0.5,
    },
    _save: {
        fontWeight: 'bold',
        color: '#8C57F0',
        fontSize: 18,
    },
    _bottom_sheet_title: {
        fontSize: 16,
        fontSize: 15,
        fontWeight: "bold"
    },
    _input: {
        backgroundColor: "#C6CCDD",
        borderRadius: 5,
        paddingHorizontal: 10
    }
});
