import {combineReducers} from 'redux';
import questionReducer from './questionReducer';
import clientReducer from './clientReducer';

export default combineReducers({
  questions: questionReducer,
  clientData: clientReducer,
});
