import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateQuestion} from '../actions/questionAction';

import {Button, Input} from '@ui-kitten/components';

export default function Item(props) {
  const dispatch = useDispatch();
  const question = props.navigation.getParam('item', null);
  const [value, setValue] = useState(question.title);

  return (
    <View>
      <Input label={'Edit Question'} value={value} onChangeText={setValue} />
      <Button
        onPress={() => {
          dispatch(updateQuestion(question.id, value));
          props.navigation.goBack(); // it can be done on reducer
        }}>
        Save
      </Button>
    </View>
  );
}
