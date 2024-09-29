import * as actions from '../actions';
import * as types from '../types';

it('fetchSelf()', () => {
  const expectedAction = { type: types.FETCH_SELF };

  expect(actions.fetchSelf()).toEqual(expectedAction);
});
