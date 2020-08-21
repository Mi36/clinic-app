import React, {useEffect, useState} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {Layout, Text, Button, Input, Icon} from '@ui-kitten/components';
import List from '../components/List';
import {useDispatch, useSelector} from 'react-redux';
import {
  questionChange,
  questionsFetch,
  addQuestion,
  fetchClients,
} from '../actions/questionAction';

export default function HomeScreen({navigation}) {
  const question = useSelector((state) => state.questions.question);
  const lists = useSelector((state) => state.questions.list);
  const loading = useSelector((state) => state.questions.loading);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionsFetch());
    dispatch(fetchClients());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1}}>
        <Input
          label={'New Question'}
          value={question}
          onChangeText={(text) => dispatch(questionChange(text))}
          multiline
          textAlignVertical="top"
        />
        {error && <Text style={{color: 'red'}}>{error}</Text>}
        <Button
          style={{marginVertical: 10}}
          onPress={() => {
            if (question === '') {
              setError('Please enter your question here.');
              return;
            }
            dispatch(addQuestion({question}));
            setError(null);
          }}>
          Add Qustion
        </Button>

        {loading ? (
          <View>
            <Text>loading.....</Text>
          </View>
        ) : (
          <FlatList
            style={{flex: 1, marginTop: 15}}
            data={lists}
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

HomeScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <Button
        onPress={() => {
          navData.navigation.navigate('loginFlow');
        }}>
        Logout
      </Button>
    ),
  };
};
