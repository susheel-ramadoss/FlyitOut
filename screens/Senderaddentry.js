import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { List } from 'react-native-paper';
import DatePicker from './../components/DatePicker';
import { Header, Left, Body, Right, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const AddEntry = (props) => {
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
          <Text style={{ fontSize: 18, textAlign: 'center' }}>Entry Details</Text>
        </View>
        <Image
          source={require('./../assets/traveller.png')}
          style={{ height: 36, width: 30 }}
        />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles._title}>Add Entry</Text>
        <Text style={styles._desc}>
          Kindly add the details of your entry that’s applicable for all your
          items.
        </Text>
        <TouchableOpacity>
          <Text style={styles._learnMore}>Learn more</Text>
        </TouchableOpacity>
        <Text style={styles._label}>Entry Title</Text>
        <TextInput style={styles._input} placeholder="xbox christmas gift" />
        <Text style={styles._sub_heading}>
          Make short, precise and impact. e.g Medicine for mom, gift for brother
          etc.,
        </Text>
        {/*  */}
        <Text style={styles._label}>Personal Message (optional)</Text>

        <TextInput
          style={[styles._input, { borderRadius: 10 }]}
          multiline
          numberOfLines={4}
          placeholder="message"
        />
        <Text style={styles._sub_heading}>
          Say few words that you care in the entry
        </Text>

        <Text style={styles._label}>
          Pickup Location{'     '}
          <AntDesign
            name="exclamationcircle"
            color="#8C57F0"
            style={{ paddingLeft: 30 }}
            size={16}
          />
        </Text>
        <View style={styles._row}>
          <TextInput
            style={[styles._input, { flex: 1 }]}
            placeholder="Pick up Location"
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
          Choose comfortable nearby location to pick item from you
        </Text>

        <Text
          style={styles._label}
        >
          Link Receiver
        </Text>
        <TouchableOpacity title="bill gates" id="1" style={styles._input_file} onPress={() => props.navigation.navigate('Select Receiver')}>
          <Text>bill gates</Text>
          <MaterialIcons name="keyboard-arrow-down" size={25} />

          {/* <List.Item title="Item 1" /> */}
        </TouchableOpacity>

        <Text style={styles.dateText}>Select Date</Text>
        <View style={styles.dateView}>
          <DatePicker />
        </View>
        <Text style={styles._sub_heading}>
          Enter due date as per receiver’s Timezone
        </Text>

        <View style={styles._checkbox_row}>
          <TouchableOpacity
            style={[
              styles._checkbox,
              traveller && { backgroundColor: '#8C57F0', borderColor: '#8C57F0' },
            ]}
            onPress={() => settraveller(!traveller)}>
            {traveller ? (
              <AntDesign name="check" size={12} color="white" />
            ) : null}
          </TouchableOpacity>
          <Text style={[styles._checkbox_desc, finder && { color: 'grey' }]}>
            Allow traveller to split and pick items {'    '}
            <AntDesign
              name="exclamationcircle"
              color="#8C57F0"
              style={{ paddingLeft: 30 }}
              size={16}
            />
          </Text>
        </View>

        <View style={styles._checkbox_row}>
          <TouchableOpacity
            style={[
              styles._checkbox,
              finder && { backgroundColor: '#8C57F0', borderColor: '#8C57F0' },
            ]}
            onPress={() => setfinder(!finder)}>
            {finder ? <AntDesign name="check" size={12} color="white" /> : null}
          </TouchableOpacity>
          <Text style={[styles._checkbox_desc, finder && { color: 'grey' }]}>
            Ask finders to pick traveller for you {'    '}
            <AntDesign
              name="exclamationcircle"
              color="#8C57F0"
              style={{ paddingLeft: 30 }}
              size={16}
            />
          </Text>
        </View>

        <TouchableOpacity onPress={() => props.navigation.navigate('Add Item')}>
          <Text style={styles._add_item}>Add Item</Text>
        </TouchableOpacity>

        <View />

        <TouchableOpacity style={styles._small_btn} onPress={() => props.navigation.navigate("Publish Entry")}>
          <Text style={styles._btn_text}>Preview & Publish</Text>
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
    fontSize: 16,
  },
});
