import {
  FETCH_QUESTIONS_CLIENT,
  ADD_ANSWER,
  TOGGLE_SUCCESS,
  HANDLE_EMPTY_QUESTION,
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
    type: 'FALSE_SUCCESS',
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

export const addQuestion = ({question}) => {
  return (dispatch) => {
    firestore()
      .collection('questions')
      .add({
        title: question,
      })
      .then(() => {
        dispatch({type: ADD_QUESTION});
      })
      .catch((e) => {
        console.log(e);
        dispatch({type: ADD_QUESTION_ERROR, payload: 'something wrong'});
      });
  };
};

export const fetchQuestionClient = () => {
  return (dispatch) => {
    ref.onSnapshot((querySnapshot) => {
      // if (querySnapshot.size === 0) {
      //   dispatch({type: HANDLE_EMPTY_QUESTION});
      //   return;
      // }
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
