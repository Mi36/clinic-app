import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clientAnswerFetch} from '../actions/questionAction';

export default function clientAnswersScreen({navigation}) {
  const dispatch = useDispatch();
  const id = navigation.getParam('itemId', null);
  const answers = useSelector((state) => state.questions.answers);
  useEffect(() => {
    dispatch(clientAnswerFetch(id));
  }, []);
  return (
    <FlatList
      style={{flex: 1}}
      data={answers}
      keyExtractor={(item) => item.question}
      renderItem={({item}) => (
        <Text>
          {item.question}: {item.answer}
        </Text>
      )}
    />
  );
}
