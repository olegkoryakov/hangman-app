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

const mappedKeyLetters = KEY_LETTERS.map((letter, index) => ({ letter, id: index + 1 }));

const Keyboard = ({ onKeyClick }) => (
  <div className="keyboard">
    <ul className="keyboard__list">
      {mappedKeyLetters.map(({ letter, id }) => (
        <li
          className="keyboard__item"
          key={id}
        >
          <button
            onClick={onKeyClick}
            type="button"
            className="keyboard__button"
          >
            {letter}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Keyboard.propTypes = {
  onKeyClick: PropTypes.func.isRequired,
};

export default Keyboard;
