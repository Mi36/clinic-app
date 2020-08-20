import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {deleteQuestion, updateQuestion} from '../actions/questionAction';
function List(props) {
  const dispatch = useDispatch();
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{backgroundColor: 'grey', marginVertical: 12}}>
        <Text>{props.questions.title}</Text>
      </View>
      <Button
        onPress={() => {
          dispatch(deleteQuestion(props.questions.id));
        }}>
        delete
      </Button>
      <Button
        onPress={() => {
          props.navigation.navigate('Item', {
            item: props.questions,
          });
        }}>
        Update
      </Button>
    </View>
  );
}
export default List;
