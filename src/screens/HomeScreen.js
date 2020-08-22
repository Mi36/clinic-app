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
  addQueLoading,
  addQuestion,
  deleteQuestion,
  fetchClients,
  questionChange,
  questionsFetch,
} from '../actions/questionAction';

export default function HomeScreen({navigation}) {
  const {
    question,
    list,
    loading,
    add_que_error,
    update_que_error,
    delete_que_error,
    add_que_loading,
  } = useSelector((state) => state.questions);
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
      {add_que_loading === true ? (
        <ActivityIndicator size="small" color="greys" />
      ) : (
        <Button
          style={styles.margin}
          onPress={() => {
            if (!question.replace(/\s/g, '').length) {
              setError('Please enter your question here.');
              return;
            }
            dispatch(addQueLoading());
            dispatch(addQuestion({question}));
            setError(null);
          }}>
          Add Qustion
        </Button>
      )}

      {add_que_error && <Text style={styles.errorText}>{add_que_error}</Text>}
      {update_que_error && (
        <Text style={styles.errorText}>{update_que_error}</Text>
      )}
      {delete_que_error && (
        <Text style={styles.errorText}>{delete_que_error}</Text>
      )}

      {loading && list.length !== 0 ? (
        <ActivityIndicator size="large" color="greys" />
      ) : (
        <FlatList
          style={styles.flatlistStyle}
          data={list}
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
