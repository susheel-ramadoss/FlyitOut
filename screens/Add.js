import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Add = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('SenderAddEntry')}>
        <Image
          source={require('./../assets/sender.png')}
          style={styles._image}
        />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 20 }}>
          <Text style={styles._entryText}>Send Product</Text>
          <Text style={styles._desc}>
            Add product, link to receiver, look
            for traveller or finder, schedule
            pickup and ship it.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('AddTravel')}>
        <Image
          source={require('./../assets/traveller.png')}
          style={styles._image}
        />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 20 }}>
          <Text style={styles._entryText}>Add Travel</Text>
          <Text style={styles._desc}>
            Add travel details, find, bid and
            pickup product to carry, deliver it
            and get paid.
          </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity style={styles._box}>
        <Image
          source={require('./../assets/receiver.png')}
          style={styles._image}
        />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 20 }}>
          <Text style={styles._entryText}>Add Receiver</Text>
          <Text style={styles._desc}>Add receiver details, ask them to
          accept, link them quickly with
product, bid faster.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  _image: {
    height: 70,
    width: 70,
  },
  _box: {
    elevation: 2,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
    // borderWidth:1

  },
  _entryText: {
    color: '#8C57F0',
    fontSize: 17,
    fontWeight: "bold"
  },
  _desc: {
    color: "#6C6C6C",
    fontWeight: "bold"
  }
});
