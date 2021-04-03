import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {List} from 'react-native-paper';

const AddEntry = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles._input} placeholder="Title" />
        <TextInput
          style={[styles._input, {borderRadius: 10}]}
          multiline
          numberOfLines={4}
          placeholder="Description"
        />
        <TextInput style={styles._input} placeholder="Pick up Location" />
        <TextInput style={styles._input} placeholder="Receiver’s Address" />
        <TextInput style={styles._input} placeholder="Weight" />
        <List.Accordion
          title="Spilt-able Items"
          id="1"
          style={styles._input_file}>
          <List.Item title="Item 1" />
        </List.Accordion>
        <List.Accordion
          title="Looking for a Finde"
          id="2"
          style={styles._input_file}>
          <List.Item title="Item 2" />
        </List.Accordion>
        <View />
        <View style={styles._galleryRow}>
          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>

          <TouchableOpacity style={styles._gallery}>
            <FontAwesome name="photo" size={30} color="grey" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles._small_btn}>
          <Text style={styles._btn_text}>Add Entry</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddEntry;

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
});
