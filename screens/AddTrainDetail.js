import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AddTrainDetail = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('./../assets/train.jpg')}
          style={{
            height: 80,
            width: 80,
            alignSelf: 'center',
            marginVertical: 30,
          }}
        />

        <TextInput style={styles._input} placeholder="Date of Travel" />
        <TextInput style={styles._input} placeholder="Train Name" />
        <TextInput style={styles._input} placeholder="Train  Number" />
        <TextInput style={styles._input} placeholder="From" />
        <TextInput style={styles._input} placeholder="Destination" />
        <TextInput
          style={styles._input}
          placeholder="Possible Pickup Location"
        />
        <TextInput style={styles._input} placeholder="Weight Available." />
        <TextInput style={styles._input} placeholder="Space Available  " />
        <View />
        <TouchableOpacity style={styles._gallery}>
          <FontAwesome name="photo" size={30} color="grey" />
        </TouchableOpacity>

        <TouchableOpacity style={styles._small_btn}>
          <Text style={styles._btn_text}>Add Entry</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default AddTrainDetail;

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
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    height: 150,
  },
  _galleryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
