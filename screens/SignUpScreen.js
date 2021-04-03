import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

const SignInUp = (props) => {
  const [countryCode, setCountryCode] = React.useState({});
  const [number, setNumber] = React.useState();
  const [email, setEmail] = React.useState('');
  const [funllName, setfullName] = React.useState('');

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
      number: { code: countryCode.code, number: number },
    });
  }



  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.footer}>
        <Image
          source={require('./../assets/logo2.png')}
          style={{ height: 60, width: 60, marginVertical: 10, marginTop: 40 }}
        />
        <Text style={styles.text_footer}>Sign up</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 10 }}>
          Enter your information below
        </Text>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Full Name"
            onChangeText={(val) => setfullName(val)}
          />
        </View>

        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email Id"
            onChangeText={(val) => setEmail(val)}
          />
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
            <Text>{countryCode.code} </Text>
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
        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By continuing you agree to the{' '}
            <Text
              style={[
                styles.color_textPrivate,
                { color: '#8C57F0', fontWeight: 'bold' },
              ]}>
              {' '}
              Terms and Conditions.
            </Text>{' '}
            and the{' '}
            <Text
              style={[
                styles.color_textPrivate,
                { color: '#8C57F0', fontWeight: 'bold' },
              ]}>
              Privacy Policy
            </Text>
          </Text>
        </View>
        <View
          style={styles.button}
          onPress={() => navigation.navigate('OtpScreen')}>
          <TouchableOpacity style={styles.signIn} onPress={() => userSignup()}>
            <Text style={[styles.textSign]}>Get code</Text>
          </TouchableOpacity>
          <Text style={styles._alreadyText}>
            Already have an account?{' '}
            <Text
              onPress={() => props.navigation.navigate("SignInScreen")}
              style={[
                styles.color_textPrivate,
                { color: '#8C57F0', fontWeight: 'bold' },
              ]}>
              Log in
            </Text>{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  footer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 28,
    marginBottom: 20,
    fontFamily: "ComfortaaRegular"

  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#C6CCDD',
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
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#8C57F0',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  image: {
    flex: 1,
    marginBottom: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  _alreadyText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    marginVertical: 30,
  },
});
