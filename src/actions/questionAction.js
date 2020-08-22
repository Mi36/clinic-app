import firestore from '@react-native-firebase/firestore';
import {
  ADD_QUESTION,
  DELETE_QUESTION,
  EDIT_QUESTION,
  FETCH_CLIENTS,
  FETCH_CLIENT_ANSWERS,
  HANDLE_ADD_QUE_ERROR,
  HANDLE_DELETE_QUE_ERROR,
  HANDLE_UPDATE_QUE_ERROR,
  QUESTION_CHANGED,
  QUESTION_FETCH_SUCCES,
  TOGGLE_LOADING,
  HANDLE_EMPTY_QUESTION,
  ADD_QUESTION_LOADING,
} from './types';
const ref = firestore().collection('questions');
const clientRef = firestore().collection('clients');

export const questionChange = (text) => {
  return {
    type: QUESTION_CHANGED,
    payload: text,
  };
};

export const toggleLoading = () => {
  return {
    type: TOGGLE_LOADING,
  };
};

export const deleteQuestion = (id) => {
  return (dispatch) => {
    ref
      .doc(id)
      .delete()
      .then(() => {
        console.log('item deleted');
        ref.get().then((querySnapshot) => {
          if (querySnapshot.size === 0) {
            dispatch({type: DELETE_QUESTION});
            dispatch({type: HANDLE_EMPTY_QUESTION});
          }
        });
      })
      .catch((e) => {
        console.log('deletin item failed');
        dispatch({type: HANDLE_DELETE_QUE_ERROR, payload: 'deletion failed.'});
      });
  };
};

export const addQueLoading = () => {
  return {
    type: ADD_QUESTION_LOADING,
  };
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
      })
      .catch((e) => {
        console.log('Update question error', e);
        dispatch({
          type: HANDLE_UPDATE_QUE_ERROR,
          payload: 'Updation not processed.',
        });
      });
  };
};

export const clientAnswerFetch = (name) => {
  const clientAnswers = firestore()
    .collection('clients')
    .doc(name)
    .collection('QAS');

  return (dispatch) => {
    clientAnswers.onSnapshot((querySnapshot) => {
      const answers = [];
      querySnapshot.forEach((doc) => {
        const {answer, question, id} = doc.data();
        answers.push({
          question,
          answer,
          id,
        });
        dispatch({type: FETCH_CLIENT_ANSWERS, payload: answers});
      });
    });
  };
};

export const questionsFetch = () => {
  return (dispatch) => {
    ref.onSnapshot((querySnapshot) => {
      if (querySnapshot.size === 0) {
        dispatch({type: DELETE_QUESTION});
        dispatch({type: HANDLE_EMPTY_QUESTION});
      }
      const list = [];
      querySnapshot.forEach((doc) => {
        const {title} = doc.data();
        list.push({
          id: doc.id,
          title,
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
        dispatch({
          type: HANDLE_ADD_QUE_ERROR,
          payload: 'Question not added please try again.',
        });
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
