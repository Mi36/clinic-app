import {FETCH_QUESTIONS_CLIENT} from './types';
import firestore from '@react-native-firebase/firestore';
const ref = firestore().collection('questions');

const dummy = firestore().collection('clients').doc('illyas');
const clientRef = firestore()
  .collection('clients')
  .doc('illyas')
  .collection('QAS');

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
