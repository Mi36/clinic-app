import {
  ADD_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  QUESTION_CHANGED,
  QUESTION_FETCH_SUCCES,
  ADD_QUESTION_ERROR,
  FETCH_CLIENTS,
  FETCH_CLIENT_ANSWERS,
} from '../actions/types';
const INITIAL_STATE = {
  question: '',
  list: [],
  error: '',
  loading: true,
  clients: [],
  answers: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CLIENT_ANSWERS:
      return {
        ...state,
        answers: action.payload,
      };

    case EDIT_QUESTION:
      return {
        ...state,
      };
    case DELETE_QUESTION:
      return {
        ...state,
      };
    case ADD_QUESTION:
      return {
        ...state,
        question: '',
        error: '',
      };
    case QUESTION_CHANGED:
      return {...state, question: action.payload};
    case QUESTION_FETCH_SUCCES:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case ADD_QUESTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return state;
  }
};
