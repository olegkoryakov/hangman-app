import React from 'react';
import PropTypes from 'prop-types';

import './keyboard.scss';

const KEY_LETTERS = [
  'й', 'ц', 'у', 'к',
  'е', 'н', 'г', 'ш',
  'щ', 'з', 'х', 'ъ',
  'ф', 'ы', 'в', 'а',
  'п', 'р', 'о', 'л',
  'д', 'ж', 'э', 'я',
  'ч', 'с', 'м', 'и',
  'т', 'ь', 'б', 'ю',
  'ё',
];

const mappedKeyLetters = KEY_LETTERS.map((keyLetter, index) => ({ keyLetter, id: index + 1 }));

const Keyboard = ({ onKeyClick, word }) => (
  <div className="keyboard">
    <ul className="keyboard__list">
      {mappedKeyLetters.map(({ keyLetter, id }) => (
        <li
          className="keyboard__item"
          key={id}
        >
          <button
            onClick={onKeyClick}
            type="button"
            className="keyboard__button"
            disabled={word
              .findIndex(({ letter, isGuessed }) => letter === keyLetter && isGuessed) !== -1}
          >
            {keyLetter}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Keyboard.propTypes = {
  onKeyClick: PropTypes.func.isRequired,
  word: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Keyboard;
