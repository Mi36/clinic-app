import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

export default function ClientListScreen() {
  const [list, setList] = useState('');
  const ref = firestore().collection('clients');

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        list.push({
          id: doc.id,
        });
      });
      setList(list);
    });
  }, []);
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text>{list[0].id}</Text>
      <Text>{list[1].id}</Text>
    </View>
  );
}
