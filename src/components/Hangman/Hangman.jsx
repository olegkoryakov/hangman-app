import React from 'react';
import PropTypes from 'prop-types';

import './hangman.scss';

const DEFAULT_IMG = './img/default.png';

const END_IMG = './img/dead.png';

const RANGE_IMGS = [
  './img/head.png', './img/body.png',
  './img/left-leg.png', './img/legs.png',
  './img/legs-left-arm.png', './img/legs-arms.png',
];

const MAX_ATTEMPTS = 15; // todo

const calcImgIdxFromAttempts = (currentAttempts) => {
  const { length } = RANGE_IMGS;

  const currentAttemptsPart = currentAttempts / MAX_ATTEMPTS;
  const currentImgIdx = (length) - Math.floor(length * currentAttemptsPart) - 1;
  return currentImgIdx;
};

const Hangman = ({ attempts }) => {
  let imgSrc;
  if (attempts === 0) imgSrc = END_IMG;
  else if (attempts === MAX_ATTEMPTS) imgSrc = DEFAULT_IMG;
  else imgSrc = RANGE_IMGS[calcImgIdxFromAttempts(attempts)];
  return (
    <div className="hangman">
      <img src={imgSrc} alt="asd" className="hangman__img" />
      <p className="hangman__attempts">
        Попыток:
        {' '}
        {attempts}
      </p>
    </div>
  );
};

Hangman.propTypes = {
  attempts: PropTypes.number.isRequired,
};

export default Hangman;
