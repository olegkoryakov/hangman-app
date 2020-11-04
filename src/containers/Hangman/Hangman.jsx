import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MAX_ATTEMPTS from '../../utils/MAX_ATTEMPTS';
import './hangman.scss';

class Hangman extends Component {
  DEFAULT_IMG = './img/default.png';

  END_IMG = './img/dead.png';

  RANGE_IMGS = [
    './img/head.png', './img/body.png',
    './img/left-leg.png', './img/legs.png',
    './img/legs-left-arm.png', './img/legs-arms.png',
  ];

  calcImgIdxFromAttempts = () => {
    const { attempts } = this.props;
    const { length } = this.RANGE_IMGS;

    const currentAttemptsPart = attempts
      / (MAX_ATTEMPTS);
    const currentImgIdx = (length) - Math.floor(length * currentAttemptsPart) - 1;
    return currentImgIdx;
  }

  render() {
    const { attempts } = this.props;

    let imgSrc;
    if (attempts === 0) imgSrc = this.END_IMG;
    else if (attempts === MAX_ATTEMPTS) imgSrc = this.DEFAULT_IMG;
    else imgSrc = this.RANGE_IMGS[this.calcImgIdxFromAttempts()];
    return (
      <div className="hangman">
        <img src={imgSrc} alt="" className="hangman__img" />
        <p className="hangman__attempts-count">
          Попыток:
          {' '}
          {attempts}
        </p>
      </div>
    );
  }
}

Hangman.propTypes = {
  attempts: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  ...state.hangman,
});

export default connect(mapStateToProps)(Hangman);
