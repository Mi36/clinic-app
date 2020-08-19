import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';
import firestore from '@react-native-firebase/firestore';
import List from '../components/List';

export default function HomeScreen({navigation}) {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  const ref = firestore().collection('questions');
  async function addQuestion() {
    await ref.add({
      title: question,
      complete: false,
    });
    setQuestion('');
  }

  useEffect(() => {
    return ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {title, complete} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
      });

      setQuestions(list);

      if (loading) {
        setLoading(false);
      }
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center'}}>
        <Input
          label={'New Question'}
          value={question}
          onChangeText={setQuestion}
        />
        <Button onPress={() => addQuestion()}>Add Qustion</Button>
        <Button onPress={() => navigation.navigate('Client')}>
          ClientScreen
        </Button>
        <Button onPress={() => navigation.navigate('ClientList')}>
          ClientListScreen
        </Button>
        {loading ? null : (
          <FlatList
            style={{flex: 1}}
            data={questions}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <List questions={item} navigation={navigation} />
            )}
          />
        )}
      </Layout>
    </SafeAreaView>
  );
}
