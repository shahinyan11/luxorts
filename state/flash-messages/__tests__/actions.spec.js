import { MESSAGE_DURATION, MESSAGE_TYPE } from 'state/flash-messages/messagesTypes';
import { mockedV4Value } from '__mocks__/uuid';
import * as types from '../types';
import * as actions from '../actions';

it('showMessage', () => {
  const expectedAction = {
    id: mockedV4Value,
    type: types.SHOW_MESSAGE,
    messageType: MESSAGE_TYPE.SUCCESS,
    duration: MESSAGE_DURATION.DEFAULT,
    description: { id: 'description.id' },
  };

  expect(actions.showMessage({ description: { id: 'description.id' } })).toEqual(expectedAction);
});

it('hideMessage action', () => {
  const expectedAction = {
    type: types.HIDE_MESSAGE,
    id: 'id',
  };

  expect(actions.hideMessage('id')).toEqual(expectedAction);
});

it('hideAll action', () => {
  const expectedAction = {
    type: types.HIDE_ALL,
  };

  expect(actions.hideAll()).toEqual(expectedAction);
});
