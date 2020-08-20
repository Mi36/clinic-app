import React from 'react';
import {View} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';

export default function Initial(props) {
  return (
    <View>
      <Button
        style={{marginVertical: 16}}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        Admin
      </Button>
      <Button
        style={{marginVertical: 16}}
        onPress={() => {
          props.navigation.navigate('Client');
        }}>
        clientSection
      </Button>
    </View>
  );
}