import {
  ADD_ANSWER,
  FALSE_SUCCESS,
  FETCH_QUESTIONS_CLIENT,
  HANDLE_EMPTY_QUESTION,
  TOGGLE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  questions: [],
  loading: true,
  success: null,
  itemid: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_EMPTY_QUESTION:
      return {
        ...state,
        questions: [],
      };
    case FALSE_SUCCESS: {
      return {
        ...state,
        success: false,
        itemid: action.payload,
      };
    }

    case TOGGLE_SUCCESS:
      return {
        ...state,
        success: null,
        itemid: null,
      };

    case ADD_ANSWER:
      return {
        ...state,
        success: true,
      };

    case FETCH_QUESTIONS_CLIENT:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
