import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from '../Dialog/Dialog';
import Keyboard from '../Keyboard/Keyboard';
import MAX_ATTEMPTS from '../../utils/MAX_ATTEMPTS';

class Controls extends Component {
  shouldComponentUpdate(nextProps) {
    const { words, currentIndex } = this.props;

    const currentWord = words[currentIndex];

    const nextIndex = nextProps.currentIndex;
    const nextAttempts = nextProps.attempts;
    const nextWord = nextProps.words[nextIndex];

    const isCurrentWordGuessed = currentWord.every(({ isGuessed }) => isGuessed);
    const isNextWordGuessed = nextWord.every(({ isGuessed }) => isGuessed);
    const isLose = nextAttempts === 0;
    const isReset = nextAttempts === MAX_ATTEMPTS;
    if (currentIndex === nextIndex
      && isCurrentWordGuessed === isNextWordGuessed
      && !isLose && !isReset) return false;
    return true;
  }

  render() {
    const { words, currentIndex, attempts } = this.props;
    const currentWord = words[currentIndex];
    const isWordGuessed = currentWord.every(({ isGuessed }) => isGuessed);
    const isLose = attempts === 0;
    return (
      <div className="controls">
        {isWordGuessed || isLose ? <Dialog /> : <Keyboard />}
      </div>
    );
  }
}

Controls.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  currentIndex: PropTypes.number.isRequired,
  attempts: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.word,
  ...state.hangman,
});

export default connect(mapStateToProps)(Controls);
