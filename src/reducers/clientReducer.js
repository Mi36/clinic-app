import {FETCH_QUESTIONS_CLIENT} from '../actions/types';

const INITIAL_STATE = {
  questions: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_CLIENT:
      return {
        ...state,
        questions: action.payload,
      };

    default:
      return state;
  }
};
