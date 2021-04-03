import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Header, Left, Right, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const EditPhoneNumber = (props) => {
  const [countryCode, setCountryCode] = React.useState({});

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const unSubscribe = props.navigation.addListener('focus', async () => {
      await AsyncStorage.getItem('code').then((res) => {
        if (res !== null) {
          setCountryCode(JSON.parse(res));
        } else {
          setCountryCode({
            code: '+91',
            name: 'India',
          });
        }
      });
    });
    return () => {
      unSubscribe;
    };
  }, [props]);

  const userSignup = () => {
    props.navigation.navigate('Verification', {
      number: { code: countryCode.code, number: number, eamil, funllName },
    });
  };
  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>
            Phone Number
          </Text>
        </View>

        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Text style={styles.getCode}>Get Code</Text>
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
        <View style={styles.action}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('CountryCode')}
            style={{
              borderRightWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderColor: '#707070',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>+91</Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Phone Number"
            onChangeText={(val) => setNumber(val)}
          />
        </View>
        <View style={styles.deletePhone}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={styles.text1}>Delete Phone</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            {/* <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }} */}
            {/* /> */}

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

export default EditPhoneNumber;

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
  },
  getCode: {
    color: '#8C57F0',
    fontWeight: 'bold',
    fontSize: 17,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#E1E1E1',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    alignItems: 'center',
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
    fontSize: 20,
    color: 'red',
  },
  text2: {
    marginHorizontal: 2,
    fontWeight: 'bold',
    fontSize: 12,
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
});
