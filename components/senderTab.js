import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Card, CardItem, Body, Switch } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const SenderTab = (props) => {
  let arr = [
    {
      img: require('./../assets/tibs.png'),
      title: '',
      review: [],
      finder: require('./../assets/finder.png'),
      location: <MaterialIcons name="my-location" size={15} style={{ margin: 3 }} />,
      verified: <Text style={{ fontSize: 13, color: "#8C57F0", fontWeight: 'bold', marginHorizontal: 17, borderWidth: 1, padding: 2, borderRadius: 10, borderColor: '#8C57F0' }}> Verified</Text>,
      Address: ' KraoLandia, Brazil'


    },

    {
      img: require('./../assets/tibs.png'),
      title: '',
      review: [],
      finder: require('./../assets/finder.png'),
      location: <Entypo name="location-pin" size={15} style={{ margin: 3 }} />,
      Address: ' KraoLandia, Brazil, Some text here, Some text Some text here'


    },




  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}>
        {arr.map((val, i) => {
          return (
            <TouchableOpacity onPress={() =>props.props.navigate("senderEntryBid")}>
              <Card

                key={i}
                style={{
                  elevation: 5,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  backgroundColor: 'white',
                  borderRadius: 5,


                }}>
                <CardItem >
                  <Body>
                    <Image
                      source={val.img}
                      style={{ height: 200, width: 200, borderRadius: 5, alignSelf: 'center' }}
                    />

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          flex: 1,
                          paddingHorizontal: 5,
                          flexDirection: 'column',
                        }}>
                        <Text style={{ paddingVertical: 3, color: '#8C57F0' }}>#BR8945IN6783</Text>
                        <Text style={{ paddingVertical: 5, color: 'gray', fontWeight: 'bold', fontSize: 15 }}>Medicine for Chennai</Text>
                        <View style={{ flexDirection: 'row' }}>
                          <Entypo name="credit-card" size={15} style={{ margin: 3 }} />
                          <Text style={{ fontSize: 13, color: "#000", fontWeight: 'bold' }}>
                            10 th Feb 2021 IST
                        </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                          {val.location}
                          <Text style={{ fontSize: 13, color: "#707070", fontWeight: 'bold' }}>
                            {val.Address}
                          </Text>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                          <Image
                            source={require('./../assets/gift.png')}
                            style={{ height: 15, width: 15, borderRadius: 5, alignSelf: 'center', marginHorizontal: 4 }}
                          />
                          <Text style={{ fontSize: 13, color: "#707070", fontWeight: 'bold' }}>
                            Chennai, India
                        </Text>

                          {val.verified}
                        </View>

                      </View>
                      <View>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                          <MaterialIcons
                            name="favorite"
                            color="#F11652"
                            size={16}
                          />
                          <Text
                            style={{
                              color: '#6C6C6C',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}>
                            6.5
                        </Text>
                        </TouchableOpacity>
                        <Image
                          source={val.finder}
                          style={{ height: 15, width: 15, borderRadius: 5, alignSelf: 'flex-end' }}
                        />
                      </View>
                    </View>
                  </Body>
                </CardItem>
                <CardItem>

                </CardItem>
              </Card>
            </TouchableOpacity>




          );
        })}
      </ScrollView>
    </View>
  );
};

export default SenderTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
});
