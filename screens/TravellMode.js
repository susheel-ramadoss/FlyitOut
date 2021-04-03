import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TravellMode = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('FlightTravel')}>
        <Image
          source={require('./../assets/plane.png')}
          style={styles._image}
        />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 30 }}>
          <Text style={styles._entryText}>Flight</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('AddBusDetail')}>
        <Image source={require('./../assets/bus.png')} style={styles._image} />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 30 }}>
          <Text style={styles._entryText}>Bus</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('AddTrainDetail')}>
        <Image
          source={require('./../assets/train.jpg')}
          style={styles._image}
        />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 30 }}>
          <Text style={styles._entryText}>Train</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles._box}
        onPress={() => props.navigation.navigate('AddCarDetail')}>
        <Image source={require('./../assets/car.png')} style={styles._image} />
        <View style={{ justifyContent: 'flex-start', flex: 1, paddingLeft: 30 }}>
          <Text style={styles._entryText}>Private Commute</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TravellMode;

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
    elevation: 0.5,
    borderRadius: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginVertical: 10,
  },
  _entryText: {
    color: '#363636',
    fontSize: 17,
  },
});
