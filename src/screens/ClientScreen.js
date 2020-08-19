import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import Questions from '../components/Questions';

import {Button, Input, Layout} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

export default function ClientScreen() {
  const [loadingClient, setClientLoading] = useState(true);
  const [questionsClient, setQuestionsClient] = useState([]);
  const ref = firestore().collection('questions');

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const dataList = [];
      querySnapshot.forEach((doc) => {
        const {title} = doc.data();
        dataList.push({
          id: doc.id,
          title,
        });
      });
      console.log(dataList);
      console.log('dsds', questionsClient);

      setQuestionsClient(dataList);

      if (loadingClient) {
        setClientLoading(false);
      }
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center'}}>
        {loadingClient ? null : (
          <FlatList
            style={{flex: 1}}
            data={questionsClient}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <Questions questions={item} />}
          />
        )}
      </Layout>
    </SafeAreaView>
  );
}
