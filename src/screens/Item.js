import React, {useState} from 'react';
import {View} from 'react-native';

import {Button, Input} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

export default function Item(props) {
  const ref = firestore().collection('questions');

  const question = props.navigation.getParam('item', null);
  const [value, setValue] = useState(question.title);
  const updateItem = () => {
    ref.doc(question.id).update({
      title: value,
    });
  };

  return (
    <View>
      <Input label={'Edit Question'} value={value} onChangeText={setValue} />
      <Button
        onPress={() => {
          updateItem();
          props.navigation.goBack();
        }}>
        Save
      </Button>
    </View>
  );
}
