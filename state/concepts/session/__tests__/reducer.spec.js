import reducer from '../reducer';
import * as types from '../types';

const initialSessionState = {
  currentUser: null,
  pagination: {
    number: 1,
    size: 20,
  },
};

describe('Session reducer', () => {
  describe('currentUser reducer', () => {
    it('returns initial state', () => {
      expect(reducer(undefined, {}).currentUser).toEqual(initialSessionState.currentUser);
    });

    it('handles USER_SIGN_IN_SUCCESS', () => {
      const currentUser = { id: '777' };
      const action = {
        type: types.USER_SIGN_IN_SUCCESS,
        currentUser,
      };
      expect(reducer(undefined, action).currentUser).toEqual({
        id: '777',
      });
    });

    it('handles USER_LOGOUT_SUCCESS', () => {
      const action = {
        type: types.USER_SIGN_OUT_SUCCESS,
      };
      expect(reducer(undefined, action).currentUser).toEqual(null);
    });

    it('handles UPDATE_USER', () => {
      const state = {
        currentUser: { name: 'fred', age: 10, contact: { email: 'moo@example.com' } },
      };
      const action = {
        type: types.UPDATE_USER,
        userData: { age: 40, contact: { email: 'baa@example.com' } },
      };
      const expected = { name: 'fred', age: 40, contact: { email: 'baa@example.com' } };

      expect(reducer(state, action).currentUser).toStrictEqual(expected);
    });

    it('handles UPDATE_USER', () => {
      const state = {
        currentUser: { name: 'fred', age: 10, contact: { email: 'moo@example.com' } },
      };
      const action = {
        type: types.UPDATE_USER,
        userData: { age: 40, contact: { email: 'baa@example.com' } },
      };
      const expected = { name: 'fred', age: 40, contact: { email: 'baa@example.com' } };

      expect(reducer(state, action).currentUser).toStrictEqual(expected);
    });
  });

  describe('pagination reducer', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {}).pagination).toEqual(initialSessionState.pagination);
    });

    it('should handle SET_INVITATIONS_PAGE', () => {
      const action = {
        type: types.SET_INVITATIONS_PAGE,
        pageNumber: 2,
      };

      expect(reducer(undefined, action).pagination).toEqual({ number: 2, size: 20 });
    });
  });
});
