import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Header, Left, Right, Button } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Invite = (props) => {
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
            Invite
          </Text>
        </View>

        <Right style={{ flex: 1 }} />
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headText}>
            Invite and add receiver to tag them quickly while sending a product.
          </Text>
        </View>
        <Image
          source={require('./../assets/invite.png')}
          style={styles._invite_img}
        />

        <Text style={styles._sub_heading}>
          Enter the following details of anyone you would like to invite and add
          a as receiver
        </Text>

        <Text style={styles._name}>Receiver name</Text>
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

        <TouchableOpacity style={styles._small_btn}>
          <Text style={styles._btn_text}>Invite</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Invite;

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
    textAlign: 'center',
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
  _invite_img: {
    height: 160,
    width: '100%',
    marginVertical: 30,
  },
  _sub_heading: {
    fontSize: 12,
  },
  _name: {
    fontWeight: 'bold',
    color: '#B1B1B1',
    marginVertical: 20,
  },
});
