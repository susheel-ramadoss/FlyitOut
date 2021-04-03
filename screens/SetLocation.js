import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Header, Left, Body, Right, Button } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SetLocation = (props) => {
  return (
    <View style={styles.container}>
      {/* ====== HEADER ===== */}
      <Header
        style={{ backgroundColor: 'transparent', elevation: 0, height: 70 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Set Location</Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ marginRight: 20 }} onPress={() => props.navigation.navigate("Address")}> 
              <Text style={styles.getCode}>Save</Text>
            </TouchableOpacity>
          </View>
        </Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {/* =============MAP============ */}
          <Image
            style={styles._map_show}
            source={require('../assets/fullmap.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SetLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'white',
  },
  titleName: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: -100,
  },
  getCode: {
    color: '#8C57F0',
    fontWeight: 'bold',
    fontSize: 17,
  },

  _map_show: {
    width: '100%',
    height: 1000,
  },
});
