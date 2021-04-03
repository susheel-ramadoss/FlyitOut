import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import { List } from 'react-native-paper';
const EditBasicDetail = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles._subHeading}>Kindly provide your details to keep your profile
reliable</Text>
                <TextInput style={styles._input} placeholder="Full Name" />
                <List.Accordion
                    title="Gender"
                    id="2"
                    style={styles._input_file}>
                    <List.Item title="Male" />
                    <List.Item title="Female" />
                    <List.Item title="Transgender" />

                </List.Accordion>
                <TextInput
                    style={[styles._input, { borderRadius: 10 }]}
                    multiline
                    numberOfLines={4}
                    placeholder="Express yourself"
                />
                <TextInput style={styles._input} placeholder="Facebook" />
                <TextInput style={styles._input} placeholder="Instagram" />
                <TextInput style={styles._input} placeholder="Twitter" />
                <View />
                <TouchableOpacity style={styles._small_btn}>
                    <Text style={styles._btn_text}>Save</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default EditBasicDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',

    },

    _input: {
        backgroundColor: '#C6CCDD',
        borderRadius: 25,
        marginBottom: 10,
        padding: 10,
        paddingHorizontal: 20,
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
        color: "grey"
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
    _subHeading: {
        color: "grey",
        fontWeight: "bold",
        paddingVertical: 5
    }
});
