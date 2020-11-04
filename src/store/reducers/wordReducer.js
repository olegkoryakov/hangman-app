import * as actions from '../actions/wordActions';
import words from '../../lib/words.json';
import splitWord from '../../utils/splitWord';

const splittedWords = words.map((word) => splitWord(word));

const wordInitialState = {
  words: splittedWords,
  currentIndex: 0,
};

const wordReducer = (state = wordInitialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case actions.GUESS_LETTER:
      return { ...state, words: payload };
    case actions.SET_NEXT_CURRENT_INDEX:
      return { ...state, currentIndex: payload };
    case actions.RESET_WORD:
      return { ...wordInitialState };
    default:
      return { ...state };
  }
};

export default wordReducer;
