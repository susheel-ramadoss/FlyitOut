import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Address = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      {/* ====== HEADER ===== */}
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Address</Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => props.navigation.navigate("ChooseAddressList")} >
              <Text style={styles.getCode}>Save</Text>
            </TouchableOpacity>
          </View>
        </Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headText}>
            Deleting or updating an address won’t reflect in it’s associated
            entry
          </Text>
        </View>
        <View style={styles.mainInput}>
          <TextInput style={styles._input1} placeholder="Address Title" />
          <TouchableOpacity onPress={() => props.navigation.navigate("Set Location")}>
            <Entypo name="location-pin" color="#8C57F0" size={30} />
          </TouchableOpacity>
        </View>
        <View>
          {/* =============MAP============ */}
          <Image
            style={styles._map_show}
            source={require('../assets/map.jpg')}
          />
        </View>
        <TextInput
          style={[styles._input, { borderRadius: 10 }]}
          multiline
          numberOfLines={4}
          placeholder="Describe Address"
        />

        <View />
        <View style={styles.deletePhone}>
          <View>
            <Text style={styles.text1}>Delete Address</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[
                styles._checkbox,
                checked && { backgroundColor: '#8C57F0', borderColor: '#8C57F0' },
              ]}
              onPress={() => setChecked(!checked)}>
              {checked ? (
                <AntDesign name="check" size={12} color="white" />
              ) : null}
            </TouchableOpacity>

            <Text style={styles.text2}>Mark as Primarye</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  titleName: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: -70,
  },
  getCode: {
    color: '#8C57F0',
    fontWeight: 'bold',
    fontSize: 17,
  },

  headText: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 380,
    marginVertical: 20,
    color: '#6C6C6C',
  },
  deletePhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'red',
  },
  text2: {
    marginHorizontal: 2,
    fontWeight: 'bold',
    fontSize: 13,
    color: 'gray',
  },
  _checkbox: {
    borderRadius: 3,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
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
    color: 'grey',
  },

  _input1: {
    backgroundColor: '#C6CCDD',
    borderRadius: 25,
    // marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
    flex: 1
    // width: 310,
  },
  mainInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: "nowrap", alignItems: "center",
    marginBottom: 10
  },
  _map_show: {
    width: 360,
    borderRadius: 10,
    marginVertical: 10,
  },
});
