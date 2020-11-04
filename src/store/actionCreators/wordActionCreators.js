import * as actions from '../actions/wordActions';
import { decreaseAttemptsActionCreator, resetAttemptsActionCreator } from './hangmanActionCreators';
import { addGuessedLetterActionCreator, addUnguessedLetterActionCreator, resetKeyboardActionCreator } from './keyboardActionCreators';

const tryGuessLetterActionCreator = (letter) => (dispatch, getState) => {
  const { word, keyboard } = getState();

  const { words, currentIndex } = word;
  const { guessedLetters, unguessedLetters } = keyboard;

  const isUsedLetter = guessedLetters.includes(letter) || unguessedLetters.includes(letter);

  if (!isUsedLetter) {
    const currentWord = words[currentIndex];
    const isWordIncludesLetter = currentWord.some((wordItem) => wordItem.letter === letter);

    if (isWordIncludesLetter) {
      const nextWord = currentWord.map((wordItem) => {
        if (wordItem.letter === letter) return { ...wordItem, isGuessed: true };
        return { ...wordItem };
      });

      const nextWords = [...words];
      nextWords[currentIndex] = nextWord;

      dispatch({ type: actions.GUESS_LETTER, payload: nextWords });
      dispatch(addGuessedLetterActionCreator(letter));
    } else {
      dispatch(addUnguessedLetterActionCreator(letter));
      dispatch(decreaseAttemptsActionCreator());
    }
  }
};

const resetWordActionCreator = () => ({
  type: actions.RESET_WORD,
});

const setNextCurrentIndexActionCreator = () => (dispatch, getState) => {
  const { words, currentIndex } = getState().word;
  const { length } = words;

  const isWordGuessed = words[currentIndex].every(({ isGuessed }) => isGuessed);
  const nextIndex = currentIndex + 1;
  const isMaxIndex = length === nextIndex;

  if (isMaxIndex) {
    dispatch(resetWordActionCreator());
  } else if (isMaxIndex || !isWordGuessed) {
    dispatch(resetAttemptsActionCreator());
  } else {
    dispatch({ type: actions.SET_NEXT_CURRENT_INDEX, payload: nextIndex });
  }

  dispatch(resetKeyboardActionCreator());
};

export {
  resetWordActionCreator,
  tryGuessLetterActionCreator,
  setNextCurrentIndexActionCreator,
};
