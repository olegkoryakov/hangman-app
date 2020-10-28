import React from 'react';
import PropTypes from 'prop-types';

import './word.scss';

const Word = ({ word }) => (
  <div className="word">
    <ul className="word__list">
      {word.map(({ letter, isGuessed, id }) => (
        <li
          className="word__item"
          key={id}
        >
          <div className="word__letter">
            {isGuessed ? letter : ''}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

Word.propTypes = {
  word: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Word;
