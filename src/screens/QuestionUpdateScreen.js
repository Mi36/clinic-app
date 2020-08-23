import {Button, Input} from '@ui-kitten/components';
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateQuestion} from '../actions/questionAction';

export default function QuestionUpdateScreen({route, navigation}) {
  const dispatch = useDispatch();
  const question = route.params.item;
  const [value, setValue] = useState(question.title);
  const [error, setError] = useState(null);

  return (
    <View>
      <Text style={styles.label}>Edit Question</Text>
      <Input value={value} onChangeText={setValue} />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button
        onPress={() => {
          if (!value.replace(/\s/g, '').length) {
            setError('Please enter your question here.');
            return;
          }
          dispatch(updateQuestion(question.id, value));
          setError(null);
          navigation.goBack();
        }}>
        Save
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  label: {marginLeft: 13, marginVertical: 5},
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});
