import makeFormSubmitAction from 'utils/form/makeFormSubmitAction';
import * as types from 'state/concepts/session/types';

export const userSignUp = makeFormSubmitAction(types.USER_SIGN_UP);

export const userSignInSuccess = (currentUser) => ({
  type: types.USER_SIGN_IN_SUCCESS,
  currentUser,
});

export const userSignOut = () => ({
  type: types.USER_SIGN_OUT,
});

export const userSignOutSuccess = () => ({
  type: types.USER_SIGN_OUT_SUCCESS,
});

export const verifyUserEmail = makeFormSubmitAction(types.VERIFY_USER_EMAIL);

export const verifyUserPhone = makeFormSubmitAction(types.VERIFY_USER_PHONE);

export const resendUserEmailVerification = () => ({
  type: types.RESEND_USER_EMAIL_VERIFICATION,
});

export const userSignIn = makeFormSubmitAction(types.USER_SIGN_IN);

export const userActivateAccount = ({ redirectRoute = null, isModal = false }) => ({
  type: types.USER_ACTIVATE_ACCOUNT,
  redirectRoute,
  isModal,
});

export const updateUser = (userData) => ({
  type: types.UPDATE_USER,
  userData,
});

export const userSendForgotPasswordEmail = makeFormSubmitAction(
  types.USER_SEND_FORGOT_PASSWORD_EMAIL,
);

export const userValidateForgotPasswordCode = makeFormSubmitAction(
  types.USER_VALIDATE_FORGOT_PASSWORD_CODE,
);

export const userResendForgotPasswordEmail = () => ({
  type: types.USER_RESEND_FORGOT_PASSWORD_EMAIL,
});

export const userUpdatePassword = makeFormSubmitAction(types.USER_UPDATE_PASSWORD);

export const userUpdateAvatar = (file) => ({
  type: types.USER_UPDATE_AVATAR,
  file,
});

export const userRemoveAvatar = () => ({
  type: types.USER_REMOVE_AVATAR,
});

export const userUpdateProfile = makeFormSubmitAction(types.USER_UPDATE_PROFILE);

export const userDeactivateAccount = makeFormSubmitAction(types.USER_DEACTIVATE_ACCOUNT);

export const userChangePassword = makeFormSubmitAction(types.USER_CHANGE_PASSWORD);

export const userInviteFriends = makeFormSubmitAction(types.USER_INVITE_FRIENDS);

export const fetchUserInvitation = () => ({
  type: types.FETCH_USER_INVITATION,
});

export const setInvitationsPage = (pageNumber) => ({
  type: types.SET_INVITATIONS_PAGE,
  pageNumber,
});

export const userResendInvite = (invitationId) => ({
  type: types.USER_RESEND_INVITE,
  invitationId,
});

export const userSendUpdatePhone = makeFormSubmitAction(types.USER_SEND_UPDATE_PHONE);

export const userResendUpdatePhone = () => ({
  type: types.USER_RESEND_UPDATE_PHONE,
});

export const userUpdatePhone = makeFormSubmitAction(types.USER_UPDATE_PHONE);

export const userResendUpdateEmail = () => ({
  type: types.USER_RESEND_UPDATE_EMAIL,
});

export const userSendUpdateEmail = makeFormSubmitAction(types.USER_SEND_UPDATE_EMAIL);

export const userUpdateEmail = makeFormSubmitAction(types.USER_UPDATE_EMAIL);
