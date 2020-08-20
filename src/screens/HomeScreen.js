import React, {useEffect} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import {Layout, Text, Button, Input} from '@ui-kitten/components';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(questionsFetch());
    dispatch(fetchClients());
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Layout style={{flex: 1, alignItems: 'center'}}>
        <Input
          label={'New Question'}
          value={question}
          onChangeText={(text) => dispatch(questionChange(text))}
        />
        <Button onPress={() => dispatch(addQuestion({question}))}>
          Add Qustion
        </Button>
        <Button
          onPress={() => {
            navigation.navigate('loginFlow');
          }}>
          LogOut
        </Button>

        {loading ? (
          <View>
            <Text>loading.....</Text>
          </View>
        ) : (
          <FlatList
            style={{flex: 1}}
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
    headerTitle: 'Questions',

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
