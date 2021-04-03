import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Card, CardItem, Body, Switch} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const TravellerTab = () => {
  let arr = [
    {
      img: require('./../assets/profile.png'),
      title: '',
      review: [],
      finder:require('./../assets/finder.png'),
      location: <MaterialIcons name="my-location" size={15} style={{margin: 3}} />,
      verified:<Text style={{fontSize: 11,color:"#8C57F0", marginHorizontal:17, borderWidth:1, padding:1, borderRadius:6, borderColor:'#8C57F0'}}> Verified</Text>,
      Address:' Chennai, India',
      secLocation:<Entypo name="location-pin" size={15} style={{margin: 3}} />,
      secAddress:'KraoLandia, Brazil'
    },
   
  ];
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: 'white'}}>
        {arr.map((val, i) => {
          return (
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
              <CardItem  >
                <Body>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={val.img}
                      style={{height: 50, width: 50, borderRadius: 5}}
                    />
                    <View
                      style={{
                        flex: 1,
                        paddingHorizontal: 5,
                        flexDirection: 'column',
                      }}>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>

                      <View>
                        <Text style={{fontSize: 15,color:"#000", fontWeight:'bold', marginHorizontal:7}}>
                        Johny Brewser
                        </Text>
                      </View>
                      <TouchableOpacity style={{flexDirection: 'row'}}>
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
                            </View>
                            <View style={{flexDirection: 'row'}}>
                      <Image
                    source={require('./../assets/flight.png')}
                    style={{height: 15, width: 15, borderRadius: 5, alignSelf:'center', marginHorizontal:4}}
                  />
                        <Text style={{fontSize: 13,color:"#707070", fontWeight:'bold'}}>
                        Flight
                        </Text>

{val.verified}
                      </View>
                      <View style={{flexDirection: 'row'}}>
                       {val.location}
                        <Text style={{fontSize: 13,color:"#707070", fontWeight:'bold'}}>
                       {val.Address}
                        </Text>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                       {val.secLocation}
                       <View>
                        <Text style={{fontSize: 13,color:"#707070", fontWeight:'bold'}}>
                       {val.secAddress}
                        </Text>
                        <Text style={{fontSize: 12,color:"#707070",}}>
                        15 th Feb 2021
                        </Text>
                       </View>
                        
                      </View>

                      
                      
                    </View>
                   
                  </View>
                </Body>
              </CardItem>
              <CardItem >
               
              </CardItem>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TravellerTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
});
