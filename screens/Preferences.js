import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Body, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Preference = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 10 }}>Measurement type</Text>
        </View>
        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Metric
                </Text>

                <TouchableOpacity>

                  <TouchableOpacity style={styles._eidt_profile_icon}>
                    <AntDesign name="checkcircle" color="#8C57F0" size={25} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles._deailBox}>Kilogram(kg), Metre(m)</Text>
                <View style={styles._row}>


                </View>
              </View>


            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Imperial
                </Text>

                <TouchableOpacity>


                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles._deailBox}>Pound(lb), Foot(ft)</Text>
                <View style={styles._row}>


                </View>
              </View>


            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Preference;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',

  },
  _row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',

  },
  _heading: {
    fontWeight: 'bold',
    marginVertical: 10
  },
  _edit: {
    color: '#8C57F0',
    fontWeight: 'bold',
  },
  _number: {
    flexDirection: 'row',
    marginVertical: 14
  },
  _deailBox: {
    color: '#6C6C6C',
    fontSize: 15,

  },
  _Primary: {
    color: '#8C57F0',
    borderWidth: 2,
    padding: 2,
    paddingHorizontal: 10,
    borderColor: '#8C57F0',
    borderRadius: 7,
    marginVertical: 13

  },
  _rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderTopColor: '#ECECEC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    marginVertical: 10
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginVertical: -10

  },
  _eidt_profile_icon: {

  },
  titleName: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: -70

  },
  getCode: {
    color: '#8C57F0',
    fontWeight: 'bold',
    fontSize: 17
  },
});
