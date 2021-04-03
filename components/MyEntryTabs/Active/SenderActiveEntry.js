import React from 'react';
import {View, Text, Button, StyleSheet, Image, ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SenderActiveEntry = () => {
  let data = [
    {
      title: '',
      des: '',
      url: '',
    },
    {
      title: '',
      des: '',
      url: '',
    },

    {
      title: '',
      des: '',
      url: '',
    },

    {
      title: '',
      des: '',
      url: '',
    },

    {
      title: '',
      des: '',
      url: '',
    },

    {
      title: '',
      des: '',
      url: '',
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((val, i) => {
          return (
            <View style={styles._Col} key={i}>
              <View style={styles._cardHeader}>
                <Text>Package Status</Text>
                <Text>ID49385</Text>
              </View>
              <View style={styles._row}>
                <Image
                  source={require('./../../../assets/wallet.png')}
                  style={styles._wallet}
                />
                <View style={styles._detail}>
                  <Text style={{color: '#707070'}}>Transit : UK.</Text>
                  <Text style={{color: '#707070'}}>
                    Last Updated : Real-time.
                  </Text>
                </View>
              </View>
              <View style={styles._range}>
                <View style={styles._filled} />
              </View>
              <View style={styles._footer}>
                <Text>Track Your Package</Text>
                <AntDesign name="rightcircle" color="#8C57F0" size={25} />
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SenderActiveEntry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _wallet: {
    height: 35,
    width: 35,
  },
  _row: {
    flexDirection: 'row',
    // margin:10,
    // justifyContent:"center",
    alignItems: 'center',
    marginVertical: 10,
  },
  _range: {
    height: 5,
    borderRadius: 5,
    backgroundColor: '#EAEAEA',
  },
  _filled: {
    width: '40%',
    backgroundColor: '#8C57F0',
    flex: 1,
    borderRadius: 5,
  },
  _Col: {
    flexDirection: 'column',
    borderWidth: 1,
    borderColor:"#EAEAEA",
    // borderRadius: 1,
    marginVertical: 5,
    elevation: 1,
    padding: 15,
  },
  _detail: {
    padding: 10,
  },
  _footer: {
    flexDirection: 'row',
    paddingVertical: 20,
    justifyContent: 'space-between',
    paddingBottom:5
  },
  _cardHeader:{
    flexDirection: 'row',
    // paddingVertical: 10,
    justifyContent: 'space-between',
  }
});
