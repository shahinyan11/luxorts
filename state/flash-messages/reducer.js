import { omit } from 'ramda';

import * as types from './types';

const initialState = {};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_MESSAGE:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          messageType: action.messageType,
          description: action.description,
          duration: action.duration,
        },
      };
    case types.HIDE_MESSAGE:
      return omit([action.id], state);
    case types.HIDE_ALL:
      return initialState;
    default:
      return state;
  }
};

export default notificationsReducer;
