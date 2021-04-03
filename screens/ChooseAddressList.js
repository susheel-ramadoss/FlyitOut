import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const ChooseAddressList = (props) => {
  return (
    <View style={styles.container}>
      {/* ====== HEADER ===== */}
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Select Address</Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => props.navigation.navigate("Address")}>
              <Text style={styles.getCode}>Add</Text>
            </TouchableOpacity>
          </View>
        </Right>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>Home</Text>
                <TouchableOpacity
                  style={styles._eidt_profile_icon}
                  onPress={() => props.navigation.navigate('Address')}>
                  <AntDesign name="checkcircle" color="#8C57F0" size={25} />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles._deailBox}>
                  #13 th street, near zolo pg, below banyan tree Bangalore,
                  Karnataka
                </Text>
                <View style={styles._row}></View>
              </View>

              <Text style={styles._Primary}>Primary</Text>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Restaurant
                </Text>

              </View>
              <View>
                <Text style={styles._deailBox}>
                  #13 th street, near zolo pg, below banyan tree Bangalore,
                  Karnataka
                </Text>
                <View style={styles._row}></View>
              </View>
            </Body>
          </CardItem>
        </Card>

        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>School</Text>
              </View>
              <View>
                <Text style={styles._deailBox}>
                  #13 th street, near zolo pg, below banyan tree Bangalore,
                  Karnataka
                </Text>
                <View style={styles._row}></View>
              </View>
            </Body>
          </CardItem>
        </Card>
      </ScrollView>
    </View>
  );
};

export default ChooseAddressList;

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
    marginVertical: 10,
  },
  _edit: {
    color: '#8C57F0',
    fontWeight: 'bold',
  },
  _number: {
    flexDirection: 'row',
    marginVertical: 14,
  },
  _deailBox: {
    color: '#6C6C6C',
    fontSize: 15,
  },
  _Primary: {
    color: '#8C57F0',
    borderWidth: 2,
    padding: 2,
    paddingHorizontal: 10,
    borderColor: '#8C57F0',
    borderRadius: 7,
    marginVertical: 13,
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
    marginVertical: 10,
  },
  email: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginVertical: -10,
  },
  _eidt_profile_icon: {},
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
});
