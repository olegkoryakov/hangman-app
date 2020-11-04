import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './word.scss';

const Word = ({ words, currentIndex }) => {
  const currentWord = words[currentIndex];

  const mappedWord = currentWord.map(({ letter, isGuessed }, index) => (
    <li
      className="word__item"
      // eslint-disable-next-line react/no-array-index-key
      key={index}
    >
      <div className="word__letter">
        {isGuessed ? letter : ''}
      </div>
    </li>
  ));

  return (
    <div className="word">
      <ul className="word__list">
        {mappedWord}
      </ul>
    </div>
  );
};

Word.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({ ...state.word });

export default connect(mapStateToProps)(Word);
