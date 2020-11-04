import MAX_ATTEMPTS from '../../utils/MAX_ATTEMPTS';
import * as actions from '../actions/hangmanActions';

const hangmanInitialState = {
  attempts: MAX_ATTEMPTS,
};

const hangmanReducer = (state = hangmanInitialState, action) => {
  const { type } = action;
  switch (type) {
    case actions.RESET_ATTEMPTS:
      return { ...hangmanInitialState };
    case actions.DECREASE_ATTEMPTS:
      return { ...state, attempts: state.attempts - 1 };
    default:
      return { ...state };
  }
};

export default hangmanReducer;
