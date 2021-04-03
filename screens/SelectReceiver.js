import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SelectReciver = (props) => {
  return (
    <View style={styles.container}>
      {/* =======================> HEADER <================== */}
      <View style={styles._Header_Mian}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#1F1B1B" />
        </TouchableOpacity>
        <Text style={styles._header_heading}>Select Receiver</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Invite")}>
          <Text style={styles._Add}>Add</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles._card_main}>
          <Image
            source={require('./../assets/receiveravatar.png')}
            style={styles._user_profile}
          />
          <View>
            <Text style={styles._user_name}>Janet Ramirez</Text>
            <Text style={styles._user_number}>+91 1234568902</Text>
            <Text style={styles._user_address}>
              Port Angeles, WA, United State of asdasada America{' '}
            </Text>
          </View>
        </View>

        <View style={styles._card_main}>
          <Image
            source={require('./../assets/userplaceholder.png')}
            style={styles._user_profile}
          />
          <View>
            <Text style={styles._user_name}>Janet Ramirez</Text>
            <Text style={styles._user_number}>+91 1234568902</Text>
            <TouchableOpacity>
              <Text style={styles._pending_btn_text}>Invitation Pending</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles._small_btn}>
          <Text style={styles._btn_text}>Invite New Receiver</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SelectReciver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'white',
  },
  _Header_Mian: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 40
  },
  _header_heading: {
    color: '#000000',
    fontSize: 18,
    letterSpacing: 0.5,
  },

  _Add: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8C57F0',
  },
  _card_main: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    margin: 1,
    borderRadius: 10,
  },
  _user_profile: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 10,
  },
  _user_name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    paddingVertical: 4,
  },
  _user_number: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 5,
  },
  _user_address: {
    width: '80%',
    color: '#6C6C6C',
    fontWeight: 'bold',
    fontSize: 12,
  },
  _pending_btn_text: {
    color: '#8C57F0',
    fontSize: 12,
    fontWeight: 'bold',
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
});
