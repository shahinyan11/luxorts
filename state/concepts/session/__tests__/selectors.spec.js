import normalize from 'json-api-normalizer';
import build from 'redux-object';

import {
  fetchUserInvitationEndpoint,
  userSendUpdatePhoneEndpoint,
} from 'state/concepts/session/endpoints';
import inviteFriendsResponse from 'state/concepts/session/__mocks__/inviteFriendsResponse';

import {
  currentUserIdSelector,
  currentUserSelector,
  isUserLoggedInSelector,
  userInvitationCountSelector,
  userInvitationSelector,
  userNewPhoneSelector,
} from '../selectors';

describe('Session selectors', () => {
  describe('currentUserSelector', () => {
    it('returns session current user', () => {
      const state = {
        session: { currentUser: { id: 'id' } },
      };
      expect(currentUserSelector(state)).toEqual(state.session.currentUser);
    });
  });

  describe('currentUserIdSelector', () => {
    it('returns session current user id', () => {
      const state = {
        session: { currentUser: { id: 'id' } },
      };
      expect(currentUserIdSelector(state)).toEqual('id');
    });
  });

  describe('isUserLoggedInSelector()', () => {
    it('returns true if user is logged in', () => {
      const state = {
        session: { currentUser: { id: 'id' } },
      };
      expect(isUserLoggedInSelector(state)).toEqual(true);
    });

    it('returns false if user is not logged in', () => {
      const state = {
        session: { currentUser: null },
      };
      expect(isUserLoggedInSelector(state)).toEqual(false);
    });
  });

  describe('userInvitationSelector', () => {
    it('returns user invitations when data is present', () => {
      const state = {
        data: normalize(inviteFriendsResponse.data),
      };

      expect(userInvitationSelector(state)).toEqual(build(state.data, 'userInvitation'));
    });

    it('returns empty array when data isn`t present', () => {
      const state = {
        data: {},
      };

      expect(userInvitationSelector(state)).toEqual([]);
    });
  });

  describe('userInvitationCountSelector()', () => {
    it('returns total count invitations', () => {
      const state = {
        data: {
          meta: {
            [fetchUserInvitationEndpoint.endpoint]: { meta: { total: 10 } },
          },
        },
      };

      expect(userInvitationCountSelector(state)).toEqual(10);
    });
  });

  describe('userNewPhoneSelector()', () => {
    it('returns new phone number', () => {
      const state = {
        data: {
          meta: {
            [userSendUpdatePhoneEndpoint.endpoint]: { meta: { newPhone: 'phone' } },
          },
        },
      };

      expect(userNewPhoneSelector(state)).toEqual('phone');
    });
  });
});
