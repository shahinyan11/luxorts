import { omit } from 'ramda';

import { MESSAGE_DURATION, MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { mockedV4Value } from '__mocks__/uuid';
import reducer from '../reducer';
import * as types from '../types';

describe('notificationsReducer', () => {
  let messagesState = {};

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(messagesState);
  });

  it('should handle SHOW_MESSAGE', () => {
    const action = {
      type: types.SHOW_MESSAGE,
      id: mockedV4Value,
      duration: MESSAGE_DURATION.DEFAULT,
      messageType: MESSAGE_TYPE.SUCCESS,
      description: { id: 'description.id' },
    };

    const newMessagesState = {
      ...messagesState,
      [action.id]: omit(['type'], action),
    };

    expect(reducer(undefined, action)).toEqual(newMessagesState);
  });

  it('should handle HIDE_MESSAGE', () => {
    const action = {
      type: types.HIDE_MESSAGE,
      id: mockedV4Value,
    };

    messagesState = {
      [mockedV4Value]: {},
    };

    expect(reducer(messagesState, action)).toEqual({});
  });

  it('should handle HIDE_ALL', () => {
    const action = {
      type: types.HIDE_ALL,
    };

    messagesState = {
      [mockedV4Value]: 'test',
    };

    expect(reducer(messagesState, action)).toEqual({});
  });
});
