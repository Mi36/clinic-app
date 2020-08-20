import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function ClientListItem(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('ClientAnswers', {
          itemId: props.data.id,
        });
      }}>
      <View>
        <Text>{props.data.id}</Text>
      </View>
    </TouchableOpacity>
  );
}
