import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';

function List(props) {
  const ref = firestore().collection('questions');
  const deleteItem = () => {
    ref.doc(props.questions.id).delete();
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{backgroundColor: 'grey', marginVertical: 12}}>
        <Text>{props.questions.title}</Text>
      </View>
      <Button
        onPress={() => {
          deleteItem();
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
export default React.memo(List);
