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
import { List } from 'react-native-paper';
const AddBusiness = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Add Business</Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => props.navigation.navigate("Adress Detail")}>
              <Text style={styles.getCode}>Save</Text>
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

        <List.Accordion title="Business Type" id="2" style={styles._input_file}>
          <List.Item title="Travel Agent " />
          <List.Item title="Small Business." />
        </List.Accordion>
        <TextInput style={styles._input} placeholder="Business Title" />
        <TextInput style={styles._input} placeholder="Website" />
        <TextInput
          style={[styles._input, { borderRadius: 10 }]}
          multiline
          numberOfLines={4}
          placeholder="Business Descraption"
        />

        <View />
        <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
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

          <Text style={styles.text2}>Notify me for new product entries</Text>
        </View>
        <View style={styles.deletePhone}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Adress Detail")}>
            <Text style={styles.text1}>Delete Phone</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddBusiness;

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
  text1: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
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
});
