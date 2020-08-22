import firestore from '@react-native-firebase/firestore';
import {
  ADD_ANSWER,
  FALSE_SUCCESS,
  FETCH_QUESTIONS_CLIENT,
  TOGGLE_SUCCESS,
} from './types';
const ref = firestore().collection('questions');

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
  const dummy = firestore().collection('clients').doc('Jhon');
  const clientRef = firestore()
    .collection('clients')
    .doc('Jhon')
    .collection('QAS')
    .doc(id);
  return (dispatch) => {
    dummy
      .set({
        Usename: 'Jhon',
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
