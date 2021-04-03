import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Body, CardItem } from 'native-base';
const EditContactDetail = (props) => {
  console.log("===============>",props.route.params.contact)
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <CardItem>
          <Body>
            <View style={styles._row}>
              <Text style={[styles._heading, { fontSize: 18 }]}>
                Phone Number
                </Text>

              <TouchableOpacity onPress={() => props.navigation.navigate('Phone Number')}>

                <Text style={styles._edit}>Add</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles._deailBox}>You can link upto 3 phone numbers to your account</Text>
              <View style={styles._row}>
                <View style={styles._number}>
                  <Text style={{ fontWeight: 'bold', color: "#6C6C6C" }}>{props.route.params.contact} </Text>
                  <Text style={styles._edit}>(India)</Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Phone Number')}>
                  <Text style={styles._edit}>Edit</Text>
                </TouchableOpacity>

              </View>
            </View>

            <Text style={styles._Primary}>Primary</Text>

            <View style={styles._rows}>

              <View style={styles._number}>
                <Text style={{ fontWeight: 'bold', color: "#6C6C6C" }}>+91 1234567890 </Text>
                <Text style={styles._edit}>(India)</Text>
              </View>
              <TouchableOpacity onPress={() => props.navigation.navigate('Phone Number')}>
                <Text style={styles._edit}>Edit</Text>
              </TouchableOpacity>
            </View>


            <View>
              <Text style={{ fontWeight: 'bold', color: "#000", fontSize: 18 }}>Email</Text>

              <View style={styles.email}>

                <View style={styles._number}>

                  <Text style={{ fontWeight: 'bold', color: "#6C6C6C" }}>trump@us.gov.in </Text>

                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate('Email Detail')}>
                  <Text style={styles._edit}>Edit</Text>
                </TouchableOpacity>

              </View>
            </View>
            <Text style={{ color: "#8C57F0", fontSize: 15 }}>Verify</Text>

            {/* </View> */}

          </Body>
        </CardItem>

      </ScrollView>
    </View>
  );
};

export default EditContactDetail;

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
    fontSize: 12,
    fontWeight: 'bold'

  },
  _Primary: {
    color: '#8C57F0',
    borderWidth: 2,
    padding: 2,
    paddingHorizontal: 10,
    borderColor: '#8C57F0',
    borderRadius: 7

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
});
