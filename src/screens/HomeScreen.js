import {Button, Input, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addQuestion,
  deleteQuestion,
  fetchClients,
  questionChange,
  questionsFetch,
} from '../actions/questionAction';

export default function HomeScreen({navigation}) {
  const question = useSelector((state) => state.questions.question);
  let lists = useSelector((state) => state.questions.list);
  const loading = useSelector((state) => state.questions.loading);
  const QuestionError = useSelector((state) => state.questions);

  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchClients());
    dispatch(questionsFetch());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.flex}>
      <Input
        label={'New Question'}
        value={question}
        onChangeText={(text) => dispatch(questionChange(text))}
        multiline
        textAlignVertical="top"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <Button
        style={styles.margin}
        onPress={() => {
          if (!question.replace(/\s/g, '').length) {
            setError('Please enter your question here.');
            return;
          }
          dispatch(addQuestion({question}));
          setError(null);
        }}>
        Add Qustion
      </Button>

      {QuestionError.add_que_error && (
        <Text style={styles.errorText}>{QuestionError.add_que_error}</Text>
      )}
      {QuestionError.update_que_error && (
        <Text style={styles.errorText}>{QuestionError.update_que_error}</Text>
      )}
      {QuestionError.delete_que_error && (
        <Text style={styles.errorText}>{QuestionError.delete_que_error}</Text>
      )}

      {loading && lists.length !== 0 ? (
        <ActivityIndicator size="large" color="greys" />
      ) : (
        <FlatList
          style={styles.flatlistStyle}
          data={lists}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <View style={styles.placeItem}>
              <View style={styles.infoContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      dispatch(deleteQuestion(item.id));
                    }}>
                    <Text style={styles.textstyle}>Delete</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('Update', {
                        item: item,
                      });
                    }}>
                    <Text style={styles.textstyle}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  margin: {marginVertical: 10},
  flex: {flex: 1},
  errorText: {
    color: 'red',
  },
  textstyle: {
    color: 'white',
  },
  buttonContainer: {flexDirection: 'row'},
  button: {
    backgroundColor: '#3d80e2',
    marginRight: 10,
    borderRadius: 3,
    marginTop: 10,
  },
  placeItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: '#666',
    fontSize: 16,
  },
  flatlistStyle: {flex: 1, marginTop: 15},
});

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
