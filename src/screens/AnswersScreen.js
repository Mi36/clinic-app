import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {clientAnswerFetch} from '../actions/questionAction';

export default function AnswersScreen({route}) {
  const dispatch = useDispatch();
  const id = route.params.itemId;
  console.log(id);
  const answers = useSelector((state) => state.questions.answers);
  console.log(answers);
  useEffect(() => {
    dispatch(clientAnswerFetch(id));
  }, [dispatch, id]);
  return (
    <FlatList
      style={styles.flex}
      data={answers}
      keyExtractor={(item) => item.id}
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
  flex: {
    flex: 1,
  },
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
