import {
  FETCH_QUESTIONS_CLIENT,
  ADD_ANSWER,
  TOGGLE_SUCCESS,
  FALSE_SUCCESS,
} from './types';
import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('questions');
const dummy = firestore().collection('clients').doc('Jhon');

export const toggleSuccess = () => {
  return {
    type: TOGGLE_SUCCESS,
  };
};

export const falseSuccess = (id) => {
  return {
    type: FALSE_SUCCESS,
    payload: id,
  };
};

export const addAnswer = (id, title, answer) => {
  const clientRef = firestore()
    .collection('clients')
    .doc('Jhon')
    .collection('QAS')
    .doc(id);
  return (dispatch) => {
    dummy
      .set({
        dummy: 'dummy',
      })
      .then(() => {
        clientRef.set({
          question: title,
          answer: answer,
          id: id,
        });
      })
      .then(() => {
        dispatch({type: ADD_ANSWER});
      })
      .catch((e) => {
        console.log('something wrong');
      });
  };
};

export const fetchQuestionClient = () => {
  return (dispatch) => {
    ref.onSnapshot((querySnapshot) => {
      const dataList = [];
      querySnapshot.forEach((doc) => {
        const {title} = doc.data();
        dataList.push({
          id: doc.id,
          title,
        });
        dispatch({type: FETCH_QUESTIONS_CLIENT, payload: dataList});
      });
    });
  };
};
