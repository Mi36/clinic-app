import {combineReducers} from 'redux';
import clientReducer from './clientReducer';
import questionReducer from './questionReducer';

export default combineReducers({
  questions: questionReducer,
  clientData: clientReducer,
});
