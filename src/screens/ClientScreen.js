import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import Questions from '../components/Questions';
import {useDispatch, useSelector} from 'react-redux';
import {fetchQuestionClient} from '../actions/clientActions';

import {Layout} from '@ui-kitten/components';

export default function ClientScreen() {
  const data = useSelector((state) => state.clientQuestions.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestionClient());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center'}}>
        <FlatList
          style={{flex: 1}}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Questions questions={item} />}
        />
      </Layout>
    </SafeAreaView>
  );
}
