import {CLEAR_STATE_USER} from './types';

const initialState = {
  loading: false,
  user: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case CLEAR_STATE_USER:
      return {
        ...state,
        user: {},
        token: '',
      };
    default:
      return state;
  }
};
