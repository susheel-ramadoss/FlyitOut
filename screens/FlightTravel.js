import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const FlightTravel = (props) => {
  const [checked, setChecked] = React.useState(false);
  const [ticketeNum, setticketeNum] = React.useState('WS176214');
  const [flightName, setflightName] = React.useState('spice  jet');
  const [flightNum, setflightNum] = React.useState('GF5232');

  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Flight Info</Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => props.navigation.navigate('TravelPreview')}>
              <Text style={styles.getCode}>Add</Text>
            </TouchableOpacity>
          </View>
        </Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headText}>
            Enter your enter phone number below. We will send you a verification
            code
          </Text>
        </View>

        <Text style={styles._heading}>Ticket Number</Text>
        <TextInput
          style={styles._input}
          value={ticketeNum}
          keyboardType="number-pad"
        />
        <Text style={styles._heading}>Flight Name</Text>
        <TextInput style={styles._input} value={flightName} />

        <Text style={styles._heading}>Flight Number</Text>
        <TextInput
          style={styles._input}
          value={flightNum}
          keyboardType="number-pad"
        />

        <View />

        <TouchableOpacity
        >
          <Text style={styles.add_ticket}>Add Ticket Image</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default FlightTravel;

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
    color: 'gray',
  },
  deletePhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  add_ticket: {
    fontSize: 16,
    color: '#8C57F0',
    marginVertical: 10,
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
  _heading: {
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});
