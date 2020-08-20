import {
  ADD_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  QUESTION_CHANGED,
  QUESTION_FETCH_SUCCES,
  ADD_QUESTION_ERROR,
  FETCH_CLIENTS,
  FETCH_CLIENT_ANSWERS,
} from './types';
import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('questions');
const clientRef = firestore().collection('clients');

export const questionChange = (text) => {
  return {
    type: QUESTION_CHANGED,
    payload: text,
  };
};

export const deleteQuestion = (id) => {
  return (dispatch) => {
    ref
      .doc(id)
      .delete()
      .then(() => {
        console.log('item deleted');
        dispatch({type: DELETE_QUESTION});
      });
  };
};

const updateItem = () => {
  ref.doc(question.id).update({
    title: value,
  });
};

export const updateQuestion = (id, value) => {
  return (dispatch) => {
    ref
      .doc(id)
      .update({
        title: value,
      })
      .then(() => {
        dispatch({
          type: EDIT_QUESTION,
        });
      });
  };
};

export const clientAnswerFetch = (name) => {
  const dummy = firestore().collection('clients').doc(name);
  const clientAnswers = firestore()
    .collection('clients')
    .doc(name)
    .collection('QAS');

  return (dispatch) => {
    clientAnswers.onSnapshot((querySnapshot) => {
      const answers = [];
      querySnapshot.forEach((doc) => {
        const {answer, question} = doc.data();
        answers.push({
          question,
          answer,
        });
        dispatch({type: FETCH_CLIENT_ANSWERS, payload: answers});
      });
    });
  };
};

export const questionsFetch = () => {
  return (dispatch) => {
    ref.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const {title, complete} = doc.data();
        list.push({
          id: doc.id,
          title,
          complete,
        });
        dispatch({type: QUESTION_FETCH_SUCCES, payload: list});
      });
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

export const fetchClients = () => {
  return (dispatch) => {
    clientRef.onSnapshot((querySnapshot) => {
      const clients = [];
      querySnapshot.forEach((doc) => {
        clients.push({
          id: doc.id,
        });
        dispatch({type: FETCH_CLIENTS, payload: clients});
      });
    });
  };
};
