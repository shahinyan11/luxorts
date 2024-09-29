import assertFormSubmitAction from 'utils/testHelpers/assertFormSubmitAction';
import * as actions from '../actions';
import * as types from '../types';

it('userSignUp()', () => {
  assertFormSubmitAction(actions.userSignUp, types.USER_SIGN_UP);
});

it('userSignInSuccess()', () => {
  const currentUser = { id: '777', firstName: 'FName', lastName: 'LName' };
  const expectedAction = { type: types.USER_SIGN_IN_SUCCESS, currentUser };

  expect(actions.userSignInSuccess(currentUser)).toEqual(expectedAction);
});

it('userSignOut()', () => {
  const expectedAction = { type: types.USER_SIGN_OUT };

  expect(actions.userSignOut()).toEqual(expectedAction);
});

it('userSignOutSuccess()', () => {
  const expectedAction = { type: types.USER_SIGN_OUT_SUCCESS };

  expect(actions.userSignOutSuccess()).toEqual(expectedAction);
});

it('verifyUserEmail()', () => {
  assertFormSubmitAction(actions.verifyUserEmail, types.VERIFY_USER_EMAIL);
});

it('verifyUserPhone()', () => {
  assertFormSubmitAction(actions.verifyUserPhone, types.VERIFY_USER_PHONE);
});

it('resendUserEmailVerification()', () => {
  const expectedAction = { type: types.RESEND_USER_EMAIL_VERIFICATION };

  expect(actions.resendUserEmailVerification()).toEqual(expectedAction);
});

it('userSignIn()', () => {
  assertFormSubmitAction(actions.userSignIn, types.USER_SIGN_IN);
});

it('userActivateAccount()', () => {
  const expectedAction = {
    type: types.USER_ACTIVATE_ACCOUNT,
    redirectRoute: 'redirectRoute',
    isModal: true,
  };

  expect(actions.userActivateAccount({ redirectRoute: 'redirectRoute', isModal: true })).toEqual(
    expectedAction,
  );
});

it('updateUser()', () => {
  const expectedAction = {
    type: types.UPDATE_USER,
    userData: 'userData',
  };

  expect(actions.updateUser('userData')).toEqual(expectedAction);
});

it('userSendForgotPasswordEmail()', () => {
  assertFormSubmitAction(
    actions.userSendForgotPasswordEmail,
    types.USER_SEND_FORGOT_PASSWORD_EMAIL,
  );
});

it('userValidateForgotPasswordCode()', () => {
  assertFormSubmitAction(
    actions.userValidateForgotPasswordCode,
    types.USER_VALIDATE_FORGOT_PASSWORD_CODE,
  );
});

it('userResendForgotPasswordEmail()', () => {
  const expectedAction = {
    type: types.USER_RESEND_FORGOT_PASSWORD_EMAIL,
  };

  expect(actions.userResendForgotPasswordEmail()).toEqual(expectedAction);
});

it('userUpdatePassword()', () => {
  assertFormSubmitAction(actions.userUpdatePassword, types.USER_UPDATE_PASSWORD);
});

it('userUpdateProfile()', () => {
  assertFormSubmitAction(actions.userUpdateProfile, types.USER_UPDATE_PROFILE);
});

it('userUpdateAvatar()', () => {
  const expectedAction = {
    type: types.USER_UPDATE_AVATAR,
    file: 'file',
  };

  expect(actions.userUpdateAvatar('file')).toEqual(expectedAction);
});

it('userRemoveAvatar()', () => {
  const expectedAction = {
    type: types.USER_REMOVE_AVATAR,
  };

  expect(actions.userRemoveAvatar()).toEqual(expectedAction);
});

it('userDeactivateAccount()', () => {
  assertFormSubmitAction(actions.userDeactivateAccount, types.USER_DEACTIVATE_ACCOUNT);
});

it('userInviteFriends()', () => {
  assertFormSubmitAction(actions.userInviteFriends, types.USER_INVITE_FRIENDS);
});

it('fetchUserInvitation()', () => {
  const expectedAction = {
    type: types.FETCH_USER_INVITATION,
  };

  expect(actions.fetchUserInvitation()).toEqual(expectedAction);
});

it('setInvitationsPage()', () => {
  const expectedAction = {
    type: types.SET_INVITATIONS_PAGE,
    pageNumber: 1,
  };

  expect(actions.setInvitationsPage(1)).toEqual(expectedAction);
});

it('userResendInvite()', () => {
  const expectedAction = {
    type: types.USER_RESEND_INVITE,
    invitationId: 'invitationId',
  };

  expect(actions.userResendInvite('invitationId')).toEqual(expectedAction);
});

it('userSendUpdatePhone()', () => {
  assertFormSubmitAction(actions.userSendUpdatePhone, types.USER_SEND_UPDATE_PHONE);
});

it('userResendUpdatePhone()', () => {
  const expectedAction = {
    type: types.USER_RESEND_UPDATE_PHONE,
  };

  expect(actions.userResendUpdatePhone()).toEqual(expectedAction);
});

it('userUpdatePhone()', () => {
  assertFormSubmitAction(actions.userUpdatePhone, types.USER_UPDATE_PHONE);
});

it('userSendUpdateEmail()', () => {
  assertFormSubmitAction(actions.userSendUpdateEmail, types.USER_SEND_UPDATE_EMAIL);
});

it('userResendUpdateEmail()', () => {
  const expectedAction = {
    type: types.USER_RESEND_UPDATE_EMAIL,
  };

  expect(actions.userResendUpdateEmail()).toEqual(expectedAction);
});

it('userUpdateEmail()', () => {
  assertFormSubmitAction(actions.userUpdateEmail, types.USER_UPDATE_EMAIL);
});
