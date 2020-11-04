import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryGuessLetterActionCreator } from '../../store/actionCreators/wordActionCreators';
import './keyboard.scss';

class Keyboard extends Component {
  componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }

  onKeyPress = (e) => {
    const { tryGuessLetter } = this.props;
    const keyLetter = e.key;
    tryGuessLetter(keyLetter);
  }

  onKeyClick = (e) => {
    const { tryGuessLetter } = this.props;
    const keyLetter = e.target.textContent;
    tryGuessLetter(keyLetter);
  }

  keyboardItemsTemplate = () => {
    const { letters, guessedLetters, unguessedLetters } = this.props;
    const mappedLetters = letters.map((letter, index) => {
      const isLetterGuessed = guessedLetters.includes(letter);
      const isLetterUnguessed = unguessedLetters.includes(letter);

      let classModifier = '';
      if (isLetterGuessed) classModifier = 'keyboard__button_guessed';
      else if (isLetterUnguessed) classModifier = 'keyboard__button_unguessed';

      const isDisabled = isLetterUnguessed || isLetterGuessed;
      return (
        <li
          className="keyboard__item"
          // eslint-disable-next-line react/no-array-index-key
          key={index}
        >
          <button
            type="button"
            onClick={this.onKeyClick}
            disabled={isDisabled}
            className={`keyboard__button ${classModifier}`}
          >
            {letter}
          </button>
        </li>
      );
    });

    return mappedLetters;
  }

  render() {
    return (
      <div className="keyboard">
        <ul className="keyboard__list">
          {this.keyboardItemsTemplate()}
        </ul>
      </div>
    );
  }
}

Keyboard.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  unguessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  tryGuessLetter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.keyboard,
});

const mapDispatchToProps = (dispatch) => ({
  tryGuessLetter: (letter) => dispatch(tryGuessLetterActionCreator(letter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);
