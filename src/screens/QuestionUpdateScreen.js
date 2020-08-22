import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateQuestion} from '../actions/questionAction';
import {Button, Input} from '@ui-kitten/components';

export default function QuestionUpdateScreen({route, navigation}) {
  const dispatch = useDispatch();
  const question = route.params.item;
  const [value, setValue] = useState(question.title);

  return (
    <View>
      <Input label={'Edit Question'} value={value} onChangeText={setValue} />
      <Button
        onPress={() => {
          dispatch(updateQuestion(question.id, value));
          navigation.goBack();
        }}>
        Save
      </Button>
    </View>
  );
}
