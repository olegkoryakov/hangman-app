import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNextCurrentIndexActionCreator } from '../../store/actionCreators/wordActionCreators';
import './dialog.scss';

class Dialog extends Component {
  success = {
    text: 'Го некст?',
    buttonText: 'Го!',
  }

  win = {
    text: 'Ты победил, возьми с полки пирожок! Начнем заново?',
    buttonText: 'Давай! Одного пирожка мне мало)',
  }

  lose = {
    text: 'Оу, ты проиграл :(. Ещё раз?',
    buttonText: 'Го!',
  }

  onButtonClick = () => {
    const { setNextCurrentWordIndex } = this.props;
    setNextCurrentWordIndex();
  }

  render() {
    const { words, currentIndex } = this.props;

    const currentWord = words[currentIndex];
    const isWordGuessed = currentWord.every(({ isGuessed }) => isGuessed);

    let dialogProps = this.success;
    if (!isWordGuessed) dialogProps = this.lose;
    else if (words.length === currentIndex + 1) dialogProps = this.win;

    const { text, buttonText } = dialogProps;
    return (
      <div className="dialog">
        <p className="dialog__text">
          {text}
        </p>
        <button
          className="dialog__button"
          type="button"
          onClick={this.onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

Dialog.propTypes = {
  words: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape())).isRequired,
  currentIndex: PropTypes.number.isRequired,
  setNextCurrentWordIndex: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ ...state.word });

const mapDispatchToProps = (dispatch) => ({
  setNextCurrentWordIndex: () => dispatch(setNextCurrentIndexActionCreator()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
