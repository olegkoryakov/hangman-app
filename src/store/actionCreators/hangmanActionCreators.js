import * as actions from '../actions/hangmanActions';

const resetAttemptsActionCreator = () => ({
  type: actions.RESET_ATTEMPTS,
});

const decreaseAttemptsActionCreator = () => ({
  type: actions.DECREASE_ATTEMPTS,
});

export {
  resetAttemptsActionCreator,
  decreaseAttemptsActionCreator,
};
