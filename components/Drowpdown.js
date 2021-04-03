import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function Drowpdown() {
  const [institution, setInstitution] = useState('');
  return (
    <View>
      <DropDownPicker
        items={[
          {label: 'Kg', value: 'Kg'},
          {label: 'g', value: 'g'},
        ]}
        searchablePlaceholderTextColor="gray"
        seachableStyle={{}}
        searchableError={() => <Text>Institution Not Found</Text>}
        containerStyle={{height: 50,marginLeft:10}}
        placeholder={'Kg'}
        placeholderStyle={{
          fontSize: 18,
          fontWeight: '300',
          color: '#696969',
        }}
        style={{
          backgroundColor: '#C6CCDD',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          borderWidth: 0,
          borderColor: '#9CA5B4',
          width: 70,
        }}
        itemStyle={{
          justifyContent: 'flex-start',
          fontSize: 14,
        }}
        labelStyle={{
          fontSize: 16,
          textAlign: 'left',
          color: 'gray',
        }}
        dropDownStyle={{backgroundColor: 'white'}}
        onChangeItem={(item) =>
          setInstitution({
            institution: item.value,
          })
        }
      />
    </View>
  );
}

let styles = StyleSheet.create({
  _layer: {},
});
