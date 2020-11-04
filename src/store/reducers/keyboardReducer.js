import * as actions from '../actions/keyboardActions';

const keyboardInitialState = {
  letters: [
    'й', 'ц', 'у', 'к',
    'е', 'н', 'г', 'ш',
    'щ', 'з', 'х', 'ъ',
    'ф', 'ы', 'в', 'а',
    'п', 'р', 'о', 'л',
    'д', 'ж', 'э', 'я',
    'ч', 'с', 'м', 'и',
    'т', 'ь', 'б', 'ю',
    'ё',
  ],
  unguessedLetters: [],
  guessedLetters: [],
};

const keyboardReducer = (state = keyboardInitialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case actions.ADD_GUESSED_LETTER:
      return { ...state, guessedLetters: [...state.guessedLetters, payload] };
    case actions.ADD_UNGUESSED_LETTER:
      return { ...state, unguessedLetters: [...state.unguessedLetters, payload] };
    case actions.RESET_KEYBOARD:
      return { ...keyboardInitialState };
    default:
      return { ...state };
  }
};

export default keyboardReducer;
