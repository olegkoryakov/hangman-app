import * as actions from '../actions/keyboardActions';

const addGuessedLetterActionCreator = (letter) => ({
  type: actions.ADD_GUESSED_LETTER,
  payload: letter,
});

const addUnguessedLetterActionCreator = (letter) => ({
  type: actions.ADD_UNGUESSED_LETTER,
  payload: letter,
});

const resetKeyboardActionCreator = () => ({
  type: actions.RESET_KEYBOARD,
});

export {
  addGuessedLetterActionCreator,
  addUnguessedLetterActionCreator,
  resetKeyboardActionCreator,
};
