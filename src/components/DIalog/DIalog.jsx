import React from 'react';
import PropTypes from 'prop-types';

import './dialog.scss';

const Dialog = ({ handler, text, buttonText }) => (
  <div className="dialog">
    <p className="dialog__text">
      {text}
    </p>
    <button
      className="dialog__button"
      type="button"
      onClick={handler}
    >
      {buttonText}
    </button>
  </div>
);

Dialog.propTypes = {
  handler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Dialog;
