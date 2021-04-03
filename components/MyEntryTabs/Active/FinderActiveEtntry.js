import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FinderActiveEtnry = () => {
    return (
      <View style={styles.container}>
        <Text>FinderActiveEtnry</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default FinderActiveEtnry;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
