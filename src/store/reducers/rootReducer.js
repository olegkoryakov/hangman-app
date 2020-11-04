import { combineReducers } from 'redux';
import keyboardReducer from './keyboardReducer';
import wordReducer from './wordReducer';
import hangmanReducer from './hangmanReducer';

const rootReducer = combineReducers({
  hangman: hangmanReducer,
  word: wordReducer,
  keyboard: keyboardReducer,
});

export default rootReducer;
