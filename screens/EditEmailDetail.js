import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
const EditEmailDetails = () => {
  const [email, setEmail] = React.useState('');

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.headText}>
            Enter your enter phone number below. We will send you a verification
            code
          </Text>
        </View>
        <View style={styles.action}>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email Id"
            onChangeText={(val) => setEmail(val)}
          />
        </View>
        <View style={styles.sendLink}>
          <Text style={{ fontSize: 16, color: 'white' }}>
            Send Verification Link
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditEmailDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 380,
    marginVertical: 20,
    color: 'gray',
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
  sendLink: {
    backgroundColor: '#8C57F0',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 13,
    borderRadius: 25,
    marginVertical: 20,
    width: '100%',
  },
});
