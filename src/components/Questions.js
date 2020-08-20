import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

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
