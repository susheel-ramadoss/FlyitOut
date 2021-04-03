import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DatePicker from './../components/DatePicker';
import { Header, Button } from 'native-base';
import DrowDown from './../components/Drowpdown';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RBSheet from "react-native-raw-bottom-sheet";

const AddTravel = (props) => {
  const refRBSheet = useRef();

  const [traveller, settraveller] = React.useState(false);
  const [finder, setfinder] = React.useState(true);

  return (
    <View style={styles.container}>
      <Header
        style={{
          backgroundColor: 'transparent',
          elevation: 0,
          height: 70,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </View>
        <View style={{ flex: 1, alignSelf: 'center' }}>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>Add Travel</Text>
        </View>
        <Image
          source={require('./../assets/traveller.png')}
          style={{ height: 36, width: 30 }}
        />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title}>Travel Details</Text>
        <Text style={styles._desc}>
          Kindly add the details of your entry that’s applicable for all your
          items.
        </Text>
        <TouchableOpacity>
          <Text style={styles._learnMore}>Learn more</Text>
        </TouchableOpacity>
        {/* current location */}
        <Text style={styles._label}>Current Location</Text>
        <View style={styles._row}>
          <TextInput
            style={[styles._input, { flex: 1 }]}
            placeholder="los  angeles"
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('ChooseAddressList')}>
            <Entypo
              name="location-pin"
              color="#8C57F0"
              size={25}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles._sub_heading}>
          We will use your location to suggest nearby packages to pickup
        </Text>

        {/* Departure Location */}
        <Text style={styles._label}>Departure Location</Text>

        <View style={styles._row}>
          <TextInput
            style={[styles._input, { flex: 1 }]}
            placeholder="los angeles airport"
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Select Address')}>
            <Entypo
              name="location-pin"
              color="#8C57F0"
              size={25}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.dateText}>Select Date</Text>
        {/* Departure Date */}
        <View style={styles.dateView}>
          <DatePicker />
        </View>
        <Text style={styles._sub_heading}>
          Enter date as per departing location timezone
        </Text>

        {/* Arrival Date */}
        <Text style={styles._label}>Arrival Date</Text>
        <View style={styles._row}>
          <TextInput
            style={[styles._input, { flex: 1 }]}
            placeholder="chennai airport"
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Select Address')}>
            <Entypo
              name="location-pin"
              color="#8C57F0"
              size={25}
              style={{ paddingLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles._sub_heading}>
          We will use your location to suggest nearby packages to pickup
        </Text>
        <Text style={styles._label}>Available Weight</Text>

        {/* <View style={styles._row}>
          <TextInput
            style={[styles._input, { flex: 1 }]}
            placeholder="chennai airport"
          />
          <DrowDown style={styles._dropdown} />
        </View> */}

        <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
          <TextInput style={[styles._input, { flex: 1, height: 50 }]} placeholder="Weight" />
          {/* <Drowpdown /> */}
          <TouchableOpacity id="1" style={[styles._input_file, { marginLeft: 10 }]} onPress={() => refRBSheet.current.open()}>
            <Text>Kg</Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </TouchableOpacity>

        </View>



        <Text style={styles._sub_heading}>
          Enter weight that you are willing to carry with your travel
        </Text>

        <View style={styles._row}>
          <Text style={styles._label}>Travel preference</Text>
          <Text style={[styles._label, { color: '#8C57F0' }]} onPress={() => props.navigation.navigate('TravelPreference')}>Add</Text>
        </View>

        <Text style={[styles._sub_heading, { marginTop: 10 }]}>
          Choose item types that you are not willing to carry with your travel
        </Text>
        <Text />
        <Text style={styles._label}>Personal Message (optional)</Text>


        <TextInput
          style={[styles._input, { borderRadius: 10 }]}
          multiline
          numberOfLines={4}
          placeholder="message"
        />
        <Text style={styles._sub_heading}>
          Say few words that you care in the travel
        </Text>

        <Text style={styles._travel_mode} onPress={() => props.navigation.navigate("TravellMode")}>Add Travel Mode</Text>


        <TouchableOpacity style={styles._small_btn} onPress={() => props.navigation.navigate("TravelPreview")}>
          <Text style={styles._btn_text}>Preview & Publish</Text>
        </TouchableOpacity>
      </ScrollView>
      <RBSheet
        ref={refRBSheet}
        height={150}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            padding: 10
          }
        }}
      >
        <View style={styles._row}>
          <Text style={[styles._bottom_sheet_title, { color: "#8C57F0" }]}>Kilogram(Kg)</Text>
          <AntDesign name="checkcircle" color="#8C57F0" size={20} />
        </View>

        <View style={styles._row}>
          <Text style={styles._bottom_sheet_title}>Gram(g)</Text>
        </View>



      </RBSheet>
    </View>
  );
};

export default AddTravel;

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
    marginTop: 10,
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
    marginTop: 10,
  },
  _small_btn: {
    textTransform: 'capitalize',
    backgroundColor: '#8C57F0',
    borderRadius: 30,
    marginTop: 30,
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
  _label: {
    fontWeight: 'bold',
    // paddingVertical: 5
  },
  _sub_heading: {
    fontSize: 12,
    color: '#6C6C6C',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  _row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    fontWeight: 'bold',
    width: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  dateView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'rgb(240, 240, 240)',
    padding: 6,
    borderRadius: 25,
    paddingRight: 15,
    paddingLeft: 15,
    marginBottom: 10,
  },
  selectedDateText: {
    marginTop: 10,
    color: 'rgb(51,51,51)',
  },
  timeText: {
    fontWeight: 'bold',
    width: '85%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 20,
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
  titleName: {
    borderWidth: 2,
    flex: 1,
  },
  _dropdown: {
    height: 50,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  _travel_mode: {
    color: "#8C57F0",
    fontSize: 16,
    paddingTop: 5
  },
  _bottom_sheet_title:{
    fontWeight:"bold",
    fontSize:16,paddingTop:10
  }
});
