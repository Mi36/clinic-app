import React from 'react';
import {View} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

export default function Initial(props) {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Button
        style={{marginVertical: 16}}
        onPress={() => {
          props.navigation.navigate('Admin');
        }}>
        Admin
      </Button>
      <Button
        style={{marginVertical: 16}}
        onPress={() => {
          props.navigation.navigate('ClientLogin');
        }}>
        clientSection
      </Button>
    </View>
  );
}
Initial.navigationOptions = () => {
  return {
    header: () => false,
  };
};
