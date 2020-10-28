import React, { Component } from 'react';
import Dialog from '../Dialog/Dialog';
import Hangman from '../Hangman/Hangman';
import Keyboard from '../Keyboard/Keyboard';
import Word from '../Word/Word';

import './app.scss';

const WORDS = ['собака', 'транспорт', 'духи', 'человек', 'реакт'];
const splitWord = (word) => word.split('').map((letter, index) => ({ letter, id: index + 1, isGuessed: false }));

const mappedWords = WORDS.map((word) => splitWord(word));

const initialState = {
  words: mappedWords,
  attempts: 15,
  currentWordIndex: 0,
};

export default class App extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  onKeyClick = (evt) => {
    const userLetter = evt.target.textContent;

    const { state } = this;
    const { currentWordIndex, words, attempts } = state;

    const currentWord = words[currentWordIndex];

    const isWordContainsUnguessedUserLetter = currentWord
      .some(({ letter, isGuessed }) => letter === userLetter && !isGuessed);

    if (isWordContainsUnguessedUserLetter) {
      const nextCurrentWord = currentWord.map((letterOptions) => {
        const { letter } = letterOptions;
        const isUserLetter = letter === userLetter;
        if (isUserLetter) return { ...letterOptions, isGuessed: true };
        return letterOptions;
      });

      const nextWords = [...words];
      nextWords[currentWordIndex] = nextCurrentWord;

      this.setState({ ...state, words: nextWords });
    } else {
      this.setState({ ...state, attempts: attempts - 1 });
    }
  }

  resetState = () => {
    this.setState(initialState);
  }

  setNextWordIndex = () => {
    const { state } = this;
    const { currentWordIndex } = state;

    this.setState({ ...state, currentWordIndex: currentWordIndex + 1 });
  }

  renderControls() {
    const { words, attempts, currentWordIndex } = this.state;
    const currentWord = words[currentWordIndex];

    const isCurrentWordGuessed = currentWord.every(({ isGuessed }) => isGuessed);
    const isLastWord = currentWordIndex === words.length - 1;

    let dialogText = null;
    let dialogHandler = null;
    let dialogButtonText = null;

    if (attempts === 0) {
      dialogText = 'Ты проиграл, начнём с начала?';
      dialogButtonText = 'Едем, я так просто не сдамся!';
      dialogHandler = this.resetState;
    } else if (isCurrentWordGuessed) {
      if (isLastWord) {
        dialogText = 'Ты прошел все уровни, можешь взять с полки пирожок! Может быть повторим?)';
        dialogButtonText = 'Поехали!';
        dialogHandler = this.resetState;
      } else {
        dialogText = 'Ты угадал слово! Едем дальше?';
        dialogButtonText = 'Поехали!';
        dialogHandler = this.setNextWordIndex;
      }
    }
    return (
      <>
        {dialogHandler && dialogText && dialogButtonText
          ? <div className="app__dialog"><Dialog text={dialogText} handler={dialogHandler} buttonText={dialogButtonText} /></div>
          : <div className="app__keyboard"><Keyboard word={currentWord} onKeyClick={this.onKeyClick} /></div>}
      </>
    );
  }

  render() {
    const { words, attempts, currentWordIndex } = this.state;
    const currentWord = words[currentWordIndex];
    return (
      <div className="app">
        <h1 className="app__title">
          Уровень
          {' '}
          {currentWordIndex + 1}
        </h1>
        <div className="app__hangman">
          <Hangman attempts={attempts} />
        </div>
        <div className="app__word">
          <Word word={currentWord} />
        </div>
        {this.renderControls()}
      </div>
    );
  }
}
