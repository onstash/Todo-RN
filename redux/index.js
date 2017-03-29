import { combineReducers } from 'redux';
import todo from './reducers/todo';
import text from './reducers/text';

module.exports = combineReducers({
  todo,
  text
});
