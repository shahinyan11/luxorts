import normalize from 'json-api-normalizer';
import { mergeDeepRight } from 'ramda';

import { USER_ACCOUNT_ENTITIES } from 'constants';
import usersResponse from 'state/concepts/users/__mocks__/fetchUsersResponse';
import { USER_SIGN_OUT } from 'state/concepts/session/types';

import reducer from '../reducer';
import * as types from '../types';

describe('dataReducer', () => {
  const usersData = normalize(usersResponse.data);

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({ meta: {} });
  });

  it('should handle DATA_API_REQUEST', () => {
    const endpoint = '/users';
    const action = {
      type: types.DATA_API_REQUEST,
      endpoint,
    };

    expect(reducer(undefined, action)).toEqual({
      meta: {
        '/users': {
          loading: true,
        },
      },
    });
  });

  it('should handle DATA_API_SUCCESS', () => {
    const endpoint = '/users';
    const action = {
      type: types.DATA_API_SUCCESS,
      endpoint,
      response: usersData,
    };

    const priorUsersState = {
      users: {
        777: {
          id: '777',
          type: 'users',
          attributes: {
            'first-name': 'Test',
            'last-name': 'Test',
            status: 'active',
          },
        },
      },
    };

    // without prior state
    const result = mergeDeepRight(
      priorUsersState,
      mergeDeepRight(usersData, { meta: { [endpoint]: { loading: false } } }),
    );
    expect(reducer(priorUsersState, action)).toEqual(result);
  });

  it('should handle DATA_API_FAILURE', () => {
    const endpoint = '/users';
    const action = {
      type: types.DATA_API_FAILURE,
      endpoint,
    };

    expect(reducer(undefined, action)).toEqual({
      meta: {
        [endpoint]: {
          loading: false,
        },
      },
    });
  });

  it('should handle DATA_DELETE', () => {
    const action = {
      type: types.DATA_DELETE,
      kind: 'users',
      ids: ['364'],
    };

    const resultState = Object.assign({}, { ...usersData });
    resultState.users = { 367: usersData.users[367] };

    expect(reducer(usersData, action)).toEqual(resultState);
  });

  it('should handle DATA_REMOVE_RELATIONSHIP', () => {
    const action = {
      type: types.DATA_REMOVE_RELATIONSHIP,
      kind: 'camper',
      ownerId: 1,
      relationship: 'documents',
      ids: [2],
    };

    const initialState = {
      camper: {
        1: {
          relationships: {
            documents: {
              data: [
                {
                  id: 2,
                },
              ],
            },
          },
        },
      },
    };

    const expected = {
      camper: {
        1: {
          relationships: {
            documents: {
              data: [],
            },
          },
        },
      },
    };

    expect(reducer(initialState, action)).toEqual(expected);
  });

  it('should handle DATA_DELETE_ENTITY', () => {
    const action = {
      type: types.DATA_DELETE_ENTITY,
      kind: 'foo',
    };

    const initialState = {
      foo: { bar: 'baz' },
    };

    expect(reducer(initialState, action)).toEqual({
      foo: {},
    });
  });

  it('should handle USER_SIGN_OUT', () => {
    const action = {
      type: USER_SIGN_OUT,
    };

    const initialState = {
      [USER_ACCOUNT_ENTITIES[0]]: { foo: 'bar' },
    };

    expect(reducer(initialState, action)).toEqual({});
  });
});
