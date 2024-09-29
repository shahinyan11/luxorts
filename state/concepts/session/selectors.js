import { createSelector } from 'reselect';
import { path, prop } from 'ramda';
import build from 'redux-object';

import isPresent from 'utils/isPresent';

import {
  fetchUserInvitationEndpoint,
  userSendUpdatePhoneEndpoint,
} from 'state/concepts/session/endpoints';
import { newPhoneSelector, totalCountSelector } from 'state/data/selectors';

const dataSelector = prop('data');

export const currentUserIdSelector = path(['session', 'currentUser', 'id']);

export const currentUserEmailSelector = path(['session', 'currentUser', 'email']);

export const currentUserSelector = path(['session', 'currentUser']);

export const isUserLoggedInSelector = createSelector(currentUserIdSelector, isPresent);

export const userInvitationSelector = createSelector(
  dataSelector,
  (data) => build(data, 'userInvitation') || [],
);

export const userNewPhoneSelector = (state) =>
  newPhoneSelector(state, userSendUpdatePhoneEndpoint.endpoint);

export const paginationSelector = path(['session', 'pagination']);

export const userInvitationCountSelector = (state) =>
  totalCountSelector(state, fetchUserInvitationEndpoint.endpoint);
