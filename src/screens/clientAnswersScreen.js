import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clientAnswerFetch} from '../actions/questionAction';

export default function clientAnswersScreen({navigation}) {
  const dispatch = useDispatch();
  const id = navigation.getParam('itemId', null);
  const answers = useSelector((state) => state.questions.answers);
  useEffect(() => {
    dispatch(clientAnswerFetch(id));
  }, []);
  return (
    <FlatList
      style={{flex: 1}}
      data={answers}
      keyExtractor={(item) => item.question}
      renderItem={({item}) => (
        <View style={styles.placeItem}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>Q: {item.question}</Text>
            <Text>A: {item.answer}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
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
});
