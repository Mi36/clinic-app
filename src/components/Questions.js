import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Input, Layout} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

export default function Questions(props) {
  const [answer, setAnswer] = useState('');
  const dummy = firestore().collection('clients').doc('illyas');
  const clientRef = firestore()
    .collection('clients')
    .doc('illyas')
    .collection('QAS')
    .doc(props.questions.id);
  async function addAnswer() {
    await dummy.set({
      dummy: 'dummy',
    });
    await clientRef.set({
      question: props.questions.title,
      answer: answer,
    });
  }

  useEffect(() => {
    return clientRef.onSnapshot((querySnapshot) => {
      console.log(querySnapshot);
    });
  }, []);

  return (
    <View>
      <Text>{props.questions.title}</Text>
      <View style={{flexDirection: 'row'}}>
        <Input label={'Your Answer'} value={answer} onChangeText={setAnswer} />
        <Button
          onPress={() => {
            addAnswer();
          }}>
          Save
        </Button>
      </View>
    </View>
  );
}
