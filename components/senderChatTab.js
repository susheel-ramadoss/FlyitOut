import React from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
} from 'native-base';

const SenderChatTab = () => {
  let arr = [
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
    {
      name: '',
      avatar: '',
      message: '',
      time: '',
      unread: '',
    },
  ];
  return (
    <Container>
      <Content>
        <ScrollView showsVerticalScrollIndicator={false}>
          {arr.map((val, i) => {
            return (
              <List key={i} >
                <ListItem avatar style={{borderBottomWidth:0}}>
                  <Left>
                    <Thumbnail source={require('./../assets/homeavatar.png')} />
                  </Left>
                  <Body style={{paddingBottom:20}}>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={1} style={{color: '#707070'}}>
                      Hey
                    </Text>
                  </Body>
                  <Right>
                    <Text note>3:43 pm</Text>
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 20,
                        backgroundColor: '#8C57F0',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 10,
                      }}>
                      <Text style={{color: 'white'}}>1</Text>
                    </View>
                  </Right>
                </ListItem>
              </List>
            );
          })}
        </ScrollView>
      </Content>
    </Container>
  );
};

export default SenderChatTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
