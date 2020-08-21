import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {deleteQuestion} from '../actions/questionAction';
function List(props) {
  const dispatch = useDispatch();
  return (
    <View style={styles.placeItem}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.questions.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(deleteQuestion(props.questions.id));
            }}>
            <Text style={styles.textstyle}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate('Item', {
                item: props.questions,
              });
            }}>
            <Text style={styles.textstyle}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textstyle: {
    color: 'white',
  },
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
});

export default List;
